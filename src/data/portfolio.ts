import type { LucideIcon } from "lucide-react";
import {
  Code,
  Building2,
  QrCode,
  Briefcase,
  Layers,
  Github,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

export type PortfolioService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PortfolioProject = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
};

export type PortfolioSocialLink = {
  icon: LucideIcon;
  href: string;
  label: string;
};

export type PortfolioContactInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

export type PortfolioExperience = {
  title: string;
  organization: string;
  period?: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  link?: { label: string; href: string };
};

export type PortfolioClient = {
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export type PortfolioSkill = {
  name: string;
  icon: string;
};

export type PortfolioSkillGroup = {
  title: string;
  description?: string;
  skills: PortfolioSkill[];
};

export type PortfolioApproach = {
  title: string;
  description: string;
};

export type PortfolioStat = {
  value: string;
  label: string;
};

export const portfolioDomains: string[] = [
  "Enterprise management systems",
  "Healthcare applications",
  "E-commerce platforms",
  "Booking systems",
  "Learning management systems",
  "Event technology",
  "Business management software",
  "Mobile applications",
  "Digital transformation projects",
];

export const portfolioStats: PortfolioStat[] = [
  { value: "6+", label: "Years of Software Development" },
  { value: "20+", label: "Projects Completed" },
  { value: "3–5", label: "Developers Led in Frontend Teams" },
  { value: "2+", label: "Years of NodeJS Experience" },
  { value: "2,000–5,000+", label: "Typical Event Scale via TespDev" },
];

export const portfolioServices: PortfolioService[] = [
  {
    title: "Web Application Development",
    description:
      "I build modern, responsive and scalable web applications using ReactJS, VueJS and TypeScript.",
    icon: Code,
  },
  {
    title: "Enterprise Systems",
    description:
      "I develop internal systems that simplify complex business workflows and help organizations manage their daily operations.",
    icon: Building2,
  },
  {
    title: "Event Technology",
    description:
      "Through TespDev, I build technology platforms for events, including QR check-in, customer engagement, digital stamps, gift redemption and event data management.",
    icon: QrCode,
  },
  {
    title: "Business Management Systems",
    description:
      "I develop custom management platforms tailored to specific industries and operational workflows.",
    icon: Briefcase,
  },
  {
    title: "Fullstack Development",
    description:
      "With experience in both frontend and NodeJS backend development, I can work across the application stack — from user interfaces and business logic to APIs, databases and deployment.",
    icon: Layers,
  },
];

export const portfolioExperiences: PortfolioExperience[] = [
  {
    title: "Software Engineer",
    organization: "Phuong Dong General Hospital",
    period: "2026 — Present",
    description:
      "Working on healthcare and internal enterprise applications used to support hospital operations and business processes.",
    highlights: [
      "Developing and maintaining enterprise web applications",
      "Building reusable UI components and frontend architecture",
      "Integrating REST APIs and business workflows",
      "Working with complex forms and healthcare-related data",
      "Optimizing application performance and user experience",
      "Collaborating with backend developers, designers and business teams",
      "Maintaining and improving existing systems",
    ],
  },
  {
    title: "Founder",
    organization: "TespDev",
    subtitle: "Technology Studio · Event Tech · Digital Products",
    description:
      "I founded TespDev as an independent technology studio focused on building practical digital products and technology experiences for businesses.",
    highlights: [
      "Event technology",
      "Custom web applications",
      "Business management systems",
      "Digital transformation",
      "Internal enterprise applications",
      "Custom software development",
      "QR-based event platform: check-in, stamp collection, gift redemption, and activity tracking for large-scale events",
    ],
    link: { label: "tespdev.com", href: "https://tespdev.com" },
  },
];

export const portfolioClients: PortfolioClient[] = [
  {
    name: "SAPECO",
    subtitle: "Digital Transformation & Business Management Platform",
    description:
      "Partnering with SAPECO, a pest control and disinfection service provider, to develop and maintain digital systems supporting day-to-day business operations.",
    highlights: [
      "Staff management",
      "Administrative management",
      "Service management",
      "Reporting systems",
      "Customer and business data",
      "Internal workflows",
      "Payment and QR banking workflows",
      "Multi-branch management",
    ],
    technologies: ["ReactJS", "TypeScript", "NodeJS", "MySQL", "Redis", "REST API"],
  },
  {
    name: "MieNailRoom",
    subtitle: "Nail Salon Management Platform",
    description:
      "Working with MieNailRoom to develop a mobile-first management platform for nail salon businesses, designed specifically around salon workflows.",
    highlights: [
      "Customer management",
      "Service management",
      "Staff management",
      "Orders and invoices",
      "Revenue management",
      "Branch management",
      "Payment workflows",
      "QR banking payment",
      "Operational reporting",
    ],
    technologies: ["ReactJS", "TypeScript", "NodeJS", "MySQL", "Tailwind CSS"],
  },
];

export const portfolioSkillGroups: PortfolioSkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "ReactJS", icon: "/assets/icons/skills/react.svg" },
      { name: "VueJS", icon: "/assets/icons/skills/vue.svg" },
      { name: "Next.js", icon: "/assets/icons/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/assets/icons/skills/typescript.svg" },
      { name: "JavaScript", icon: "/assets/icons/skills/javascript.svg" },
      { name: "HTML5", icon: "/assets/icons/skills/html5.svg" },
      { name: "CSS3", icon: "/assets/icons/skills/css3.svg" },
      { name: "Tailwind CSS", icon: "/assets/icons/skills/tailwindcss.svg" },
    ],
  },
  {
    title: "State & Data",
    skills: [
      { name: "Redux", icon: "/assets/icons/skills/redux.svg" },
      { name: "Zustand", icon: "/assets/icons/skills/zustand.svg" },
      { name: "Vuex", icon: "/assets/icons/skills/vuex.svg" },
      { name: "TanStack Query", icon: "/assets/icons/skills/reactquery.svg" },
    ],
  },
  {
    title: "Forms & UI",
    skills: [
      { name: "React Hook Form", icon: "/assets/icons/skills/hookform.svg" },
      { name: "FullCalendar", icon: "/assets/icons/skills/calendar.svg" },
      { name: "Flatpickr", icon: "/assets/icons/skills/flatpickr.svg" },
      { name: "BlueprintJS", icon: "/assets/icons/skills/blueprint.svg" },
      { name: "HeroUI", icon: "/assets/icons/skills/heroui.svg" },
    ],
  },
  {
    title: "Backend",
    description:
      "2+ years of hands-on NodeJS experience, mainly focused on building APIs, business logic and supporting services.",
    skills: [
      { name: "NodeJS", icon: "/assets/icons/skills/nodedotjs.svg" },
      { name: "ExpressJS", icon: "/assets/icons/skills/express.svg" },
      { name: "REST API", icon: "/assets/icons/skills/api.svg" },
      { name: "JWT Authentication", icon: "/assets/icons/skills/jwt.svg" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: "/assets/icons/skills/mysql.svg" },
      { name: "PostgreSQL", icon: "/assets/icons/skills/postgresql.svg" },
      { name: "MongoDB", icon: "/assets/icons/skills/mongodb.svg" },
      { name: "Redis", icon: "/assets/icons/skills/redis.svg" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Experience deploying, maintaining and optimizing production applications — server config, reverse proxy, SSL, process management, storage and monitoring.",
    skills: [
      { name: "Ubuntu", icon: "/assets/icons/skills/ubuntu.svg" },
      { name: "Nginx", icon: "/assets/icons/skills/nginx.svg" },
      { name: "PM2", icon: "/assets/icons/skills/pm2.svg" },
      { name: "Cloudflare", icon: "/assets/icons/skills/cloudflare.svg" },
      { name: "Cloudflare R2", icon: "/assets/icons/skills/cloudflare.svg" },
      { name: "SSL / TLS", icon: "/assets/icons/skills/ssl.svg" },
      { name: "DNS", icon: "/assets/icons/skills/dns.svg" },
      { name: "GitHub", icon: "/assets/icons/skills/github.svg" },
    ],
  },
  {
    title: "Other Tools",
    skills: [
      { name: "Git", icon: "/assets/icons/skills/git.svg" },
      { name: "Figma", icon: "/assets/icons/skills/figma.svg" },
      { name: "Photoshop", icon: "/assets/icons/skills/photoshop.svg" },
      { name: "Canva", icon: "/assets/icons/skills/canva.svg" },
      { name: "CapCut", icon: "/assets/icons/skills/capcut.svg" },
    ],
  },
];

export const portfolioApproach: PortfolioApproach[] = [
  {
    title: "Build for real users",
    description:
      "I focus on understanding how people actually use a product rather than simply implementing requirements.",
  },
  {
    title: "Keep things simple",
    description: "Complex business logic should result in a simple user experience.",
  },
  {
    title: "Think beyond the frontend",
    description:
      "Good frontend development requires understanding APIs, databases, business logic, infrastructure and the product itself.",
  },
  {
    title: "Build for long-term use",
    description:
      "I prioritize maintainable architecture, reusable components, performance and stability — especially for systems used continuously by businesses.",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "CareTech",
    subtitle: "Hospital Management System",
    description: "Hospital operations and internal workflows.",
    tags: ["React", "TypeScript", "Tailwind CSS", "React Query", "React Hook Form"],
  },
  {
    title: "WinMart",
    subtitle: "E-commerce Platform",
    description: "E-commerce website for WinMart.",
    tags: ["React", "TypeScript"],
  },
  {
    title: "True Hope Hospital",
    subtitle: "Hospital Management System",
    description: "Web hospital management for healthcare operations.",
    tags: ["React", "TypeScript"],
  },
  {
    title: "Vinpearl Booking",
    subtitle: "Travel & Booking Platform",
    description: "Booking for tours, flights and hotels.",
    tags: ["React", "TypeScript"],
  },
  {
    title: "T99 LMS",
    subtitle: "Learning Management & Business System",
    description: "Users, customers, assets and warehouse management.",
    tags: ["React", "TypeScript"],
  },
  {
    title: "業務支援ツール",
    subtitle: "Business Support Platform",
    description: "Internal user management and registration.",
    tags: ["React", "TypeScript"],
  },
  {
    title: "Adiary",
    subtitle: "Baby's Diary",
    description: "Track feeding, lactation, weight and sleep.",
    tags: ["VueJS", "Pinia", "Tailwind CSS", "Vue Router"],
  },
  {
    title: "Podland",
    subtitle: "E-commerce Website",
    description: "E-commerce site for an international business.",
    tags: ["WordPress", "Elementor", "WooCommerce"],
  },
  {
    title: "Marinbikes",
    subtitle: "E-commerce Platform",
    description: "Custom WooCommerce store.",
    tags: ["WordPress", "Elementor", "WooCommerce", "ACF"],
  },
];

export const portfolioSocialLinks: PortfolioSocialLink[] = [
  { icon: Github, href: "https://github.com/din0dev251", label: "GitHub" },
  { icon: Mail, href: "mailto:honghai251.info@gmail.com", label: "Email" },
  { icon: ExternalLink, href: "https://tespdev.com", label: "TespDev" },
];

export type PortfolioPartner = {
  name: string;
  logo: string;
};

export const portfolioPartners: PortfolioPartner[] = [
  { name: "Viettel", logo: "/assets/partners/viettel.png" },
  { name: "VPBank", logo: "/assets/partners/vpbank.png" },
  { name: "HABECO", logo: "/assets/partners/habeco.png" },
  { name: "APECO", logo: "/assets/partners/sapeco.png" },
  { name: "OVERMORE", logo: "/assets/partners/overmore.png" },
  { name: "Hanoi Premium", logo: "/assets/partners/hanoi-premium.png" },
  { name: "ST Communications", logo: "/assets/partners/st-communications.png" },
  { name: "mie.nailsroom", logo: "/assets/partners/mie-nailsroom.png" },
];

export const portfolioContactInfo: PortfolioContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "honghai251.info@gmail.com",
    href: "mailto:honghai251.info@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Vietnam 🇻🇳",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/din0dev251",
    href: "https://github.com/din0dev251",
  },
  {
    icon: ExternalLink,
    label: "TespDev",
    value: "tespdev.com",
    href: "https://tespdev.com",
  },
];
