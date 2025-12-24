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
  service: string;
  services: string[];
  devices: Device[];
  status: 'Completed' | 'In Progress' | 'Planning';
  technologies: string[];
  about: string[];
  challenge: string;
  solution: string;
  projectOverview: string[];
  preview: boolean;
}