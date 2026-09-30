export type Severity = 'info' | 'low' | 'medium' | 'high' | 'critical';

export interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  category: 'Vulnerability Research' | 'Defensive Security' | 'Web Security' | 'System Security' | 'Network Security' | 'Cryptographic Analysis';
  date: string;
  severity?: Severity;
  cvss?: string;
  summary: string;
  technicalDetails: string;
  impact: string;
  rootCause: string;
  mitigation: string;
  references: { title: string; url: string }[];
  tags: string[];
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: 'Security Automation' | 'Defensive Tools' | 'Reconnaissance' | 'Web Applications' | 'System Tools';
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  features: string[];
  securityConsiderations: string[];
  challenges: string[];
  lessonsLearned: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  stars?: number;
  featured?: boolean;
}

export interface ToolItem {
  id: string;
  name: string;
  category: 'Recon & OSINT' | 'Web Security' | 'Network Security' | 'Pentesting & Exploitation' | 'Forensics & Reversing' | 'Linux & Systems' | 'Blue Team & SIEM' | 'Cloud Security';
  description: string;
  officialUrl?: string;
  docsUrl?: string;
  githubUrl?: string;
  personalNotes: string;
  tags: string[];
  license?: string;
}

export interface KnowledgeItem {
  id: string;
  slug: string;
  title: string;
  category: 'Security' | 'Linux' | 'Networking' | 'Programming' | 'Web' | 'Cloud' | 'OSINT' | 'Cryptography';
  summary: string;
  content: string;
  tags: string[];
  updatedAt: string;
  readTime: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  category: string;
  summary: string;
  content: string;
  tags: string[];
  featured?: boolean;
}

export interface CTFItem {
  id: string;
  title: string;
  platform: 'HackTheBox' | 'TryHackMe' | 'PicoCTF' | 'PortSwigger Web Academy' | 'Independent CTF';
  category: 'Web' | 'Pwn' | 'Reverse Engineering' | 'Forensics' | 'Cryptography' | 'OSINT' | 'Misc';
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Insane';
  date: string;
  writeupUrl?: string;
  synopsis: string;
  techniques: string[];
  flagsCaptured?: number;
  solved: boolean;
}

export interface RoadmapStage {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  status: 'Mastered' | 'In Progress' | 'Planned';
  topics: string[];
  recommendedResources: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  subcategories: {
    name: string;
    items: {
      name: string;
      level?: 'Fundamental' | 'Intermediate' | 'Advanced';
      tools?: string[];
    }[];
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Certification' | 'Course' | 'CTF Achievement' | 'Bug Bounty' | 'Research Publication' | 'Academic Milestone';
  description: string;
  verificationUrl?: string;
  credentialId?: string;
  isPlaceholder?: boolean;
}

export interface SearchResult {
  title: string;
  category: string;
  snippet: string;
  url: string;
  type: 'research' | 'project' | 'lab' | 'tool' | 'knowledge' | 'article' | 'ctf';
}

