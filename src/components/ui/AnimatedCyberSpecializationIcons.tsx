import React from 'react';

/**
 * 1. Animated Security Research Shield (باحث أمني سيبراني)
 * Theme: برتقالي/ذهبي داكن #D97706
 * Pure crisp vector geometry, zero default SVG black fill
 */
export const AnimatedShieldIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "", 
  size = 40 
}) => {
  return (
    <div className="relative flex items-center justify-center select-none group pointer-events-none">
      {/* Radiant Ambient Glow in #D97706 */}
      <div className="absolute inset-0 bg-[#D97706]/20 rounded-full blur-md animate-pulse pointer-events-none" />
      
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible relative z-10 transition-transform duration-300 ${className}`}
      >
        <defs>
          <linearGradient id="shieldGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="60%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="shieldLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D97706" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer Continuous Rotating Cyber Orbit in #D97706 */}
        <circle 
          cx="16" 
          cy="16" 
          r="15" 
          fill="none"
          stroke="#D97706" 
          strokeWidth="1.5" 
          strokeDasharray="4 4" 
          strokeOpacity="0.85"
          className="animate-[spin_10s_linear_infinite]"
          style={{ transformOrigin: '16px 16px' }}
        />

        {/* Orbiting Satellite Data Particles */}
        <g className="animate-[spin_3.5s_linear_infinite]" style={{ transformOrigin: '16px 16px' }}>
          <circle cx="16" cy="1" r="2.2" fill="#FBBF24" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="16" cy="31" r="1.8" fill="#D97706" stroke="none" />
        </g>

        {/* Fortified Cyber Shield Contour in #D97706 */}
        <path 
          d="M16 3.5L25.5 7.8V15C25.5 21.2 19.8 25.8 16 27.8C12.2 25.8 6.5 21.2 6.5 15V7.8L16 3.5Z" 
          fill="#FEF3C7"
          fillOpacity="0.5"
          stroke="url(#shieldGoldGrad)" 
          strokeWidth="2.4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Inner Shield Matrix Geometry */}
        <path 
          d="M16 7.5L22 10.8V14.5C22 19 18.2 22.3 16 23.8C13.8 22.3 10 19 10 14.5V10.8L16 7.5Z" 
          fill="#FDE68A"
          fillOpacity="0.3"
          stroke="#D97706" 
          strokeWidth="1.4" 
          strokeDasharray="2.5 2"
        />

        {/* Defense Node Checkmark - Pure White, fill="none" */}
        <path 
          d="M13 15.5L15.2 17.7L19.2 13.5" 
          fill="none"
          stroke="#FFFFFF" 
          strokeWidth="2.6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Continuous Scanning Laser Sweeping Up & Down */}
        <g className="animate-[scanUpDown_2s_ease-in-out_infinite]" style={{ transformOrigin: '16px 15px' }}>
          <line x1="8" y1="15" x2="24" y2="15" stroke="url(#shieldLaserGrad)" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="16" cy="15" r="1.8" fill="#D97706" stroke="#FFFFFF" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
};


/**
 * 2. Animated Red Team Tactical Radar & Crosshair (محاكي تهديدات Red Team)
 * Theme: أحمر داكن #DC2626
 * Pure crisp vector geometry, zero default SVG black fill
 */
export const AnimatedTargetIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "", 
  size = 40 
}) => {
  return (
    <div className="relative flex items-center justify-center select-none group pointer-events-none">
      {/* Radiant Ambient Glow in #DC2626 */}
      <div className="absolute inset-0 bg-[#DC2626]/20 rounded-full blur-md animate-pulse pointer-events-none" />

      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible relative z-10 transition-transform duration-300 ${className}`}
      >
        <defs>
          <linearGradient id="targetRadarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0" />
            <stop offset="60%" stopColor="#EF4444" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="targetRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F87171" />
            <stop offset="50%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#B91C1C" />
          </linearGradient>
        </defs>

        {/* Clean Outer Tactical Radar Circle in #DC2626 */}
        <circle 
          cx="16" 
          cy="16" 
          r="14.5" 
          fill="#FEE2E2" 
          fillOpacity="0.5"
          stroke="url(#targetRedGrad)" 
          strokeWidth="2.4" 
        />

        {/* Outer Counter-Rotating Segmented Ring */}
        <circle 
          cx="16" 
          cy="16" 
          r="11.5" 
          fill="none"
          stroke="#EF4444" 
          strokeWidth="1.5" 
          strokeDasharray="4 4" 
          strokeOpacity="0.9"
          className="animate-[spinReverse_6s_linear_infinite]"
          style={{ transformOrigin: '16px 16px' }}
        />

        {/* Inner Target Ring in #DC2626 */}
        <circle 
          cx="16" 
          cy="16" 
          r="7.5" 
          fill="none"
          stroke="#DC2626" 
          strokeWidth="1.5" 
          strokeDasharray="3 3"
          strokeOpacity="0.9"
        />

        {/* 360-Degree Continuous Rotating Radar Beam */}
        <g className="animate-[spin_2.5s_linear_infinite]" style={{ transformOrigin: '16px 16px' }}>
          <line x1="16" y1="16" x2="16" y2="1.5" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M16 16 L16 1.5 A14.5 14.5 0 0 1 27 9.5 Z" fill="url(#targetRadarGrad)" stroke="none" />
        </g>

        {/* Luminous Target Indicator Points */}
        <circle cx="16" cy="2" r="1.3" fill="#DC2626" stroke="none" />
        <circle cx="16" cy="30" r="1.3" fill="#DC2626" stroke="none" />
        <circle cx="2" cy="16" r="1.3" fill="#DC2626" stroke="none" />
        <circle cx="30" cy="16" r="1.3" fill="#DC2626" stroke="none" />

        {/* Target Blip Detected in Radar Sector */}
        <g className="animate-[pingTarget_1.8s_ease-in-out_infinite]" style={{ transformOrigin: '21px 9px' }}>
          <circle cx="21" cy="9" r="2.2" fill="#DC2626" stroke="#FFFFFF" strokeWidth="0.8" />
          <circle cx="21" cy="9" r="4.5" fill="none" stroke="#F87171" strokeWidth="1.3" strokeDasharray="2 2" />
        </g>

        {/* Center Target Lock Bullseye */}
        <circle cx="16" cy="16" r="3.2" fill="#DC2626" stroke="none" className="animate-ping opacity-75" style={{ animationDuration: '1.4s' }} />
        <circle cx="16" cy="16" r="2.2" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1" />
      </svg>
    </div>
  );
};


