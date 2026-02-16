export interface Project {
  id: number;
  title: string;
  company: string;
  year: number;
  description: string;
  technologies: string[];
  url: string;
  featured: boolean;
  role: string;
  type: "built" | "migration";
}
