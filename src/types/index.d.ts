import type { LucideIcon } from "lucide-react";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  domain: string;
  color: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export type Stat = {
  icon: LucideIcon;
  label: string;
  value: string;
};