/**
 * 3. Animated Vulnerability & Network Cyber Bug (محلل ثغرات وشبكات)
 * Theme: أزرق داكن #0284C7
 * Pure crisp vector geometry, zero default SVG black fill
 */
export const AnimatedBugIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "", 
  size = 40 
}) => {
  return (
    <div className="relative flex items-center justify-center select-none group pointer-events-none">
      {/* Radiant Ambient Glow in #0284C7 */}
      <div className="absolute inset-0 bg-[#0284C7]/20 rounded-full blur-md animate-pulse pointer-events-none" />

      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible relative z-10 transition-transform duration-300 ${className}`}
      >
        <defs>
          <linearGradient id="bugBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>
        </defs>

        {/* Radiating Electromagnetic Shockwaves */}
        <g className="animate-[antennaeWave_1.8s_ease-out_infinite]" style={{ transformOrigin: '16px 4px' }}>
          <path d="M10 5 C12.5 2, 19.5 2, 22 5" fill="none" stroke="#0284C7" strokeWidth="1.6" strokeDasharray="3 2" strokeLinecap="round" />
        </g>
        <g className="animate-[antennaeWave_1.8s_ease-out_infinite]" style={{ animationDelay: '0.6s', transformOrigin: '16px 2px' }}>
          <path d="M8 2 C12 -1.5, 20 -1.5, 24 2" fill="none" stroke="#38BDF8" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
        </g>

        {/* Antennae Beacons */}
        <path d="M13 10L9 5" fill="none" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M19 10L23 5" fill="none" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="9" cy="5" r="2" fill="#0284C7" stroke="#FFFFFF" strokeWidth="0.8" className="animate-ping" style={{ animationDuration: '1.2s' }} />
        <circle cx="23" cy="5" r="2" fill="#0284C7" stroke="#FFFFFF" strokeWidth="0.8" className="animate-ping" style={{ animationDuration: '1.2s', animationDelay: '0.4s' }} />

        {/* Vibrant Bug Legs in #0284C7 */}
        <g className="animate-[twitchLegs_2.8s_ease-in-out_infinite]" style={{ transformOrigin: '10px 17px' }}>
          <path d="M10 13L4 10" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 17L3 17" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 21L4 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g className="animate-[twitchLegs_2.8s_ease-in-out_infinite]" style={{ animationDelay: '0.5s', transformOrigin: '22px 17px' }}>
          <path d="M22 13L28 10" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
          <path d="M23 17L29 17" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 21L28 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Bug Head */}
        <path d="M12.5 11 C12.5 7.5, 19.5 7.5, 19.5 11 Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.6" />

        {/* Bug Body in #0284C7 */}
        <rect 
          x="9" 
          y="11.5" 
          width="14" 
          height="15" 
          rx="7" 
          fill="#E0F2FE" 
          fillOpacity="0.5"
          stroke="url(#bugBlueGrad)" 
          strokeWidth="2.4" 
        />

        {/* Spinning Fuzzing Target Reticle */}
        <circle 
          cx="16" 
          cy="18" 
          r="4.8" 
          fill="none"
          stroke="#0284C7" 
          strokeWidth="1.4" 
          strokeDasharray="3 3"
          className="animate-[spin_4s_linear_infinite]"
          style={{ transformOrigin: '16px 18px' }}
        />
        
        {/* Core Vulnerability Node */}
        <circle cx="16" cy="18" r="2.2" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1" />
      </svg>
    </div>
  );
};


/**
 * 4. Animated Security Tooling & Matrix Terminal (مطور أدوات أمنية)
 * Theme: أخضر داكن #16A34A
 * Pure crisp vector geometry, zero default SVG black fill
 */
export const AnimatedTerminalIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "", 
  size = 40 
}) => {
  return (
    <div className="relative flex items-center justify-center select-none group pointer-events-none">
      {/* Radiant Ambient Glow in #16A34A */}
      <div className="absolute inset-0 bg-[#16A34A]/20 rounded-full blur-md animate-pulse pointer-events-none" />

      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible relative z-10 transition-transform duration-300 ${className}`}
      >
        <defs>
          <linearGradient id="terminalGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="50%" stopColor="#16A34A" />
            <stop offset="100%" stopColor="#15803D" />
          </linearGradient>
          <linearGradient id="terminalStreamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#16A34A" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#4ADE80" stopOpacity="1" />
            <stop offset="100%" stopColor="#16A34A" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Orbiting Matrix Data Ring in #16A34A */}
        <circle 
          cx="16" 
          cy="16" 
          r="15" 
          fill="none"
          stroke="#16A34A" 
          strokeWidth="1.4" 
          strokeDasharray="3 5" 
          strokeOpacity="0.85"
          className="animate-[spin_12s_linear_infinite]"
          style={{ transformOrigin: '16px 16px' }}
        />

        {/* Clean Terminal Window Frame in #16A34A */}
        <rect 
          x="3.5" 
          y="5.5" 
          width="25" 
          height="21" 
          rx="5" 
          fill="#DCFCE7" 
          fillOpacity="0.5"
          stroke="url(#terminalGreenGrad)" 
          strokeWidth="2.4" 
        />

        {/* Window Titlebar Divider */}
        <line x1="3.5" y1="11.5" x2="28.5" y2="11.5" stroke="#16A34A" strokeWidth="1.5" strokeOpacity="0.7" />
        
        {/* Status Window Lights */}
        <circle cx="7" cy="8.5" r="1.4" fill="#86EFAC" stroke="none" />
        <circle cx="11" cy="8.5" r="1.4" fill="#4ADE80" stroke="none" />
        <circle cx="15" cy="8.5" r="1.4" fill="#16A34A" stroke="none" className="animate-ping" style={{ animationDuration: '1.4s' }} />

        {/* Prompt Chevron `>` in #16A34A with fill="none" */}
        <path 
          d="M7.5 15.2L11.5 17.5L7.5 19.8" 
          fill="none"
          stroke="#16A34A" 
          strokeWidth="2.4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Continuous Code Data Streams */}
        <g className="animate-[codeStream_1.8s_linear_infinite]">
          <line x1="14" y1="15.2" x2="25" y2="15.2" stroke="url(#terminalStreamGrad)" strokeWidth="2.4" strokeLinecap="round" />
        </g>
        <g className="animate-[codeStream_1.8s_linear_infinite]" style={{ animationDelay: '0.6s' }}>
          <line x1="14" y1="18.5" x2="23" y2="18.5" stroke="url(#terminalStreamGrad)" strokeWidth="1.8" strokeLinecap="round" />
        </g>

        {/* Continuously Blinking Terminal Cursor Block `_` in #16A34A */}
        <rect 
          x="14" 
          y="21" 
          width="5" 
          height="2" 
          fill="#16A34A" 
          stroke="none"
          className="animate-[cursorBlink_0.9s_steps(2,start)_infinite]"
        />
      </svg>
    </div>
  );
};

