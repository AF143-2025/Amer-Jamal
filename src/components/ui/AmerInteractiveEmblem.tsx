import React, { useState } from 'react';

interface AmerInteractiveEmblemProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTooltip?: boolean;
}

/**
 * AmerInteractiveEmblem
 * A bespoke, interactive cybersecurity researcher emblem designed specifically for Amer Jamal.
 * Represents:
 * - A stylized cyber-shield with cryptographic facets
 * - An orbital radar ring that spins smoothly on hover
 * - A pulsing central core node (Security Beacon)
 * - An interactive radar ping / ripple animation on click
 * - An optional high-tech security verification tooltip
 */
export const AmerInteractiveEmblem: React.FC<AmerInteractiveEmblemProps> = ({
  size = 'md',
  className = '',
  showTooltip = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinging, setIsPinging] = useState(false);

  const handleClick = () => {
    setIsPinging(true);
    setTimeout(() => setIsPinging(false), 900);
  };

  const dimensions = {
    sm: { container: 'h-8 w-8', svg: 32, badge: 'text-[9px]' },
    md: { container: 'h-11 w-11', svg: 44, badge: 'text-[10px]' },
    lg: { container: 'h-16 w-16 sm:h-20 sm:w-20', svg: 80, badge: 'text-xs' },
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center group select-none ${className}`}>
      {/* Interactive Trigger Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative ${dimensions.container} rounded-2xl flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer ${
          isHovered
            ? 'scale-110 shadow-[0_8px_24px_rgba(37,99,235,0.2)]'
            : 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
        }`}
        aria-label="أيقونة عامر جمال التفاعلية"
        title="انقر لتفعيل نبض الرادار الأمني"
      >
        {/* Dynamic Background Base */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 p-[1.5px] transition-all duration-300">
          <div className="w-full h-full rounded-[14px] bg-slate-950/90 backdrop-blur-md flex items-center justify-center overflow-hidden relative">
            
            {/* Ambient Inner Glow */}
            <div 
              className={`absolute inset-0 bg-gradient-to-tr from-teal-600/30 via-sky-400/20 to-transparent transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-40'
              }`} 
            />

            {/* Radar Wave Ping Animation on Click */}
            {isPinging && (
              <span className="absolute inset-0 rounded-full border-2 border-teal-400 animate-ping opacity-75" />
            )}

            {/* SVG Vector Emblem */}
            <svg 
              className={`relative z-10 text-white transition-transform duration-500 ${
                isHovered ? 'rotate-12 scale-105' : ''
              }`}
              width={dimensions.svg * 0.65} 
              height={dimensions.svg * 0.65} 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Shield Base Outline */}
              <path 
                d="M12 2L4 5V11C4 16.55 7.42 21.74 12 23C16.58 21.74 20 16.55 20 11V5L12 2Z" 
                stroke="url(#emblemGrad)" 
                strokeWidth="1.75" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              
              {/* Inner Orbital Security Rings */}
              <circle 
                cx="12" 
                cy="11.5" 
                r="4.5" 
                stroke="#60A5FA" 
                strokeWidth="1" 
                strokeDasharray="2 2"
                className={isHovered ? 'animate-[spin_4s_linear_infinite]' : ''}
              />

              {/* Core Central Security Node */}
              <circle 
                cx="12" 
                cy="11.5" 
                r="2" 
                className="fill-blue-400 animate-pulse" 
              />

              {/* Cryptographic Crosshair Ticks */}
              <line x1="12" y1="5.5" x2="12" y2="7" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="12" y1="16" x2="12" y2="17.5" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="6.5" y1="11.5" x2="8" y2="11.5" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="16" y1="11.5" x2="17.5" y2="11.5" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" />

              <defs>
                <linearGradient id="emblemGrad" x1="4" y1="2" x2="20" y2="23" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA" />
                  <stop offset="0.5" stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#93C5FD" />
                </linearGradient>
              </defs>
            </svg>

          </div>
        </div>
      </button>

      {/* Floating Verification Indicator Beacon */}
      <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5 pointer-events-none">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white" />
      </span>

      {/* Interactive Tooltip */}
      {showTooltip && (
        <div 
          className={`absolute top-full mt-2.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white font-mono shadow-xl border border-slate-700/80 pointer-events-none z-50 whitespace-nowrap transition-all duration-200 ${dimensions.badge} ${
            isHovered 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-1 invisible'
          }`}
        >
          <div className="flex items-center gap-1.5 font-bold font-arabic">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>عامر جمال • هوية باحث أمني موثقة</span>
          </div>
          <div className="text-[9px] text-slate-400 font-mono" dir="ltr">
            SEC_ID: AMER-JAMAL-01 // ACTIVE
          </div>
        </div>
      )}
    </div>
  );
};

