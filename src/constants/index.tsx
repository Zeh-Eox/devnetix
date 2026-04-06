import { Code2, Database, Globe, Network, Shield, Zap } from "lucide-react";
import type { Service, TeamMember } from "../types";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Arnold CONVOLBO",
    role: "Vice CEO",
    domain: "Développement Web & Mobile",
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 2,
    name: "Serges THIOMBIANO",
    role: "CEO & Fondateur",
    domain: "Data Science",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 3,
    name: "Honoré THIOMBIANO",
    role: "N/A",
    domain: "N/A",
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: 4,
    name: "Songkieta KIEMTORE",
    role: "N/A",
    domain: "N/A",
    color: "from-orange-500 to-amber-400",
  },
  {
    id: 5,
    name: "Mansour DIANDA",
    role: "N/A",
    domain: "N/A",
    color: "from-rose-500 to-red-400",
  },
];

export const services: Service[] = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Développement Sur Mesure",
    description:
      "Applications web et mobiles de nouvelle génération avec les technologies les plus modernes.",
    features: [
      "React & Next.js",
      "Architecture Microservices",
      "APIs REST & GraphQL",
      "DevOps & CI/CD",
    ],
    color: "from-blue-600 to-cyan-400",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data & Analytics",
    description:
      "Transformez vos données en insights actionnables avec nos solutions d'analyse avancée.",
    features: [
      "Big Data Architecture",
      "Machine Learning",
      "Business Intelligence",
      "Data Visualization",
    ],
    color: "from-purple-600 to-pink-400",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Infrastructure & Réseau",
    description:
      "Solutions réseau robustes et sécurisées pour une connectivité optimale.",
    features: [
      "Cloud Infrastructure",
      "Cybersécurité",
      "Network Architecture",
      "24/7 Monitoring",
    ],
    color: "from-emerald-600 to-teal-400",
  },
];

export const steps = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Consultation",
    description: "Analyse approfondie de vos besoins et objectifs métier",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Conception",
    description: "Architecture technique et design UX/UI sur mesure",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Développement",
    description: "Construction agile avec livraisons itératives",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Déploiement",
    description: "Mise en production sécurisée et monitoring",
  },
];
