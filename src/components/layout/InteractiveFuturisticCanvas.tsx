import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  depth: number; // for scroll parallax (0.5 to 1.5)
}

/**
 * InteractiveFuturisticCanvas
 * High-performance 2D Canvas rendering:
 * - Subtle drifting network nodes
 * - Smooth proximity connection lines
 * - Interactive mouse attraction and connection web
 * - Subtle ambient cursor spotlight with lerped movement
 * - Scroll parallax response for 3D visual depth
 * - Designed specifically for light-mode-first aesthetic (non-black)
 */
export const InteractiveFuturisticCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse state with smooth damping (lerp)
    const mouse = {
      targetX: width / 2,
      targetY: height / 3,
      currentX: width / 2,
      currentY: height / 3,
      isHovered: false,
    };

    // Scroll state for parallax
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    // Generate balanced, subtle nodes
    const NODE_COUNT = Math.min(Math.floor(width / 32), 48);
    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        const radius = Math.random() * 1.5 + 1.2;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius,
          baseRadius: radius,
          depth: Math.random() * 0.8 + 0.6,
        });
      }
    };

    initNodes();

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Render loop
    const render = () => {
      // Smooth lerp for mouse and scroll
      mouse.currentX += (mouse.targetX - mouse.currentX) * 0.06;
      mouse.currentY += (mouse.targetY - mouse.currentY) * 0.06;
      scrollY += (targetScrollY - scrollY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const isDarkMode = document.documentElement.classList.contains('dark');

      // 1. Soft Mouse Ambient Spotlight
      if (mouse.isHovered) {
        const spotlightGradient = ctx.createRadialGradient(
          mouse.currentX,
          mouse.currentY,
          0,
          mouse.currentX,
          mouse.currentY,
          260
        );
        if (isDarkMode) {
          spotlightGradient.addColorStop(0, 'rgba(59, 130, 246, 0.06)');
          spotlightGradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.025)');
          spotlightGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          spotlightGradient.addColorStop(0, 'rgba(56, 189, 248, 0.07)');
          spotlightGradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
          spotlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }
        ctx.fillStyle = spotlightGradient;
        ctx.beginPath();
        ctx.arc(mouse.currentX, mouse.currentY, 260, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Update and draw nodes
      const nodeColor = isDarkMode ? 'rgba(148, 163, 184, 0.45)' : 'rgba(71, 85, 105, 0.35)';
      const activeNodeColor = isDarkMode ? 'rgba(96, 165, 250, 0.7)' : 'rgba(56, 189, 248, 0.6)';

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move node
        node.x += node.vx;
        node.y += node.vy;

        // Bounce gently at screen edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Apply scroll parallax calculation
        const apparentY = (node.y - (scrollY * 0.15 * node.depth)) % height;
        const normalizedY = apparentY < 0 ? apparentY + height : apparentY;

        // Mouse proximity interaction
        const dx = mouse.currentX - node.x;
        const dy = mouse.currentY - normalizedY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        let isNearMouse = false;
        if (distToMouse < 140 && mouse.isHovered) {
          isNearMouse = true;
          // Gentle mouse attraction
          node.x += (dx / distToMouse) * 0.2;
          node.y += (dy / distToMouse) * 0.2;

          // Draw connection line to mouse
          const alpha = (1 - distToMouse / 140) * (isDarkMode ? 0.25 : 0.2);
          ctx.beginPath();
          ctx.moveTo(node.x, normalizedY);
          ctx.lineTo(mouse.currentX, mouse.currentY);
          ctx.strokeStyle = isDarkMode 
            ? `rgba(96, 165, 250, ${alpha})` 
            : `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Draw node circle
        ctx.beginPath();
        ctx.arc(node.x, normalizedY, isNearMouse ? node.radius * 1.5 : node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isNearMouse ? activeNodeColor : nodeColor;
        ctx.fill();

        // 3. Draw inter-node connection lines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const otherApparentY = (other.y - (scrollY * 0.15 * other.depth)) % height;
          const otherNormalizedY = otherApparentY < 0 ? otherApparentY + height : otherApparentY;

          const ndx = node.x - other.x;
          const ndy = normalizedY - otherNormalizedY;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (nDist < 110) {
            const lineAlpha = (1 - nDist / 110) * (isDarkMode ? 0.12 : 0.09);
            ctx.beginPath();
            ctx.moveTo(node.x, normalizedY);
            ctx.lineTo(other.x, otherNormalizedY);
            ctx.strokeStyle = isDarkMode 
              ? `rgba(148, 163, 184, ${lineAlpha})` 
              : `rgba(100, 116, 139, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
};

