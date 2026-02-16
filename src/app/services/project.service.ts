import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: "BMW Estonia",
      company: "Inchcape Digital",
      year: 2021,
      description:
        "Led the development of BMW Estonia's official dealer website, implementing a sophisticated vehicle catalog with real-time inventory management, advanced filtering system, and multi-language support. Built custom Umbraco components for dynamic content management and integrated third-party APIs for vehicle data synchronization.",
      technologies: [
        "Umbraco V9",
        "C#",
        ".NET 6",
        "SQL Server",
        "Angular.js",
        "Azure",
      ],
      url: "https://www.bmw.ee/",
      featured: true,
      role: "Frontend Developer",
      type: "built",
    },
    {
      id: 2,
      title: "Ford Latvia",
      company: "Inchcape Digital",
      year: 2021,
      description:
        "Developed Ford Latvia's dealer platform with comprehensive vehicle showcase, dynamic pricing engine, and integrated booking system. Architected the solution to handle multiple vehicle categories, implemented responsive design patterns, and created custom Umbraco document types for efficient content management.",
      technologies: [
        "Umbraco V9",
        "C#",
        ".NET 6",
        "SQL Server",
        "JavaScript",
        "Azure",
      ],
      url: "https://www.ford.lv/",
      featured: true,
      role: "Frontend Developer",
      type: "built",
    },
    {
      id: 3,
      title: "Professional Advantage Australia",
      company: "Professional Advantage",
      year: 2024,
      description:
        "Migrated the main PA website from Umbraco v7 to v8, modernizing the codebase and improving performance by 40%. Implemented new content workflows, upgraded custom components, and ensured zero downtime during the migration process.",
      technologies: [
        "Umbraco v8",
        "C#",
        "ASP.NET",
        "SQL Server",
        "Azure DevOps",
      ],
      url: "https://www.pa.com.au/",
      featured: true,
      role: "Full Stack .Net Developer",
      type: "migration",
    },
    {
      id: 4,
      title: "PA Blog",
      company: "Professional Advantage",
      year: 2025,
      description:
        "Upgraded the PA blog platform from Umbraco v7 to v13, enhancing the editorial experience with improved content editing capabilities. Migrated legacy blog posts while preserving SEO rankings and implemented new features for better content discovery.",
      technologies: ["Umbraco v13", "C#", ".NET 8", "SQL Server", "Azure"],
      url: "https://blog.pa.com.au/",
      featured: true,
      role: "Full Stack .Net Developer",
      type: "migration",
    },

    {
      id: 7,
      title: "1Staff Recruitment",
      company: "Professional Advantage",
      year: 2022,
      description:
        "Migrated 1Staff recruitment platform from Umbraco v7 to v8, enhancing job posting workflows and candidate management system. Implemented custom integrations with applicant tracking systems and improved overall platform performance.",
      technologies: [
        "Umbraco v8",
        "C#",
        ".NET Framework",
        "SQL Server",
        "Azure",
      ],
      url: "https://1staff.com/",
      featured: false,
      role: "Full Stack .Net Developer",
      type: "migration",
    },
    {
      id: 8,
      title: "Upbeat Membership",
      company: "Professional Advantage",
      year: 2022,
      description:
        "Upgraded Upbeat recruitment website from Umbraco v7 to v8, modernizing the job search functionality and improving mobile responsiveness. Migrated complex custom forms and integrated with third-party recruitment APIs.",
      technologies: [
        "Umbraco v8",
        "C#",
        ".NET Framework",
        "SQL Server",
        "jQuery",
      ],
      url: "https://www.upbeatmembership.com/",
      featured: false,
      role: "Full Stack .Net Developer",
      type: "migration",
    },
    {
      id: 9,
      title: "AgentStaffAI",
      company: "Professional Advantage",
      year: 2024,
      description:
        "Built AgentStaffAI  recruitment platform from scratch, enhancing the candidate application process and employer dashboard. Implemented new search functionality and improved site navigation structure.",
      technologies: [
        "Umbraco v8",
        "C#",
        ".NET Framework",
        "SQL Server",
        "Bootstrap",
      ],
      url: "https://agentstaffai.com/",
      featured: false,
      role: "Full Stack .Net Developer",
      type: "built",
    },
    {
      id: 10,
      title: "PA Blog US",
      company: "Professional Advantage",
      year: 2025,
      description:
        "Upgraded the PA blog US platform from Umbraco v7 to v13, enhancing the editorial experience with improved content editing capabilities. Migrated legacy blog posts while preserving SEO rankings and implemented new features for better content discovery.",
      technologies: ["Umbraco v13", "C#", ".NET 8", "SQL Server", "Azure"],
      url: "https://blog.professionaladvantage.com/",
      featured: false,
      role: "Full Stack .Net Developer",
      type: "migration",
    },
    {
      id: 11,
      title: "Professional Advantage US",
      company: "Professional Advantage",
      year: 2024,
      description:
        "Upgraded the PA blog platform from Umbraco v7 to v13, enhancing the editorial experience with improved content editing capabilities. Migrated legacy blog posts while preserving SEO rankings and implemented new features for better content discovery.",
      technologies: ["Umbraco v8", "C#", "ASP.NET", "SQL Server", "Azure"],
      url: "https://professionaladvantage.com/",
      featured: false,
      role: "Full Stack .Net Developer",
      type: "migration",
    },
    {
      id: 12,
      title: "BMW Lithuania",
      company: "Inchcape Digital",
      year: 2021,
      description:
        "Led the development of BMW Estonia's official dealer website, implementing a sophisticated vehicle catalog with real-time inventory management, advanced filtering system, and multi-language support. Built custom Umbraco components for dynamic content management and integrated third-party APIs for vehicle data synchronization.",
      technologies: ["Umbraco v9", "C#", ".NET 6", "SQL Server", "Azure"],
      url: "https://www.bmw.lt/",
      featured: false,
      role: "Frontend Developer",
      type: "built",
    },
  ];

  getFeaturedProjects(): Project[] {
    return this.projects
      .filter((p) => p.featured)
      .sort((a, b) => b.year - a.year);
  }

  getAllProjects(): Project[] {
    return [...this.projects].sort((a, b) => b.year - a.year);
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find((p) => p.id === id);
  }
}
