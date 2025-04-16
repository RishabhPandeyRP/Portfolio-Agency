export interface Work {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    category: 'web' | 'app' | 'ui/ux';
    images: string[];
    liveLink: string;
    techStack: string[];
    featured: boolean;
  }
  
  export const works: Work[] = [
    {
      id: 'ecommerce-platform',
      title: 'Modern E-commerce Platform',
      description: 'A fully responsive e-commerce platform with seamless checkout experience, advanced filtering, search functionality, and admin dashboard. The platform includes user authentication, product management, and order tracking features.',
      shortDescription: 'Full-featured e-commerce solution with advanced user experience',
      category: 'web',
      images: [
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809165/ChatGPT_Image_Apr_16_2025_06_40_17_PM_ytha3q.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809189/ChatGPT_Image_Apr_16_2025_06_42_51_PM_te5yu8.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809253/ChatGPT_Image_Apr_16_2025_06_43_59_PM_ubnsmp.png',
      ],
      liveLink: 'https://example-ecommerce.com',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Stripe', 'Supabase'],
      featured: true,
    },
    {
      id: 'fitness-mobile-app',
      title: 'Fitness Tracking App',
      description: 'A comprehensive fitness tracking mobile application that allows users to track workouts, set goals, monitor progress, and connect with fitness communities. The app features a clean, intuitive interface with real-time data visualization.',
      shortDescription: 'Mobile fitness tracker with social features and progress analytics',
      category: 'app',
      images: [
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809165/ChatGPT_Image_Apr_16_2025_06_40_17_PM_ytha3q.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809189/ChatGPT_Image_Apr_16_2025_06_42_51_PM_te5yu8.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809253/ChatGPT_Image_Apr_16_2025_06_43_59_PM_ubnsmp.png',
      ],
      liveLink: 'https://example-fitness-app.com',
      techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Chart.js', 'Google Fit API'],
      featured: true,
    },
    {
      id: 'banking-dashboard',
      title: 'Banking Dashboard UI/UX',
      description: 'A modern banking dashboard redesign focusing on accessibility and simplicity. The project included comprehensive user research, wireframing, prototyping, and final UI design. The result is an intuitive interface that simplifies complex financial operations.',
      shortDescription: 'User-centric banking interface with focus on accessibility',
      category: 'ui/ux',
      images: [
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809165/ChatGPT_Image_Apr_16_2025_06_40_17_PM_ytha3q.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809189/ChatGPT_Image_Apr_16_2025_06_42_51_PM_te5yu8.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809253/ChatGPT_Image_Apr_16_2025_06_43_59_PM_ubnsmp.png',
      ],
      liveLink: 'https://example-banking-dashboard.com',
      techStack: ['Figma', 'Adobe XD', 'Protopie', 'User Testing', 'Design System'],
      featured: true,
    },
    {
      id: 'real-estate-platform',
      title: 'Real Estate Platform',
      description: 'A comprehensive real estate platform allowing users to browse, filter, and inquire about properties. Features include interactive maps, virtual tours, agent profiles, and saved searches with notifications.',
      shortDescription: 'Interactive property search platform with virtual viewing capabilities',
      category: 'web',
      images: [
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809165/ChatGPT_Image_Apr_16_2025_06_40_17_PM_ytha3q.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809189/ChatGPT_Image_Apr_16_2025_06_42_51_PM_te5yu8.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809253/ChatGPT_Image_Apr_16_2025_06_43_59_PM_ubnsmp.png',
      ],
      liveLink: 'https://example-realestate.com',
      techStack: ['React', 'Node.js', 'MongoDB', 'MapBox API', 'AWS S3', 'Express'],
      featured: false,
    },
    {
      id: 'delivery-app',
      title: 'Food Delivery App',
      description: 'A food delivery application with real-time order tracking, restaurant discovery, ratings, and reviews. The app offers an elegant user experience with smooth animations and intuitive checkout process.',
      shortDescription: 'Fast and intuitive food ordering app with real-time tracking',
      category: 'app',
      images: [
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809165/ChatGPT_Image_Apr_16_2025_06_40_17_PM_ytha3q.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809189/ChatGPT_Image_Apr_16_2025_06_42_51_PM_te5yu8.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809253/ChatGPT_Image_Apr_16_2025_06_43_59_PM_ubnsmp.png',
      ],
      liveLink: 'https://example-food-delivery.com',
      techStack: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe', 'Bloc Pattern'],
      featured: false,
    },
    {
      id: 'saas-dashboard',
      title: 'SaaS Product Dashboard',
      description: 'A complete UI/UX redesign for a SaaS product dashboard, enhancing usability and visual appeal. The project involved detailed user research, workflow optimization, and extensive usability testing.',
      shortDescription: 'Intuitive and visually appealing SaaS dashboard design',
      category: 'ui/ux',
      images: [
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809165/ChatGPT_Image_Apr_16_2025_06_40_17_PM_ytha3q.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809189/ChatGPT_Image_Apr_16_2025_06_42_51_PM_te5yu8.png',
        'https://res.cloudinary.com/dq8mearha/image/upload/v1744809253/ChatGPT_Image_Apr_16_2025_06_43_59_PM_ubnsmp.png',
      ],
      liveLink: 'https://example-saas-dashboard.com',
      techStack: ['Figma', 'Framer', 'User Research', 'A/B Testing', 'Design System'],
      featured: false,
    }
  ];