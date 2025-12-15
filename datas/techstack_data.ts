import { TechStack } from '@/types/techstack';

export const techstackData: TechStack[] = [
  {
    id: '1',
    name: 'React.js',
    imageUrl: '/assets/techstack/react.png'
  },
  {
    id: '2',
    name: 'Next.js',
    imageUrl: '/assets/techstack/nextjs.png'
  },

  {
    id: '3',
    name: 'Flutter',
    imageUrl: '/assets/techstack/flutter.png'
  },
  {
    id: '4',
    name: 'Golang',
    imageUrl: '/assets/techstack/golang.png'
  },
  {
    id: '5',
    name: 'PostgreSQL',
    imageUrl: '/assets/techstack/postgres.png'
  },
  {
    id: '6',
    name: 'MySQL',
    imageUrl: '/assets/techstack/mysql.png'
  },
  {
    id: '7',
    name: 'Figma',
    imageUrl: '/assets/techstack/figma.png'
  },
  {
    id: '8',
    name: 'Docker',
    imageUrl: '/assets/techstack/docker.png'
  },
];

export const getTechStackById = (id: string): TechStack | undefined => {
  return techstackData.find(tech => tech.id === id);
};

export const getAllTechStack = (): TechStack[] => {
  return techstackData;
};