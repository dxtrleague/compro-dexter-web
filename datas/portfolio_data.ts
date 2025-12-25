import { ProjectDetail } from '@/types/portfolio';

// Default images
import defaultThumbnail from "@/public/assets/portfolio/19.jpg";
import defaultHero from "@/public/assets/portfolio/19.jpg";

// Hero images for each project
import heroTelkomsel from "@/public/assets/portfolio/telkomsel/Hero_Telkomsel.png";
import heroOcbc from "@/public/assets/portfolio/ocbc/Hero_OCBC.png";
import heroAlfamart from "@/public/assets/portfolio/alfamart/Hero_Alfamart.png";
import heroSmf from "@/public/assets/portfolio/smf/Hero_SMF.png";
import heroBakaumu from "@/public/assets/portfolio/bakaumu/Hero_BakauMu.png";
import heroBzwedding from "@/public/assets/portfolio/bzwedding/Hero_BZWedding.png";
import heroRasamala from "@/public/assets/portfolio/rasamala/Hero_Rasamala.png";
import heroUltraVoucher from "@/public/assets/portfolio/ultravoucher/Hero_UltraVoucher.png";
import heroPoskota from "@/public/assets/portfolio/poskota/Hero_PosKota.png";
import heroAckita from "@/public/assets/portfolio/ackita/Hero_ACKita.png";
import heroBkpm from "@/public/assets/portfolio/bkpm/Hero_BKPM.png";
import heroCarisayur from "@/public/assets/portfolio/carisayur/Hero_CariSayur.png";
import heroDjki from "@/public/assets/portfolio/djki/Hero_DJKI.png";
import heroTechinasia from "@/public/assets/portfolio/techinasia/Hero_TechInAsia.png";

// Project overview images
import overviewTelkomsel1 from "@/public/assets/portfolio/telkomsel/Project_Telkom_1.png";
import overviewTelkomsel2 from "@/public/assets/portfolio/telkomsel/Project_Telkom_2.png";
import overviewTelkomsel3 from "@/public/assets/portfolio/telkomsel/Project_Telkom_3.png";
import overviewAlfamart1 from "@/public/assets/portfolio/alfamart/Project_Alfa_1.jpeg";
import overviewAlfamart2 from "@/public/assets/portfolio/alfamart/Project_Alfa_2.jpeg";
import overviewAlfamart3 from "@/public/assets/portfolio/alfamart/Project_Alfa_3.jpeg";
import overviewAlfamart4 from "@/public/assets/portfolio/alfamart/Project_Alfa_4.jpeg";
import overviewOCBC from "@/public/assets/portfolio/ocbc/Project_OCBC.jpg";
import overviewSMF from "@/public/assets/portfolio/smf/Project_SMF.jpg";
import overviewBakaumu from "@/public/assets/portfolio/bakaumu/Project_BakauMu.png";
import overviewBzwedding from "@/public/assets/portfolio/bzwedding/Project_BZWedding.jpg";
import overviewRasamala from "@/public/assets/portfolio/rasamala/Project_Rasamala.jpg";
import overviewUltraVoucher1 from "@/public/assets/portfolio/ultravoucher/Project_UltraVoucher_1.jpg";
import overviewUltraVoucher2 from "@/public/assets/portfolio/ultravoucher/Project_UltraVoucher_2.jpg";
import overviewUltraVoucher3 from "@/public/assets/portfolio/ultravoucher/Project_UltraVoucher_3.png";
import overviewCariSayur from "@/public/assets/portfolio/carisayur/Project_CariSayur.jpg";
import overviewPoskota from "@/public/assets/portfolio/poskota/Project_PosKota.jpg";
import overviewAckita from "@/public/assets/portfolio/ackita/Project_ACKita.png";
import overviewBkpm from "@/public/assets/portfolio/bkpm/Project_BKPM.jpg";
import overviewDjki from "@/public/assets/portfolio/djki/Project_DJKI.jpg";
import overviewTechinasia1 from "@/public/assets/portfolio/techinasia/Project_TechInAsia_1.jpg";
import overviewTechinasia2 from "@/public/assets/portfolio/techinasia/Project_TechInAsia_2.png";
import overviewTechinasia3 from "@/public/assets/portfolio/techinasia/Project_TechInAsia_3.jpg";


