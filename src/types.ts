export interface ProjectOverview {
  problem: string;
  role: string;
  decision: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  imageUrl: string;
  overview?: ProjectOverview;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  image?: string;
}
