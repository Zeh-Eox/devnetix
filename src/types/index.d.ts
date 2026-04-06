/// <reference lib="es2023" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

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