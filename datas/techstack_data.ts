import { TechStack } from '@/types/techstack';

import reactImage from "@/public/assets/techstack/react.png";
import nextjsImage from "@/public/assets/techstack/nextjs.png";
import flutterImage from "@/public/assets/techstack/flutter.png";
import golangImage from "@/public/assets/techstack/golang.png";
import postgresImage from "@/public/assets/techstack/postgres.png";
import mysqlImage from "@/public/assets/techstack/mysql.png";
import figmaImage from "@/public/assets/techstack/figma.png";
import dockerImage from "@/public/assets/techstack/docker.png";

export const techstackData: TechStack[] = [
  {
    id: '1',
    name: 'React.js',
    imageUrl: reactImage.src
  },
  {
    id: '2',
    name: 'Next.js',
    imageUrl: nextjsImage.src
  },

  {
    id: '3',
    name: 'Flutter',
    imageUrl: flutterImage.src
  },
  {
    id: '4',
    name: 'Golang',
    imageUrl: golangImage.src
  },
  {
    id: '5',
    name: 'PostgreSQL',
    imageUrl: postgresImage.src
  },
  {
    id: '6',
    name: 'MySQL',
    imageUrl: mysqlImage.src
  },
  {
    id: '7',
    name: 'Figma',
    imageUrl: figmaImage.src
  },
  {
    id: '8',
    name: 'Docker',
    imageUrl: dockerImage.src
  },
];

export const getTechStackById = (id: string): TechStack | undefined => {
  return techstackData.find(tech => tech.id === id);
};

export const getAllTechStack = (): TechStack[] => {
  return techstackData;
};