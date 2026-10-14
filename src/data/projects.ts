/**
 * Projects Data
 * 
 * Add your projects here. Each project should have:
 * - id: unique number
 * - title: project name
 * - description: brief description of the project
 * - tags: array of technologies/skills used
 * - link: live demo URL (optional)
 * - github: GitHub repository URL (optional)
 * - image: project image URL (optional)
 * - featured: whether to highlight this project (optional)
 */

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Research Platform",
    description: "Built an intelligent research platform using LLMs and vector databases to help researchers discover insights faster.",
    tags: ["Python", "LangChain", "FastAPI", "React"],
    github: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 2,
    title: "Data Pipeline Orchestrator",
    description: "Designed and implemented a scalable data pipeline processing millions of records daily with real-time monitoring.",
    tags: ["Python", "Apache Airflow", "PostgreSQL", "Docker"],
    link: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Neural Network Framework",
    description: "Created a lightweight neural network framework from scratch for educational purposes, implementing backpropagation and optimization algorithms.",
    tags: ["Python", "NumPy", "Machine Learning"],
    github: "https://github.com/yourusername/project",
  },
];

/**
 * Helper function to get all projects
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Helper function to get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured === true);
}

/**
 * Helper function to get project by ID
 */
export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}
