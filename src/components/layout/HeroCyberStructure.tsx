import React from 'react';

/**
 * HeroCyberStructure
 * A large, abstract, futuristic cyber-security orbital structure.
 * Positioned behind the Hero section to give deep 3D cinematic presence:
 * - Concentric orbital rings with dashed segments and degree ticks
 * - Counter-rotating planetary / security geometry
 * - Precision telemetry badges and coordinate readouts
 * - Soft atmospheric central glow
 * - 100% vector SVG, lightweight and razor-sharp on all screen densities
 */
export const HeroCyberStructure: React.FC = () => {
  return (
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] sm:w-[920px] lg:w-[1100px] h-[760px] sm:h-[920px] lg:h-[1100px] pointer-events-none -z-10 select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Core Soft Atmospheric Glow */}
      <div className="absolute inset-0 m-auto w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] rounded-full bg-gradient-to-tr from-teal-500/[0.04] via-indigo-500/[0.03] to-sky-400/[0.02] blur-[120px]" />

      {/* 2. Main Vector Orbital System - Soft, non-interfering ambient lines */}
      <svg 
        className="w-full h-full opacity-20" 
        viewBox="0 0 1000 1000" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle linear gradients for rings */}
          <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#64748B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Center Crosshair Axis */}
        <g stroke="currentColor" strokeWidth="0.75" className="text-slate-300/80 dark:text-slate-700/60">
          <line x1="100" y1="500" x2="900" y2="500" strokeDasharray="6 6" />
          <line x1="500" y1="100" x2="500" y2="900" strokeDasharray="6 6" />
          <circle cx="500" cy="500" r="4" className="fill-blue-600/40 dark:fill-blue-400/40" />
        </g>

        {/* Outer Orbit 1: Slow Clockwise Rotation */}
        <g className="origin-center animate-[spin_180s_linear_infinite]">
          {/* Outer Main Ring */}
          <circle 
            cx="500" 
            cy="500" 
            r="440" 
            stroke="url(#ringGrad1)" 
            strokeWidth="1" 
            strokeDasharray="4 8 16 8 32 12"
          />

          {/* Coordinate Marks on Outer Orbit */}
          <circle cx="500" cy="60" r="3" className="fill-blue-600 dark:fill-blue-400" />
          <circle cx="940" cy="500" r="2.5" className="fill-slate-400 dark:fill-slate-500" />
          <circle cx="500" cy="940" r="2.5" className="fill-slate-400 dark:fill-slate-500" />
          <circle cx="60" cy="500" r="2.5" className="fill-slate-400 dark:fill-slate-500" />

          {/* Precision Degree Marks */}
          <path d="M 500 48 L 500 58 M 942 500 L 952 500 M 500 942 L 500 952 M 48 500 L 58 500" stroke="currentColor" strokeWidth="1" className="text-slate-400 dark:text-slate-600" />
        </g>

        {/* Middle Orbit 2: Counter Clockwise Rotation */}
        <g className="origin-center animate-[spin_120s_linear_infinite_reverse]">
          {/* Middle Ring with segmented arcs */}
          <circle 
            cx="500" 
            cy="500" 
            r="330" 
            stroke="url(#ringGrad2)" 
            strokeWidth="1.2" 
            strokeDasharray="180 40 90 30 40 20"
          />

          {/* Orbiting Sensor Nodes */}
          <g transform="translate(500, 170)">
            <circle cx="0" cy="0" r="4" className="fill-blue-500/60 dark:fill-blue-400/80" />
            <circle cx="0" cy="0" r="8" stroke="currentColor" strokeWidth="0.8" className="text-teal-500/40 animate-ping" />
          </g>
          <g transform="translate(500, 830)">
            <circle cx="0" cy="0" r="3" className="fill-indigo-500/50" />
          </g>
        </g>

        {/* Inner Security Core Orbit 3: Steady Smooth Spin */}
        <g className="origin-center animate-[spin_90s_linear_infinite]">
          <circle 
            cx="500" 
            cy="500" 
            r="220" 
            stroke="currentColor" 
            strokeWidth="0.75" 
            className="text-slate-300 dark:text-slate-700" 
            strokeDasharray="12 6"
          />
          {/* Subtle Hexagonal / Octagonal Nodes */}
          <polygon 
            points="500,280 655,345 720,500 655,655 500,720 345,655 280,500 345,345" 
            stroke="currentColor" 
            strokeWidth="0.65" 
            className="text-slate-200/90 dark:text-slate-800" 
            strokeDasharray="4 8"
          />
        </g>

        {/* Innermost Horizon Circle */}
        <circle 
          cx="500" 
          cy="500" 
          r="120" 
          stroke="currentColor" 
          strokeWidth="0.75" 
          className="text-teal-500/30 dark:text-teal-400/30" 
        />
      </svg>

      {/* 3. Floating Technical Coordinate Badges (Delicate & Clean) */}
      <div className="absolute top-[18%] left-[8%] hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/[0.08] shadow-xs backdrop-blur-xs text-[10px] font-mono text-slate-500 dark:text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
        <span>SYS_CORE // SEC_ZONE: ALPHA</span>
      </div>

      <div className="absolute top-[24%] right-[10%] hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/[0.08] shadow-xs backdrop-blur-xs text-[10px] font-mono text-slate-500 dark:text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span>TELEMETRY: VERIFIED_OK</span>
      </div>

      <div className="absolute bottom-[20%] left-[12%] hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/[0.08] shadow-xs backdrop-blur-xs text-[10px] font-mono text-slate-400 dark:text-slate-500">
        <span>LAT: 32.083 // LON: 35.892</span>
      </div>

      <div className="absolute bottom-[18%] right-[14%] hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/[0.08] shadow-xs backdrop-blur-xs text-[10px] font-mono text-slate-400 dark:text-slate-500">
        <span>TOPOLOGY: MESH_DECENTRALIZED</span>
      </div>
    </div>
  );
};

