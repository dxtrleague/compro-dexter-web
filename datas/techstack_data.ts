import { TechStack } from '@/types/techstack';

import reactImage from "@/public/assets/techstack/react.png";
import nextjsImage from "@/public/assets/techstack/nextjs.png";
import flutterImage from "@/public/assets/techstack/flutter.png";
import golangImage from "@/public/assets/techstack/golang.png";
import figmaImage from "@/public/assets/techstack/figma.png";
import dockerImage from "@/public/assets/techstack/docker.png";
import vertexAI from "@/public/assets/techstack/vertexAI.png";
import digitalOcean from "@/public/assets/techstack/DigitalOcean.png";
import awsImage from "@/public/assets/techstack/aws.png";
import nodejsImage from "@/public/assets/techstack/nodejs.png";

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
    name: 'DigitalOcean',
    imageUrl: digitalOcean.src
  },
  {
    id: '6',
    name: 'AWS',
    imageUrl: awsImage.src
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
  {
    id: '9',
    name: 'Vertex AI',
    imageUrl: vertexAI.src
  },
  {
    id: '10',
    name: 'Node.js',
    imageUrl: nodejsImage.src
  }
];

export const getTechStackById = (id: string): TechStack | undefined => {
  return techstackData.find(tech => tech.id === id);
};

export const getAllTechStack = (): TechStack[] => {
  return techstackData;
};