import type { LucideIcon } from "lucide-react";
import {
  Code,
  Palette,
  Smartphone,
  Github,
  Mail,
  MapPin,
} from "lucide-react";

export type PortfolioServiceStackItem = {
  name: string;
  icon: string;
};

export type PortfolioService = {
  title: string;
  icon: LucideIcon;
  stack: PortfolioServiceStackItem[];
};

export type PortfolioProject = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  live: string;
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
};

export const portfolioServices: PortfolioService[] = [
  {
    title: "Web Development",
    icon: Code,
    stack: [
      { name: "ReactJS", icon: "/assets/icons/react.svg" },
      { name: "VueJS", icon: "/assets/icons/vue.svg" },
      { name: "NodeJS", icon: "/assets/icons/nodejs.svg" },
    ],
  },
  {
    title: "UI / UX Design",
    icon: Palette,
    stack: [
      { name: "Photoshop", icon: "/assets/icons/photoshop.svg" },
      { name: "Canva", icon: "/assets/icons/canva.svg" },
      { name: "CapCut", icon: "/assets/icons/capcut.svg" },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    stack: [
      { name: "React Native", icon: "/assets/icons/react-native.svg" },
    ],
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Adiary - Baby's Diary",
    description:
      "Manage feeding and lactation diary. Track baby's weight and sleep time.",
    image: "/assets/projects/adiary.png",
    tags: ["VueJS", "Pinia", "TailwindCSS", "VueRouter", "VueI18n", "VueTestUtils", "VueUse"],
    live: "",
  },
  {
    title: "Winmart",
    description: "E-commerce website for Winmart company.",
    image: "/assets/projects/winmart.jpg",
    tags: ["React", "TypeScript"],
    live: "",
  },
  {
    title: "True Hope Hospital",
    description: "Hospital management system for True Hope Hospital.",
    image: "/assets/projects/truehope.png",
    tags: ["React", "TypeScript"],
    live: "https://www.truehope.com/",
  },
  {
    title: "Vinpearl Booking",
    description: "Booking Tour, Flight, Hotel website.",
    image: "/assets/projects/vinpearl.jpg",
    tags: ["React", "TypeScript"],
    live: "https://booking.vinpearl.com/",
  },
  {
    title: "T99 LMS",
    description: "Manager user, customer, asset warehouse, etc.",
    image: "/assets/projects/t99.jpg",
    tags: ["React", "TypeScript"],
    live: "https://t99.vn/",
  },
  {
    title: "業務支援ツール",
    description: "Manager,register user",
    image: "/assets/projects/osakan.png",
    tags: ["React", "TypeScript"],
    live: "https://t99.vn/",
  },
  {
    title: "Podland",
    description: "e commerce cigarette electronique",
    image: "/assets/projects/podland.jpg",
    tags: ["Wordpress", "Elementor", "Woocommerce"],
    live: "https://podland.vn/",
  },
  {
    title: "Marinbikes",
    description: "e commerce cigarette electronique",
    image: "/assets/projects/marinbikes.png",
    tags: ["Wordpress", "Elementor", "Woocommerce"],
    live: "https://marinbikes.vn/",
  },
  {
    title: "caretech",
    description: "Manager hospital",
    image: "/assets/projects/caretech.png",
    tags: ["React", "TypeScript", "TailwindCSS", "ReactRouter", "ReactQuery", "ReactHookForm"],
    live: "",
  },
];

export const portfolioSocialLinks: PortfolioSocialLink[] = [
  { icon: Github, href: "https://github.com/din0dev251", label: "GitHub" },
  { icon: Mail, href: "mailto:honghai251.info@gmail.com", label: "Email" },
];

export const portfolioContactInfo: PortfolioContactInfo[] = [
  { icon: Mail, label: "Email", value: "honghai251.info@gmail.com" },
  { icon: MapPin, label: "Location", value: "Ha Noi, Viet Nam" },
];

