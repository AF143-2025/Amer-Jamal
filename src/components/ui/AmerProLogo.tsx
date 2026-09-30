import React from 'react';

interface AmerProLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * AmerProLogo - Professional Cybersecurity Brand Mark for Amer Jamal
 * Ultra-clean, modern geometric cyber emblem without clutter.
 */
export const AmerProLogo: React.FC<AmerProLogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const sizeMap = {
    sm: { box: 'w-9 h-9', icon: 20 },
    md: { box: 'w-10 h-10 sm:w-11 sm:h-11', icon: 24 },
    lg: { box: 'w-14 h-14 sm:w-16 sm:h-16', icon: 32 }
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Soft Ambient Gold Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-amber-400/0 rounded-xl sm:rounded-2xl blur-md opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Main Logo Container */}
      <div className={`relative ${sizeMap.box} rounded-xl sm:rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black p-[1px] shadow-md border border-amber-500/30 group-hover:border-amber-500 transition-all duration-300 flex items-center justify-center overflow-hidden`}>
        {/* Subtle Inner Glass Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />

        {/* Vector Cyber Shield & Terminal Monogram */}
        <svg
          width={sizeMap.icon}
          height={sizeMap.icon}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="amerProGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="amerProCyberCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Outer Fortified Hex Shield */}
          <path
            d="M16 3L26 8V16C26 22.5 21.8 26.5 16 29C10.2 26.5 6 22.5 6 16V8L16 3Z"
            stroke="url(#amerProGold)"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Geometric Secure Core */}
          <path
            d="M16 7.5L22.5 11V16.5C22.5 20.8 19.8 23.5 16 25.2C12.2 23.5 9.5 20.8 9.5 16.5V11L16 7.5Z"
            stroke="url(#amerProGold)"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="url(#amerProGold)"
            fillOpacity="0.08"
          />

          {/* Dynamic Cyber Command Apex 'A' / Terminal Symbol */}
          <path
            d="M16 11L20 19H17.5L16 15.5L14.5 19H12L16 11Z"
            fill="url(#amerProGold)"
          />

          {/* Central Cryptographic Micro Node */}
          <circle cx="16" cy="18" r="1.25" fill="#38BDF8" />
          <path d="M14 21.5H18" stroke="url(#amerProGold)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};
