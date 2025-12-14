import { LucideIcon } from "lucide-react";

export interface Service {
  id: string | number;
  title: string;
  slug: string;    
  description: string; 
  icon: LucideIcon;
}