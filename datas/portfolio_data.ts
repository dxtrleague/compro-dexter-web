import { ProjectDetail } from '@/types/portfolio';
import poto from "@/public/assets/portfolio/6.jpg";
import potopoto from "@/public/assets/portfolio/19.jpg";

export const portfolioData: ProjectDetail[] = [
  {
    id: '1',
    slug: 'neofinance-dashboard',
    title: 'NeoFinance Dashboard',
    thumbnail: poto.src,
    heroImage: potopoto.src,
    clientName: 'FinCorp Global',
    service: 'Web Development',
    services: [
      'Web Development',
      'UI/UX Design',
      'API Integration',
    ],
    devices: [
      { name: 'Web' },
    ],
    status: 'Completed',
    technologies: [
      { name: 'React.js', color: 'bg-blue-400' },
      { name: 'PostgreSQL', color: 'bg-blue-600' },
      { name: 'Node.js', color: 'bg-green-600' },
      { name: 'Tailwind CSS', color: 'bg-cyan-500' }
    ],
    about: [
      'NeoFinance is a cutting-edge financial management dashboard designed for enterprise clients who need real-time visibility into their multi-currency assets. The platform integrates seamlessly with major banking APIs, providing a unified view of liquidity, liabilities, and investment performance across global markets.',
      'Our team worked closely with financial analysts to ensure the data visualization was not only accurate but also actionable. The system includes automated reporting tools, risk assessment algorithms, and a secure multi-user permission system compliant with international banking regulations.'
    ],
    challenge: 'The main challenge was handling real time data synchronization from 15+ different banking sources with varied API standards, while maintaining sub second latency for dashboard updates.',
    solution: 'We implemented an event-driven microservices architecture using Node.js and Redis for caching. This allowed us to normalize incoming data streams instantly and push updates to the client via WebSockets.',
    projectOverview: [
      potopoto.src,
      potopoto.src,
      potopoto.src,
      potopoto.src
    ]
  },
  {
    id: '2',
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    thumbnail: poto.src,
    heroImage: potopoto.src,
    clientName: 'RetailTech Solutions',
    service: 'Mobile App Development',
    services: [
      'Mobile App Development',
      'Payment Gateway',
      'Cloud Hosting',
    ],
    devices: [
      { name: 'Mobile' },
    ],
    status: 'Completed',
    technologies: [
      { name: 'React Native', color: 'bg-blue-500' },
      { name: 'MongoDB', color: 'bg-green-500' },
      { name: 'Express.js', color: 'bg-gray-700' },
      { name: 'Redux', color: 'bg-purple-600' }
    ],
    about: [
      'A comprehensive e-commerce platform that serves over 100,000 daily active users with seamless shopping experience across mobile and web platforms.',
      'The platform features advanced recommendation algorithms, real-time inventory management, and integrated payment gateways supporting multiple currencies.'
    ],
    challenge: 'Building a scalable architecture that could handle flash sales with up to 10,000 concurrent users without compromising performance.',
    solution: 'Implemented a microservices architecture with load balancing, CDN integration, and optimized database queries with proper indexing strategies.',
    projectOverview: [
      potopoto.src,
      potopoto.src,
      potopoto.src,
      potopoto.src
    ]
  },
  {
    id: '3',
    slug: 'healthcare-system',
    title: 'Healthcare Management System',
    thumbnail: poto.src,
    heroImage: potopoto.src,
    clientName: 'MediCare Plus',
    service: 'Full Stack Development',
    services: [
      'Full Stack Development',
      'Database Design',
      'Security Implementation',
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' },
    ],
    status: 'In Progress',
    technologies: [
      { name: 'Vue.js', color: 'bg-green-500' },
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'Docker', color: 'bg-blue-400' }
    ],
    about: [
      'A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and medical billing for hospitals and clinics.',
      'The system includes telemedicine capabilities, prescription management, and integration with various medical devices and lab systems.'
    ],
    challenge: 'Ensuring HIPAA compliance while maintaining user-friendly interfaces and seamless data flow between different medical systems.',
    solution: 'Developed a robust security framework with end-to-end encryption, role-based access control, and comprehensive audit logging.',
    projectOverview: [
      potopoto.src,
      potopoto.src,
      potopoto.src,
      potopoto.src
    ]
  },
    {
    id: '4',
    slug: 'healthcare-system',
    title: 'Healthcare Management System',
    thumbnail: poto.src,
    heroImage: poto.src,
    clientName: 'MediCare Plus',
    service: 'Full Stack Development',
    services: [
      'Web Development',
      'Web Development',
      'Web Development',
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' },
    ],
    status: 'In Progress',
    technologies: [
      { name: 'Vue.js', color: 'bg-green-500' },
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'Docker', color: 'bg-blue-400' }
    ],
    about: [
      'A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and medical billing for hospitals and clinics.',
      'The system includes telemedicine capabilities, prescription management, and integration with various medical devices and lab systems.'
    ],
    challenge: 'Ensuring HIPAA compliance while maintaining user-friendly interfaces and seamless data flow between different medical systems.',
    solution: 'Developed a robust security framework with end-to-end encryption, role-based access control, and comprehensive audit logging.',
    projectOverview: [
      '/images/portfolio/healthcare-dashboard.jpg',
      '/images/portfolio/healthcare-mobile.jpg',
      '/images/portfolio/healthcare-reports.jpg'
    ]
  },
    {
    id: '5',
    slug: 'healthcare-system',
    title: 'Healthcare Management System',
    thumbnail: poto.src,
    heroImage: potopoto.src,
    clientName: 'MediCare Plus',
    service: 'Full Stack Development',
    services: [
      'Web Development',
      'Web Development',
      'Web Development',
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' },
    ],
    status: 'In Progress',
    technologies: [
      { name: 'Vue.js', color: 'bg-green-500' },
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'Docker', color: 'bg-blue-400' }
    ],
    about: [
      'A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and medical billing for hospitals and clinics.',
      'The system includes telemedicine capabilities, prescription management, and integration with various medical devices and lab systems.'
    ],
    challenge: 'Ensuring HIPAA compliance while maintaining user-friendly interfaces and seamless data flow between different medical systems.',
    solution: 'Developed a robust security framework with end-to-end encryption, role-based access control, and comprehensive audit logging.',
    projectOverview: [
      '/images/portfolio/healthcare-dashboard.jpg',
      '/images/portfolio/healthcare-mobile.jpg',
      '/images/portfolio/healthcare-reports.jpg'
    ]
  },
    {
    id: '6',
    slug: 'healthcare-system',
    title: 'Healthcare Management System',
    thumbnail: poto.src,
    heroImage: poto.src,
    clientName: 'MediCare Plus',
    service: 'Full Stack Development',
    services: [
      'Web Development',
      'Web Development',
      'Web Development',
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' },
    ],
    status: 'In Progress',
    technologies: [
      { name: 'Vue.js', color: 'bg-green-500' },
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'Docker', color: 'bg-blue-400' }
    ],
    about: [
      'A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and medical billing for hospitals and clinics.',
      'The system includes telemedicine capabilities, prescription management, and integration with various medical devices and lab systems.'
    ],
    challenge: 'Ensuring HIPAA compliance while maintaining user-friendly interfaces and seamless data flow between different medical systems.',
    solution: 'Developed a robust security framework with end-to-end encryption, role-based access control, and comprehensive audit logging.',
    projectOverview: [
      '/images/portfolio/healthcare-dashboard.jpg',
      '/images/portfolio/healthcare-mobile.jpg',
      '/images/portfolio/healthcare-reports.jpg'
    ]
  },
      {
    id: '7',
    slug: 'healthcare-system',
    title: 'Healthcare Management System',
    thumbnail: poto.src,
    heroImage: poto.src,
    clientName: 'MediCare Plus',
    service: 'Full Stack Development',
    services: [
      'Web Development',
      'Web Development',
      'Web Development',
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' },
    ],
    status: 'In Progress',
    technologies: [
      { name: 'Vue.js', color: 'bg-green-500' },
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'Docker', color: 'bg-blue-400' }
    ],
    about: [
      'A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and medical billing for hospitals and clinics.',
      'The system includes telemedicine capabilities, prescription management, and integration with various medical devices and lab systems.'
    ],
    challenge: 'Ensuring HIPAA compliance while maintaining user-friendly interfaces and seamless data flow between different medical systems.',
    solution: 'Developed a robust security framework with end-to-end encryption, role-based access control, and comprehensive audit logging.',
    projectOverview: [
      '/images/portfolio/healthcare-dashboard.jpg',
      '/images/portfolio/healthcare-mobile.jpg',
      '/images/portfolio/healthcare-reports.jpg'
    ]
  },
      {
    id: '8',
    slug: 'healthcare-system',
    title: 'Healthcare Management System',
    thumbnail: poto.src,
    heroImage: potopoto.src,
    clientName: 'MediCare Plus',
    service: 'Full Stack Development',
    services: [
      'Web Development',
      'Web Development',
      'Web Development',
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' },
    ],
    status: 'In Progress',
    technologies: [
      { name: 'Vue.js', color: 'bg-green-500' },
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'Docker', color: 'bg-blue-400' }
    ],
    about: [
      'A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and medical billing for hospitals and clinics.',
      'The system includes telemedicine capabilities, prescription management, and integration with various medical devices and lab systems.'
    ],
    challenge: 'Ensuring HIPAA compliance while maintaining user-friendly interfaces and seamless data flow between different medical systems.',
    solution: 'Developed a robust security framework with end-to-end encryption, role-based access control, and comprehensive audit logging.',
    projectOverview: [
      '/images/portfolio/healthcare-dashboard.jpg',
      '/images/portfolio/healthcare-mobile.jpg',
      '/images/portfolio/healthcare-reports.jpg'
    ]
  },
      {
    id: '9',
    slug: 'healthcare-system',
    title: 'Healthcare Management System',
    thumbnail: poto.src,
    heroImage: poto.src,
    clientName: 'MediCare Plus',
    service: 'Full Stack Development',
    services: [
      'Web Development',
      'Web Development',
      'Web Development',
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' },
    ],
    status: 'In Progress',
    technologies: [
      { name: 'Vue.js', color: 'bg-green-500' },
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'Docker', color: 'bg-blue-400' }
    ],
    about: [
      'A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and medical billing for hospitals and clinics.',
      'The system includes telemedicine capabilities, prescription management, and integration with various medical devices and lab systems.'
    ],
    challenge: 'Ensuring HIPAA compliance while maintaining user-friendly interfaces and seamless data flow between different medical systems.',
    solution: 'Developed a robust security framework with end-to-end encryption, role-based access control, and comprehensive audit logging.',
    projectOverview: [
      '/images/portfolio/healthcare-dashboard.jpg',
      '/images/portfolio/healthcare-mobile.jpg',
      '/images/portfolio/healthcare-reports.jpg'
    ]
  },
      {
    id: '10',
    slug: 'healthcare-system',
    title: 'Healthcare Management System',
    thumbnail: poto.src,
    heroImage: poto.src,
    clientName: 'MediCare Plus',
    service: 'Full Stack Development',
    services: [
      'Web Development',
      'Web Development',
      'Web Development',
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' },
    ],
    status: 'In Progress',
    technologies: [
      { name: 'Vue.js', color: 'bg-green-500' },
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'Docker', color: 'bg-blue-400' }
    ],
    about: [
      'A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and medical billing for hospitals and clinics.',
      'The system includes telemedicine capabilities, prescription management, and integration with various medical devices and lab systems.'
    ],
    challenge: 'Ensuring HIPAA compliance while maintaining user-friendly interfaces and seamless data flow between different medical systems.',
    solution: 'Developed a robust security framework with end-to-end encryption, role-based access control, and comprehensive audit logging.',
    projectOverview: [
      '/images/portfolio/healthcare-dashboard.jpg',
      '/images/portfolio/healthcare-mobile.jpg',
      '/images/portfolio/healthcare-reports.jpg'
    ]
  },
      {
    id: '11',
    slug: 'healthcare-system',
    title: 'Healthcare Management System',
    thumbnail: poto.src,
    heroImage: potopoto.src,
    clientName: 'MediCare Plus',
    service: 'Full Stack Development',
    services: [
      'Web Development',
      'Web Development',
      'Web Development',
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' },
    ],
    status: 'In Progress',
    technologies: [
      { name: 'Vue.js', color: 'bg-green-500' },
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'Docker', color: 'bg-blue-400' }
    ],
    about: [
      'A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and medical billing for hospitals and clinics.',
      'The system includes telemedicine capabilities, prescription management, and integration with various medical devices and lab systems.'
    ],
    challenge: 'Ensuring HIPAA compliance while maintaining user-friendly interfaces and seamless data flow between different medical systems.',
    solution: 'Developed a robust security framework with end-to-end encryption, role-based access control, and comprehensive audit logging.',
    projectOverview: [
      '/images/portfolio/healthcare-dashboard.jpg',
      '/images/portfolio/healthcare-mobile.jpg',
      '/images/portfolio/healthcare-reports.jpg'
    ]
  },
      {
    id: '12',
    slug: 'healthcare-system',
    title: 'Healthcare Management System',
    thumbnail: poto.src,
    heroImage: poto.src,
    clientName: 'MediCare Plus',
    service: 'Full Stack Development',
    services: [
      'Web Development',
      'Web Development',
      'Web Development',
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' },
    ],
    status: 'In Progress',
    technologies: [
      { name: 'Vue.js', color: 'bg-green-500' },
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'Docker', color: 'bg-blue-400' }
    ],
    about: [
      'A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and medical billing for hospitals and clinics.',
      'The system includes telemedicine capabilities, prescription management, and integration with various medical devices and lab systems.'
    ],
    challenge: 'Ensuring HIPAA compliance while maintaining user-friendly interfaces and seamless data flow between different medical systems.',
    solution: 'Developed a robust security framework with end-to-end encryption, role-based access control, and comprehensive audit logging.',
    projectOverview: [
      '/images/portfolio/healthcare-dashboard.jpg',
      '/images/portfolio/healthcare-mobile.jpg',
      '/images/portfolio/healthcare-reports.jpg'
    ]
  }
];

export const getPortfolioBySlug = (slug: string): ProjectDetail | undefined => {
  return portfolioData.find(project => project.slug === slug);
};

export const getAllPortfolioSlugs = (): string[] => {
  return portfolioData.map(project => project.slug);
};