export const portfolioData: ProjectDetail[] = [
  {
    id: '1',
    preview: true,
    slug: 'mytelkomsel-research-design',
    title: 'MyTelkomsel Research & Design',
    thumbnail: defaultThumbnail.src,
    heroImage: heroTelkomsel.src,
    clientName: 'PT Telekomunikasi Selular',
    service: 'Telco',
    services: [
      'UI Design',
      'UX Research',
      'Mobile Apps'
    ],
    devices: [
      { name: 'Mobile' }
    ],
    status: 'Completed',
    technologies: ['1', '5', '4', '2'],
    about: [
      'MyTelkomsel, as the flagship digital portal for Telkomsel\'s millions of users, serves as a critical touchpoint for managing accounts, accessing exclusive content, and a wide array of telecommunication services. Recognizing the need to elevate the user experience, our team was entrusted with the mission of conducting in-depth UX research and a comprehensive redesign of the user interface. The primary objective was to significantly enhance user engagement and satisfaction, transforming the app into an indispensable daily companion for its users.',
      'The project was a monumental undertaking that involved a complete overhaul of the user journey. From the initial login process to daily interactions with various features, every aspect was meticulously re-evaluated and redesigned. Our approach was rooted in a deep understanding of user behavior, pain points, and aspirations, ensuring that the new design would not only be aesthetically pleasing but also functionally superior and intuitive to navigate.',
      'Through a series of iterative design sprints, user testing sessions, and data-driven insights, we crafted a new interface that is both modern and user-friendly. The result is a more personalized and seamless experience that empowers users to manage their digital lives with greater ease and efficiency. This transformation has led to a marked increase in user activity and a stronger emotional connection to the MyTelkomsel brand.'
    ],
    challenge: 'The existing app suffered from a complex navigation structure and a dated UI, leading to low user retention and engagement. The challenge was to simplify the user experience while introducing new features without overwhelming the user.',
    solution: 'We implemented a user-centric design process, starting with extensive user research and persona development. The new design features a cleaner interface, a more intuitive navigation pattern, and personalized content recommendations, resulting in a significant increase in user activity.',
    projectOverview: [
      overviewTelkomsel1.src,
      overviewTelkomsel2.src,
      overviewTelkomsel3.src
    ]
  },
  {
    id: '2',
    preview: false,
    slug: 'website-exploration-ocbc',
    title: 'Website Exploration',
    thumbnail: defaultThumbnail.src,
    heroImage: heroOcbc.src,
    clientName: 'PT Bank OCBC NISP Tbk',
    service: 'Education Platform',
    services: [
      'Education Platform',
      'System Integration',
      'Remote Development'
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' }
    ],
    status: 'Completed',
    technologies: ['3', '6', '4', '1'],
    about: [
      'In its commitment to fostering financial literacy and empowering customers, PT Bank OCBC NISP Tbk envisioned a comprehensive financial education platform. The goal was to create a trusted and accessible digital resource that would demystify personal finance, investment strategies, and banking products for a broad audience. This initiative was not just about providing information, but about building confidence and enabling smarter financial decisions for individuals and families alike.',
      'The platform was meticulously designed to cater to a diverse audience, from students just beginning their financial journey to working professionals looking to optimize their investments. We developed a modular content structure, offering interactive courses, insightful articles, and practical tools tailored to different levels of financial expertise. This ensures that every user, regardless of their background, can find value and relevance in the platform\'s offerings.',
      'A key aspect of the project was the seamless integration with the bank\'s existing systems, allowing for a highly personalized user experience. By leveraging user data (with consent), the platform can provide customized recommendations and learning paths, making the journey to financial literacy more engaging and effective. The remote development model ensured that the platform could be continuously updated with fresh content and features, keeping it relevant in a dynamic financial landscape.'
    ],
    challenge: 'The main challenge was to present complex financial information in a way that was easy to understand and engaging for a general audience. Additionally, the platform needed to be seamlessly integrated with the bank\'s existing systems.',
    solution: 'We developed a modular platform with interactive courses, articles, and tools. The system integration allows for a personalized experience, where users can get recommendations based on their banking profile. The remote development model ensured continuous updates and support.',
    projectOverview: [
      overviewOCBC.src
    ]
  },
  {
    id: '3',
    preview: true,
    slug: 'ama-ssp-mobile-store-sales-point',
    title: 'Application Mobile Android Store Sales Point',
    thumbnail: defaultThumbnail.src,
    heroImage: heroAlfamart.src,
    clientName: 'PT Sumber Trijaya Lestari',
    service: 'Retail FMCG',
    services: [
      'Retail FMCG',
      'System Integration',
      'Remote Development'
    ],
    devices: [
      { name: 'Mobile' }
    ],
    status: 'Completed',
    technologies: ['2', '4', '5', '8'],
    about: [
      'The Alfamart Digital Business represents a groundbreaking innovation by Indonesia\'s largest retailer, designed to meet the evolving demands of the digital age. This comprehensive digital ecosystem aims to make daily necessities more accessible and affordable, empowering both end consumers and entrepreneurs within its vast network. The initiative is a testament to Alfamart\'s forward-thinking approach and its commitment to leveraging technology for societal benefit.',
      'At the heart of this digital transformation are six strategic pillars: Alfamikro, Alfamind, Alfa POP, Alfagift, Alfacart, and Alfatrex. Each pillar serves a distinct purpose, from supporting micro-businesses to providing a seamless e-commerce experience, all integrated into a cohesive O2O (Online-to-Offline) service model. This interconnected structure ensures that users can enjoy a consistent and convenient experience, whether they are shopping online or at a physical store.',
      'Our role in this ecosystem involved developing the mobile application for the Store Sales Point (SSP), a critical tool for field officers. This application streamlines the process of surveying and onboarding new resellers, ensuring that data is collected accurately and efficiently. By digitizing this workflow, we have enabled Alfamart to expand its network more rapidly and effectively, further solidifying its market leadership.'
    ],
    challenge: 'The demand of resellers were emerging in retail business. The process of gathering resellers information need to be done effectively.',
    solution: 'Creating mobile application to support officer\'s survey process of resellers outlet. It covers survey process, approval and online order.',
    projectOverview: [
      overviewAlfamart1.src,
      overviewAlfamart2.src,
      overviewAlfamart3.src,
      overviewAlfamart4.src
    ]
  },
  {
    id: '4',
    preview: true,
    slug: 'loan-origination-system-smf',
    title: 'Loan Origination System (LOS)',
    thumbnail: defaultThumbnail.src,
    heroImage: heroSmf.src,
    clientName: 'PT Sarana Multigriya Finansial (Persero)',
    service: 'Financial Platform',
    services: [
      'Financial Platform',
      'Loan Origination',
      'Web Dashboard',
    ],
    devices: [
      { name: 'Web' }
    ],
    status: 'Completed',
    technologies: ['2', '4', '5', '8'],
    about: [
      'PT Sarana Multigriya Finansial (SMF), a pivotal institution in Indonesia\'s housing finance sector, is dedicated to supporting the growth of the secondary mortgage market. To enhance its operational efficiency and service delivery, we partnered with SMF to develop a state-of-the-art Loan Origination System (LOS). This comprehensive system was engineered to manage the entire loan lifecycle, from the initial application stage to the final disbursement, bringing a new level of automation and transparency to the process.',
      'The development of the LOS was driven by the need to address the inefficiencies of the previous, largely manual, loan application process. The new system was designed to be a centralized hub for all loan-related activities, providing a 360-degree view of each application. This not only streamlines the workflow for loan officers but also empowers applicants with real-time updates and a clearer understanding of their loan status.',
      'By automating key stages such as credit scoring, document verification, and approval workflows, the LOS has significantly reduced processing times and the potential for human error. The system\'s robust analytics and reporting capabilities also provide SMF\'s management with valuable insights into their portfolio performance, enabling data-driven decision-making and strategic planning for future growth.',
    ],
    challenge: 'The previous loan application process was largely manual, paper-based, and prone to errors. This led to significant delays and a lack of real-time tracking for loan applications.',
    solution: 'We built a robust web-based LOS that automates credit scoring, document verification, and approval workflows. The system provides a centralized dashboard for loan officers to track applications, manage documents, and make informed decisions quickly.',
    projectOverview: [
      overviewSMF.src
    ]
  },
  {
    id: '5',
    preview: false,
    slug: 'tree-carbon-monitoring-platform',
    title: 'Tree & Carbon Monitoring Platform',
    thumbnail: defaultThumbnail.src,
    heroImage: heroBakaumu.src,
    clientName: 'Bakau Manfaat Universal Foundation (BakauMU)',
    service: 'Carbon Report',
    services: [
      'Carbon Report',
      'Dashboard Monitoring',
      'Location Mapping'
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' },
    ],
    status: 'Completed',
    technologies: ['2', '4', '5', '8'],
    about: [
      'Bakau Manfaat Universal Foundation (BakauMU) is at the forefront of environmental conservation and reforestation efforts in Indonesia. To effectively measure and communicate the impact of their vital work, we collaborated to create a sophisticated digital platform for monitoring tree growth and calculating carbon sequestration. This platform is an indispensable tool for tracking the progress of their conservation projects and demonstrating their contribution to combating climate change.',
      'The platform was designed with a dual-interface architecture to cater to different user needs. Field workers are equipped with a user-friendly mobile application that allows them to collect data on tree health, growth, and survival rates directly from the field. This data is then synchronized with a central web dashboard, where researchers, managers, and stakeholders can access real-time analytics and comprehensive reports.',
      'One of the platform\'s most powerful features is its use of location mapping technology. Each tree or plot of land is geotagged, enabling precise tracking and visualization of the reforestation areas. This not only aids in operational management but also enhances transparency, allowing donors and partners to see the tangible results of their contributions. The platform\'s ability to generate detailed carbon reports is crucial for securing future funding and supporting global climate initiatives.'
    ],
    challenge: 'Tracking the growth and health of thousands of trees across vast geographical areas was a significant logistical challenge. The foundation needed a reliable and scalable solution to manage this data.',
    solution: 'We developed a platform with GPS-enabled mobile apps for data collection and a central web dashboard for visualization. The system uses location mapping to track tree plots and generates detailed carbon reports for stakeholders and donors.',
    projectOverview: [
      overviewBakaumu.src
    ]
  },
  {
    id: '6',
    preview: false,
    slug: 'wedding-venue-online-catalogue',
    title: 'Wedding Venue Online Catalogue',
    thumbnail: defaultThumbnail.src,
    heroImage: heroBzwedding.src,
    clientName: 'PT Bellazull Purnama Kreasindo',
    service: 'Wedding Platform',
    services: [
      'Wedding Platform',
      'Cloud Infrastructure',
      'Artificial Intelligence'
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' }
    ],
    status: 'Completed',
    technologies: ['2', '4', '5', '8'],
    about: [
      'The journey to finding the perfect wedding venue is one of the most significant and emotional parts of wedding planning. For PT Bellazull Purnama Kreasindo, a curator of stunning event spaces, we sought to transform this experience by creating an immersive online catalogue platform. Our goal was to showcase the unique beauty and character of each venue, helping couples envision their special day and find a location that truly resonates with their personal story.',
      'The platform was designed to be more than just a listing of venues; it is a comprehensive discovery tool. We incorporated high-resolution photography, detailed descriptions of amenities and capacity, and, most importantly, an integrated booking inquiry system. This allows couples to not only explore their options but also to take the next step with ease, making the entire venue selection process seamless and enjoyable.',
      'To elevate the user experience further, we integrated cutting-edge technologies. A cloud-based infrastructure ensures the platform can handle high traffic, especially during peak wedding seasons, without compromising on performance. The inclusion of an AI-powered recommendation engine provides personalized venue suggestions based on a couple\'s preferences, making the search for their dream venue both efficient and delightful.'
    ],
    challenge: 'The client needed a way to reach a wider audience and provide a rich, interactive experience for potential customers. Static images and phone calls were no longer sufficient to capture the essence of their venues.',
    solution: 'We built a responsive web platform with a virtual tour feature and an AI-powered recommendation engine. The cloud infrastructure ensures the site can handle high traffic, especially during peak wedding seasons.',
    projectOverview: [
      overviewBzwedding.src
    ]
  },
  {
    id: '7',
    preview: false,
    slug: 'booking-management-system-pondok-rasamala',
    title: 'Booking Management System Pondok Rasamala',
    thumbnail: defaultThumbnail.src,
    heroImage: heroRasamala.src,
    clientName: 'PT Rasamala Wisata Alam',
    service: 'Web Dashboard',
    services: [
      'Web Dashboard',
      'Cloud Infrastructure',
      'Software Development'
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' }
    ],
    status: 'Completed',
    technologies: ['2', '4', '5', '8'],
    about: [
      'Nestled in a serene natural setting, Pondok Rasamala is a unique resort celebrated for its rustic charm and artistic architecture, crafted primarily from bamboo and wood. For over a decade, it has been a favored destination for those seeking tranquility and a connection with nature. However, with its growing popularity, the resort\'s manual booking system became a bottleneck, struggling to keep up with the increasing demand and leading to operational challenges.',
      'The primary challenge was the inefficiency and error-prone nature of the manual booking process. Issues such as double bookings, cumbersome cancellation procedures, and a lack of real-time collaboration among staff were becoming frequent. This not only affected the guest experience but also put a strain on the resort\'s resources. It became clear that a digital transformation was essential to sustain growth and maintain the high standards of service that Pondok Rasamala is known for.',
      'Our solution was a comprehensive digital ecosystem comprising a mobile booking application for guests, a powerful web dashboard for staff, and a responsive website to capture mobile traffic. The new system automates the entire booking lifecycle, from reservation to check-out, providing real-time availability and eliminating the risk of overbooking. We also provided strategic guidance on how to leverage this digital solution to enhance overall operational efficiency and improve the guest journey from start to finish.'
    ],
    challenge: 'For over 10 years active, Pondok Rasamala have significant traction from visitor. With a lot of demand, manual booking processes were prone to problem such as double booked, manual cancelation, staff collaboration and so on. We need an apps to make booking process easier and improve daily operation effectively.',
    solution: 'Mobile Booking Application, Web Dashboard and Responsive Website to reduce bounce rate for who accessing website via mobile device. Also we are giving some advices how to properly transform to digital solution.',
    projectOverview: [
      overviewRasamala.src
    ]
  },
  {
    id: '8',
    preview: false,
    slug: 'mobile-microsite-ramadhan',
    title: 'Mobile Microsite Ultra Berkah Ramadhan',
    thumbnail: defaultThumbnail.src,
    heroImage: heroUltraVoucher.src,
    clientName: 'PT Trimegah Karya Pratama Tbk',
    service: 'Digital Retail',
    services: [
      'Digital Retail',
      'System Integration',
      'Remote Development'
    ],
    devices: [
      { name: 'Mobile' }
    ],
    status: 'Completed',
    technologies: ['2', '4', '5', '8'],
    about: [
      'The holy month of Ramadhan is a period of heightened commercial activity and spiritual reflection for PT Trimegah Karya Pratama Tbk. To capitalize on this opportune time and deepen customer engagement, the company launched the "Ultra Berkah Ramadhan" campaign. Our task was to create a dedicated mobile microsite that would serve as the central hub for this campaign, delivering special promotions, spiritual content, and interactive features to a massive mobile-first audience.',
      'The microsite was conceived with a mobile-first philosophy, ensuring an optimal viewing experience on a wide range of devices. It was engineered to be lightweight and fast-loading, a critical factor in retaining user attention and minimizing bounce rates. The design was visually appealing, incorporating thematic elements of Ramadhan, and the user interface was intuitive, allowing users to easily navigate through various sections, including special offers, promotional calendars, and inspirational content.',
      'A key technical challenge was the need for the microsite to handle a high volume of traffic, especially during peak hours. To address this, we built the microsite as a Progressive Web App (PWA), which offers a native app-like experience, including offline capabilities and push notifications. The backend system was integrated with the company\'s existing CRM and inventory systems, enabling real-time updates on promotions and stock availability. The remote development model allowed for agile iterations, enabling us to quickly adapt to user feedback and changing market dynamics.'
    ],
    challenge: 'The campaign had a short timeline and needed to reach a massive mobile-first audience quickly. The microsite needed to be engaging and capable of handling high traffic without performance issues.',
    solution: 'We built a progressive web app (PWA) that offered a native app-like experience. The system integration allowed for real-time updates on promotions, and the remote development approach enabled rapid iteration based on user feedback.',
    projectOverview: [
      overviewUltraVoucher1.src,
      overviewUltraVoucher2.src,
      overviewUltraVoucher3.src
    ]
  },
  {
    id: '9',
    preview: false,
    slug: 'online-groceries-shopping-platform',
    title: 'Online Groceries Shopping Platform',
    thumbnail: defaultThumbnail.src,
    heroImage: heroCarisayur.src,
    clientName: 'PT Paskomnas Niaga Utama',
    service: 'Ecommerce Platform',
    services: [
      'Ecommerce Platform',
      'Software Development',
      'Remote Development'
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' }
    ],
    status: 'Completed',
    technologies: ['2', '4', '5', '8'],
    about: [
      'In an era where convenience is king, PT Paskomnas Niaga Utama recognized the immense potential of the online grocery market. To expand its reach and cater to the evolving needs of modern consumers, the company embarked on a journey to launch a comprehensive online groceries shopping platform. The vision was to create a one-stop-shop where customers could browse a wide selection of products, place orders, and have them delivered to their doorstep, all with a few clicks.',
      'The platform was designed to be more than just a digital storefront. It was built as a full-featured e-commerce ecosystem, with a strong emphasis on user experience and operational efficiency. Key features include a powerful search and filter system, secure and diverse payment options, and a reliable delivery management system. We also incorporated a personalized recommendation engine to help users discover new products and a subscription service for recurring purchases, enhancing customer loyalty.',
      'Behind the scenes, the platform is powered by a robust inventory management system that ensures real-time stock accuracy and a sophisticated logistics module that optimizes delivery routes. The remote development approach allowed us to build and deploy the platform in phases, gathering user feedback and making continuous improvements. This agile methodology ensured that the final product was not only technically sound but also perfectly aligned with the needs and expectations of the target market.'
    ],
    challenge: 'The grocery e-commerce market is highly competitive. The challenge was to create a platform that was not only functional but also offered a superior user experience, with features like personalized recommendations and efficient delivery tracking.',
    solution: 'We developed a full-featured e-commerce platform with a focus on user experience and scalability. The platform includes an intelligent recommendation engine, a robust inventory management system, and a real-time order tracking feature for customers.',
    projectOverview: [
      overviewCariSayur.src
    ]
  },
  {
    id: '10',
    preview: false,
    slug: 'media-publishing-platform-poskota',
    title: 'Media Publishing Platform',
    thumbnail: defaultThumbnail.src,
    heroImage: heroPoskota.src,
    clientName: 'PT Media Antarkota Jaya',
    service: 'Media Publishing',
    services: [
      'Media Publishing',
      'Search Engine Optimization',
      'Web Dashboard'
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' }
    ],
    status: 'Completed',
    technologies: ['2', '4', '5', '8'],
    about: [
      'Poskota, an iconic Indonesian daily newspaper published by PT Media Antarkota Jaya since 1970, has been a staple of news and information for millions of readers. For decades, it has focused on local news, crime reports, and stories that resonate with the mid-lower society. However, in the face of a digital revolution, the newspaper realized that its online presence was not keeping pace with the changing habits of its readership.',
      'The primary challenge was that the existing website was not optimized for the modern web user. It suffered from slow load times, a poor mobile experience, and a structure that was not conducive to search engine visibility. This resulted in a high bounce rate and a missed opportunity to engage with a younger, digitally-native audience. The need for a comprehensive digital transformation was clear.',
      'Our solution was a complete overhaul of the Poskota digital platform. We started by revamping the front page with a modern, clean design that prioritized readability and user engagement. Under the hood, we restructured the entire cloud infrastructure to ensure blazing-fast load times and high availability. A key focus was on implementing a robust SEO strategy to improve the site\'s ranking on search engines, driving organic traffic, and ensuring that Poskota\'s valuable content could reach a global audience.'
    ],
    challenge: 'For almost 50 years in national media business, Poskota is not really in to digital transformation. They have a website but its not optimize thus the bounce rate need to reduce.',
    solution: 'Revamp the front page and optimize load performance by restructuring its cloud infrastructure.',
    projectOverview: [
      overviewPoskota.src
    ]
  },
  {
    id: '11',
    preview: false,
    slug: 'ackita-online-shop',
    title: 'Online Shop',
    thumbnail: defaultThumbnail.src,
    heroImage: heroAckita.src,
    clientName: 'PT Rumakita Kreasi Mandiri',
    service: 'Shopping Platform',
    services: [
      'Shopping Platform',
      'Web Dashboard',
      'Cloud Infrastructure',
      'Remote Development',
      'Software Development'
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' }
    ],
    status: 'Completed',
    technologies: ['2', '4', '5', '8'],
    about: [
      'ACKita is an innovative on-demand service platform specifically designed for AC maintenance and repair in tropical climates. Unlike conventional services, ACKita is presented as an integrated digital ecosystem, as seen in our portfolio, which includes an online shop, website, and web dashboard.',
      'We integrate technology to connect customers with certified technicians, ensuring reliable, transparent, and timely service through various digital touchpoints.',
      'Through this system, users can easily book services, track technician locations, and manage service history all within a single platform that prioritizes trust and standardized pricing.'
    ],
    challenge: 'The fragmented AC service market makes it difficult for customers to find reliable service and hinders operational management efficiency for service providers.',
    solution: 'We build an integrated digital ecosystem that includes a customer booking platform as well as a cloud-based operational management dashboard for scheduling and service automation.',
    projectOverview: [
      overviewAckita.src
    ]
  },
  {
    id: '12',
    preview: false,
    slug: 'bkpm-website-company-profile',
    title: 'Website Company Profile',
    thumbnail: defaultThumbnail.src,
    heroImage: heroBkpm.src,
    clientName: 'Ministry of Investment/BKPM',
    service: 'Government Platform',
    services: [
      'Government Platform',
      'Website Development',
      'Frontend Development',
      'Backend Development'
    ],
    devices: [
      { name: 'Web' },
      { name: 'Mobile' }
    ],
    status: 'Completed',
    technologies: ['1', '3', '6', '7'],
    about: [
      'The Ministry of Investment and Downstream Investment (BKPM) plays a crucial role in driving economic growth through national investment. To support strategic decision-making, we collaborated to develop a Company Profile Website platform that also serves as a visual information hub for investment realization across Indonesia.',
      'This platform aggregates data from various sources and presents it in an intuitive and interactive format, allowing stakeholders to accurately review data by region, sector, and time period.',
      'By transforming complex datasets into actionable visual intelligence, this site empowers policymakers to identify opportunities and monitor the effectiveness of investment policies, creating a better investment climate.'
    ],
    challenge: 'Manual reporting and scattered data sources make it difficult to obtain a holistic view of national investment performance in a timely and transparent manner.',
    solution: 'We developed an interactive company profile website with integrated advanced data visualization capabilities for real-time monitoring of investment realization.',
    projectOverview: [
      overviewBkpm.src
    ]
  },
  {
    id: '13',
    preview: true,
    slug: 'djki-e-hakcipta',
    title: 'E-Hakcipta',
    thumbnail: defaultThumbnail.src,
    heroImage: heroDjki.src,
    clientName: 'Directorate General of Intellectual Property',
    service: 'Public Service',
    services: [
      'Public Service',
      'Software Development',
      'Frontend Development',
      'Backend Development',
      'Web Dashboard'
    ],
    devices: [
      { name: 'Web' },
      { name: 'Mobile' }
    ],
    status: 'Completed',
    technologies: ['2', '4', '5', '9'],
    about: [
      'Intellectual property protection is vital to driving national innovation, so the Directorate General of Intellectual Property (DJKI) requires modernizing its digital infrastructure through the E-Hakcipta system.',
      'We engineered a robust IP management system to streamline the registration process, from application to certification, covering copyright, patent, and trademark aspects. A key feature of the platform is a powerful search engine that allows the public and examiners to quickly examine existing IP, thereby reducing redundancy and accelerating approval times.',
      'Designed to be secure, scalable, and user-friendly through a Web Dashboard interface, the system makes IP protection more accessible to creators and businesses across the country, supporting the strengthening of the national creative economy.'
    ],
    challenge: 'Previous manual and semi-digital processes were slow and prone to backlogs, making it difficult for creators to protect their works efficiently.',
    solution: 'We developed a comprehensive E-Copyright digital platform for intellectual property registration and management, equipped with an optimized search engine and automated processing workflows.',
    projectOverview: [
      overviewDjki.src
    ]
  },
  {
    id: '14',
    preview: false,
    slug: 'tech-in-asia-hack-o-train',
    title: 'Hack O Train',
    thumbnail: defaultThumbnail.src,
    heroImage: heroTechinasia.src,
    clientName: 'PT Teknologi Indonesia Asia',
    service: 'Event Technology',
    services: [
      'Event Technology',
      'Networking Platform',
      'Event Management'
    ],
    devices: [
      { name: 'Mobile' },
      { name: 'Web' }
    ],
    status: 'Completed',
    technologies: ['1', '5', '8', '10'],
    about: [
      'Hack O Train - Moving Innovation On Rails is a unique initiative from Tech In Asia designed to connect Asia\'s startup ecosystem through an unforgettable competition experience. We developed a dedicated conference platform that serves as a digital companion for thousands of attendees, enabling them to interact in a dynamic environment as seen in the footage of the train.',
      'The platform facilitates intelligent matchmaking for business networking, enabling innovators to connect with relevant investors and industry partners efficiently.',
      'Featuring personalized agendas, live session streaming, and interactive Q&A, the system is built to handle high usage throughout the event day, ensuring seamless interactions and fostering meaningful knowledge exchange within the tech community.'
    ],
    challenge: 'Creating active engagement and maximizing networking value for thousands of attendees at scale and with high mobility is a complex logistical challenge.',
    solution: 'We deliver a feature-rich event app with matchmaking algorithms, schedule management, and real-time engagement tools to ensure every attendee receives an integrated, innovative experience.',
    projectOverview: [
      overviewTechinasia1.src,
      overviewTechinasia2.src,
      overviewTechinasia3.src
    ]
  }
];

export const getPortfolioBySlug = (slug: string): ProjectDetail | undefined => {
  return portfolioData.find(project => project.slug === slug);
};

export const getAllPortfolioSlugs = (): string[] => {
  return portfolioData.map(project => project.slug);
};