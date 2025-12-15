import { Services } from "@/types/services";
import { 
  Briefcase, 
  Monitor, 
  Smartphone, 
  Bot, 
  Code2, 
  Users 
} from "lucide-react";

export const servicesData: Services[] = [
  {
    id: 1,
    icon: Briefcase,
    title: "Business & Product Strategy",
    description: "We assist you in identifying business goals and aligning them with user needs by conducting market research, defining software specifications, mapping customer journeys, and crafting tailored technology strategies to ensure your product is both valuable and viable.",
    descHome: "Define business goals and product strategies that align with user needs.",
  },
  {
    id: 2,
    icon: Monitor,
    title: "Digital Solutions",
    description: "We build digital platforms such as web dashboards, online stores, booking systems, and integrated payment gateways. Our custom solutions are designed to support your operations and scalability with a focus on performance, security, and user experience.",
    descHome: "Build dashboards, e-commerce, and integrated digital platforms.",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Mobile App Development",
    description: "From concept to deployment, we develop intuitive and high-performance mobile applications for Android and iOS. Our process includes UI/UX design, native and cross-platform development, API integration, testing, and app store optimization.",
    descHome: "Create Android & iOS apps that support your business growth.",
  },
  {
    id: 4,
    icon: Bot, // Bisa juga pakai icon Sparkles atau Brain
    title: "AI & Automation",
    description: "We leverage artificial intelligence and automation to enhance business processes. From AI-powered chatbots and recommendation systems to custom-trained models and prompt engineering, we help you automate repetitive tasks and make data-driven decisions.",
    descHome: "Use AI to automate tasks and gain smarter business insights.",
  },
  {
    id: 5,
    icon: Code2,
    title: "Technical Engineering",
    description: "Our team delivers high-quality software engineering services, including scalable architecture design, testing frameworks, performance tuning, and DevOps setup. We ensure your digital product is robust, secure, and ready for production.",
    descHome: "Strong engineering and testing for robust, scalable software.",
  },
  {
    id: 6,
    icon: Users,
    title: "Project & Team Leadership",
    description: "We offer end-to-end project management, from sprint planning and team coordination to risk mitigation and deadline control. Our leadership ensures that your team delivers consistent results with clear communication, quality assurance, and stakeholder alignment.",
    descHome: "Lead projects and teams with clear planning and coordination.",
  }
];