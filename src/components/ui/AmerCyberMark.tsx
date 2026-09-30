import React from 'react';

interface AmerCyberMarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTooltip?: boolean;
}

/**
 * AmerCyberMark
 * High-End Professional Cybersecurity Brand Emblem for Amer Jamal (عامر جمال).
 * 
 * Features:
 * - Fortified Angular Cyber Shield with Gold/Amber Solar Gradient
 * - Stylized Command Apex Monogram ('A' / 'ع' - Amer Jamal)
 * - 24/7 Continuous Smooth Rotating Matrix Orbit Ring
 * - Continuous Scanning Laser Beam Sweep
 * - Illuminated Central Cryptographic Core Node
 * - Live Online Status Ping Dot (Emerald Beacon)
 * - 100% Crisp Vector Geometry, explicit fill="none", zero dark/black line artifacts
 */
export const AmerCyberMark: React.FC<AmerCyberMarkProps> = ({
  size = 'md',
  className = '',
  showTooltip = false,
}) => {
  const config = {
    sm: { box: 'h-9 w-9 sm:h-10 sm:w-10', svg: 32 },
    md: { box: 'h-11 w-11 sm:h-12 sm:w-12', svg: 40 },
    lg: { box: 'h-16 w-16 sm:h-20 sm:w-20', svg: 64 },
    xl: { box: 'h-24 w-24 sm:h-28 sm:w-28', svg: 92 },
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Outer Glow & Glass Badge Container */}
      <div 
        className={`relative ${config.box} rounded-xl sm:rounded-2xl flex items-center justify-center bg-gradient-to-br from-amber-500/15 via-white/90 to-amber-600/10 border border-amber-500/30 p-1 shadow-xs shadow-amber-500/15 group-hover:border-amber-500 group-hover:shadow-[0_4px_20px_rgba(217,119,6,0.25)] transition-all duration-300 overflow-visible`}
      >
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute inset-0 bg-amber-400/10 rounded-xl sm:rounded-2xl blur-xs group-hover:bg-amber-400/20 transition-all pointer-events-none" />

        {/* SVG Cyber Shield Emblem */}
        <svg 
          width={config.svg} 
          height={config.svg} 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="cyberLogoShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="cyberLogoCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="cyberLogoScanLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* 1. Orbiting Matrix Ring (Smooth Continuous 24/7 Rotation) */}
          <circle 
            cx="24" 
            cy="24" 
            r="22" 
            fill="none" 
            stroke="#D97706" 
            strokeWidth="1.2" 
            strokeDasharray="3 4" 
            strokeOpacity="0.45"
            className="animate-[spin_14s_linear_infinite]"
            style={{ transformOrigin: '24px 24px' }}
          />

          {/* 2. Fortified Cyber Shield (Outer Contour) */}
          <path 
            d="M24 4.5L38.5 10.5V22C38.5 31.5 29.5 38.5 24 41.5C18.5 38.5 9.5 31.5 9.5 22V10.5L24 4.5Z" 
            fill="#FEF3C7"
            fillOpacity="0.4"
            stroke="url(#cyberLogoShieldGrad)" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* 3. Inner Fortification Geometry */}
          <path 
            d="M24 9.5L33.5 13.5V21C33.5 27.5 27.5 32.5 24 35C20.5 32.5 14.5 27.5 14.5 21V13.5L24 9.5Z" 
            fill="#FDE68A"
            fillOpacity="0.25"
            stroke="#F59E0B" 
            strokeWidth="1.2" 
            strokeDasharray="2.5 2"
            strokeOpacity="0.85"
          />

          {/* 4. Stylized Cyber Apex 'A' / Command Node (Amer Jamal Monogram) */}
          <path 
            d="M24 14.5L30 27H26.5L24 21.5L21.5 27H18L24 14.5Z" 
            fill="url(#cyberLogoCoreGrad)"
            stroke="#D97706"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* 5. Central Glowing Core Node */}
          <circle cx="24" cy="22" r="2.2" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" />
          
          {/* 6. Perimeter Satellite Tactical Beacons */}
          <circle cx="24" cy="4.5" r="1.6" fill="#FDE047" stroke="#D97706" strokeWidth="0.8" />
          <circle cx="38.5" cy="10.5" r="1.4" fill="#F59E0B" stroke="none" />
          <circle cx="9.5" cy="10.5" r="1.4" fill="#F59E0B" stroke="none" />
          <circle cx="24" cy="41.5" r="1.6" fill="#FDE047" stroke="#D97706" strokeWidth="0.8" />

          {/* 7. Continuous Scanning Laser Sweeping Up & Down */}
          <g className="animate-[scanUpDown_2.2s_ease-in-out_infinite]" style={{ transformOrigin: '24px 23px' }}>
            <line x1="13" y1="23" x2="35" y2="23" stroke="url(#cyberLogoScanLine)" strokeWidth="1.8" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* Optional Hover Tooltip */}
      {showTooltip && (
        <div className="absolute top-full mt-2 px-3 py-1 rounded-lg bg-slate-950 text-white text-[10px] font-arabic font-bold shadow-xl border border-slate-800 pointer-events-none z-50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          منصة عامر جمال للأمن السيبراني
        </div>
      )}
    </div>
  );
};

