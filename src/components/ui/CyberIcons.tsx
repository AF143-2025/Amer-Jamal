import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// 1. Reconnaissance: Radar / Concentric Discovery Sweep
export const ReconnaissanceIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
    <line x1="12" y1="3" x2="12" y2="7" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <line x1="3" y1="12" x2="7" y2="12" />
    <line x1="17" y1="12" x2="21" y2="12" />
    <path d="M12 12L18.5 5.5" strokeDasharray="1.5 1.5" />
  </svg>
);

// 2. OSINT: Lens / Focal Crosshair Intelligence
export const OsintIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16" y2="16" />
    <circle cx="11" cy="11" r="3" strokeDasharray="2 2" />
    <line x1="11" y1="6" x2="11" y2="8" />
    <line x1="11" y1="14" x2="11" y2="16" />
    <line x1="6" y1="11" x2="8" y2="11" />
    <line x1="14" y1="11" x2="16" y2="11" />
  </svg>
);

// 3. Web Security: Geometric Browser Frame + Embedded Defense Node
export const WebSecurityIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <circle cx="6" cy="6.5" r="0.8" fill="currentColor" />
    <circle cx="9" cy="6.5" r="0.8" fill="currentColor" />
    <path d="M12 11.5L16 13V15.5C16 17.5 14 18.5 12 19C10 18.5 8 17.5 8 15.5V13L12 11.5Z" />
  </svg>
);

// 4. Network Security: Interconnected Topology Nodes
export const NetworkSecurityIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <rect x="9" y="2" width="6" height="5" rx="1.5" />
    <rect x="2" y="17" width="6" height="5" rx="1.5" />
    <rect x="16" y="17" width="6" height="5" rx="1.5" />
    <path d="M12 7V12" />
    <path d="M5 17V14.5C5 13.5 6 12 8 12H16C18 12 19 13.5 19 14.5V17" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

// 5. Vulnerability Research: Geometric Fuzzing / Bug Probe
export const VulnerabilityResearchIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <rect x="7" y="7" width="10" height="12" rx="3" />
    <path d="M12 4V7" />
    <path d="M9 4L12 7L15 4" />
    <path d="M12 10V16" />
    <path d="M4 10H7" />
    <path d="M17 10H20" />
    <path d="M4 15H7" />
    <path d="M17 15H20" />
  </svg>
);

// 6. Linux: Minimal Terminal Prompt & Shell Root
export const LinuxIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <polyline points="7 10 10 13 7 16" />
    <line x1="12" y1="16" x2="16" y2="16" />
  </svg>
);

// 7. Programming: Structured Code Brackets & Token
export const ProgrammingIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <polyline points="15 6 20 12 15 18" />
    <polyline points="9 18 4 12 9 6" />
    <line x1="13" y1="4" x2="11" y2="20" />
  </svg>
);

// 8. Blue Team: Defensive Shield & Secure Core
export const BlueTeamIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <path d="M12 3L20 6.5V12C20 16.5 16.5 20.5 12 22C7.5 20.5 4 16.5 4 12V6.5L12 3Z" />
    <path d="M12 7V17" />
    <path d="M8.5 11.5L12 15L15.5 11.5" />
  </svg>
);

// 9. Digital Forensics: Evidence Fingerprint & Analysis Grid
export const DigitalForensicsIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <path d="M12 2C8 2 4.5 4.5 4.5 9C4.5 14 8 18 12 22C16 18 19.5 14 19.5 9C19.5 4.5 16 2 12 2Z" />
    <path d="M12 6C9.8 6 8 7.8 8 10C8 13 10 15.5 12 17.5C14 15.5 16 13 16 10C16 7.8 14.2 6 12 6Z" />
    <circle cx="12" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

// 10. Roadmap: Sequential Route & Path Milestones
export const RoadmapIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M8.5 6H13C15.5 6 17.5 8 17.5 10.5C17.5 13 15.5 15 13 15H11C8.5 15 6.5 17 6.5 19.5" />
    <polyline points="15 18 18 18 18 15" />
  </svg>
);

// 11. Research: Technical Abstract Microscope / Optics
export const ResearchIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <path d="M6 18H18" />
    <path d="M7 14H11" />
    <path d="M9 18V14" />
    <path d="M14 21C16.8 21 19 18.8 19 16C19 13.5 17 11.3 14.5 11.1L12.5 4.5C12.2 3.6 11.3 3 10.3 3C9.1 3 8.1 4 8.2 5.2L9.2 11.2C8 12.1 7.2 13.5 7.2 15.2" />
    <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
  </svg>
);

// 12. Projects: Geometric Layers / Component Build
export const ProjectsIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

// 13. Knowledge: Technical Book / Document Repository
export const KnowledgeIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <path d="M4 19.5V4.5C4 3.7 4.7 3 5.5 3H19C19.6 3 20 3.4 20 4V20C20 20.6 19.6 21 19 21H5.5C4.7 21 4 20.3 4 19.5Z" />
    <path d="M4 17.5H19" />
    <line x1="8" y1="7" x2="16" y2="7" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

// 14. Application Security: App Boundary & Guard
export const AppSecurityIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <rect x="4" y="3" width="16" height="18" rx="3" />
    <line x1="4" y1="8" x2="20" y2="8" />
    <circle cx="12" cy="14" r="2" />
    <path d="M12 16V18" />
  </svg>
);

// 15. Defensive Security: Fortified Perimeter & Zero Trust
export const DefensiveSecurityIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <path d="M12 2L3 6V12C3 17 7 21.5 12 22.5C17 21.5 21 17 21 12V6L12 2Z" />
    <path d="M9 12L11 14L15 10" />
  </svg>
);

// 16. Security Research: Quantum Deep Dive / Core Probe
export const SecurityResearchIcon: React.FC<IconProps> = ({ size = 20, className = '', strokeWidth = 1.75, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="3" />
    <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
  </svg>
);

