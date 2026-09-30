import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colorType: 'gold_light' | 'gold_dark' | 'silver';
}

export const InteractiveCyberSymbolsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const numParticles = Math.floor((width * height) / 16000); 

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        colorType: Math.random() > 0.6 ? 'gold_light' : (Math.random() > 0.3 ? 'gold_dark' : 'silver')
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Gold Light (amber-400), Gold Dark (amber-600)
                if (p.colorType === 'gold_light') {
          ctx.fillStyle = 'rgba(217, 119, 6, 0.4)'; // Gold (amber-600)
        } else if (p.colorType === 'gold_dark') {
          ctx.fillStyle = 'rgba(15, 23, 42, 0.4)';  // Black (slate-900)
        } else {
          ctx.fillStyle = 'rgba(203, 213, 225, 0.6)'; // White/Silver (slate-300)
        }
        ctx.fill();
      }

      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            const alpha = (1 - dist / 140) * 0.35; 
            
            if (particles[i].colorType === 'gold_light' || particles[j].colorType === 'gold_light') {
                ctx.strokeStyle = `rgba(217, 119, 6, ${alpha})`; // Gold
            } else if (particles[i].colorType === 'gold_dark' || particles[j].colorType === 'gold_dark') {
                ctx.strokeStyle = `rgba(15, 23, 42, ${alpha})`; // Black
            } else {
                ctx.strokeStyle = `rgba(203, 213, 225, ${alpha})`; // Silver/White
            }
            
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-multiply"
    />
  );
};



