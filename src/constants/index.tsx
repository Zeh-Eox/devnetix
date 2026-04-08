import {
  Award,
  Calculator,
  CheckCircle,
  Code2,
  Database,
  Globe,
  Heart,
  Lightbulb,
  Lock,
  Rocket,
  Shield,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import type { Service, Stat, TeamMember } from "@/types";

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
    role: "Responsable Produit",
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

export const stats: Stat[] = [
  { icon: Lock, label: "Chiffrement SSL", value: "256-bit" },
  { icon: Shield, label: "Conformité", value: "RGPD" },
  { icon: Database, label: "Stockage", value: "EU" },
  { icon: UserCheck, label: "Contrôle", value: "Total" },
];

export const statsAbout = [
  { value: "2024", label: "Année de création", icon: Rocket },
  { value: "150+", label: "Projets livrés", icon: CheckCircle },
  { value: "50+", label: "Clients satisfaits", icon: Heart },
  { value: "15", label: "Experts passionnés", icon: Users },
];

export const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description:
      "Nous repoussons constamment les limites technologiques pour offrir des solutions de pointe à nos clients.",
    color: "from-yellow-500 to-orange-400",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Excellence",
    description:
      "Qualité irréprochable dans chaque ligne de code, chaque analyse de données, chaque infrastructure déployée.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Engagement",
    description:
      "Votre succès est notre mission. Nous nous investissons pleinement dans chaque projet comme s'il était le nôtre.",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaboration",
    description:
      "Transparence, communication et travail d'équipe sont au cœur de notre approche pour des résultats optimaux.",
    color: "from-purple-500 to-indigo-400",
  },
];

export const expertise = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Développement",
    description:
      "Applications web et mobile sur mesure avec les technologies les plus modernes",
    technologies: ["React", "Node.js", "Python", "TypeScript"],
    color: "from-blue-600 to-cyan-400",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data & Analytics",
    description:
      "Transformation de vos données en insights actionnables pour la prise de décision",
    technologies: ["Big Data", "ML/AI", "Power BI", "Tableau"],
    color: "from-purple-600 to-pink-400",
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Modélisation mathématique",
    description:
      "Conception de modèles mathématiques pour analyser et optimiser des systèmes complexes",
    technologies: ["Optimisation", "Statistiques", "Simulation"],
    color: "from-indigo-600 to-purple-500",
  },
];

export const timeline = [
  {
    year: "2024",
    title: "Lancement de DEVNETIX",
    description:
      "Fondation de l'entreprise avec une vision claire : démocratiser l'excellence technologique.",
    icon: Rocket,
  },
  {
    year: "2024 Q2",
    title: "Premiers clients majeurs",
    description:
      "Signature de nos premiers contrats avec des entreprises du CAC 40 et scale-ups prometteuses.",
    icon: TrendingUp,
  },
  {
    year: "2024 Q4",
    title: "Extension de l'équipe",
    description:
      "Recrutement de talents exceptionnels en développement, data science et infrastructure.",
    icon: Users,
  },
  {
    year: "2025",
    title: "Reconnaissance du marché",
    description:
      "Certification ISO 27001 et partenariats stratégiques avec les leaders du cloud.",
    icon: Award,
  },
  {
    year: "2026",
    title: "Expansion internationale",
    description:
      "Ouverture de bureaux en Europe et accompagnement de +50 entreprises dans leur transformation digitale.",
    icon: Globe,
  },
];

export const team = [
  {
    name: "Serges THIOMBIANO",
    role: "CEO & Fondateur",
    bio: "",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Arnold CONVOLBO",
    role: "Vice CEO",
    bio: "",
    color: "from-purple-500 to-pink-400",
  },
  {
    name: "Mansour DIANDA",
    role: "Responsable Sécurité",
    bio: "",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Songkieta KIEMTORE",
    role: "Responsable Produit",
    bio: "",
    color: "from-orange-500 to-amber-400",
  },
];
