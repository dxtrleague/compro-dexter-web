export interface Technology {
  name: string;
  color: string;
}

export interface Device {
  name: string;
}

export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  heroImage: string;
  clientName: string;
  service: string[];
  devices: Device[];
  status: 'Completed' | 'In Progress' | 'Planning';
  technologies: Technology[];
  about: string[];
  challenge: string;
  solution: string;
  projectOverview: string[];
}