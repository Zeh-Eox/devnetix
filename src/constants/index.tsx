import { Calculator, Code2, Database, Globe, Shield, Zap } from "lucide-react";
import type { Service, TeamMember } from "../types";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Serges THIOMBIANO",
    role: "CEO & Fondateur",
    domain: "Data Science",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    name: "Arnold CONVOLBO",
    role: "Vice CEO",
    domain: "Ingeniérie Logicielle",
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    name: "Mansour DIANDA",
    role: "Responsable Sécurité",
    domain: "Cybersécurite",
    color: "from-rose-500 to-red-400",
  },
  {
    id: 4,
    name: "Songkieta KIEMTORE",
    role: "N/A",
    domain: "Développement frontend",
    color: "from-orange-500 to-amber-400",
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
    icon: <Calculator className="w-8 h-8" />,
    title: "Modélisation Mathématique",
    description:
      "Des solutions analytiques avancées au service de la résolution de vos problématiques complexes.",
    features: [
      "Analyse Numérique",
      "Optimisation",
      "Statistiques Avancées",
      "Simulations & Prévisions",
    ],
    color: "from-emerald-600 to-teal-400",
  },
];

export const steps = [
  {
    icon: Globe,
    title: "Consultation",
    description: "Analyse approfondie de vos besoins et objectifs métier",
    accent: "cyan",
  },
  {
    icon: Zap,
    title: "Conception",
    description: "Architecture technique et design UX/UI sur mesure",
    accent: "emerald",
  },
  {
    icon: Code2,
    title: "Développement",
    description: "Construction agile avec livraisons itératives",
    accent: "amber",
  },
  {
    icon: Shield,
    title: "Déploiement",
    description: "Mise en production sécurisée et monitoring",
    accent: "rose",
  },
];

export const accentColors = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/20",
    gradient: "from-cyan-500 to-cyan-400",
    line: "from-cyan-500/60 via-cyan-400/40 to-transparent",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
    gradient: "from-emerald-500 to-emerald-400",
    line: "from-emerald-500/60 via-emerald-400/40 to-transparent",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    glow: "shadow-amber-500/20",
    gradient: "from-amber-500 to-amber-400",
    line: "from-amber-500/60 via-amber-400/40 to-transparent",
  },
  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    text: "text-rose-400",
    glow: "shadow-rose-500/20",
    gradient: "from-rose-500 to-rose-400",
    line: "from-rose-500/60 via-rose-400/40 to-transparent",
  },
};