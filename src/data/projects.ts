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
    id: 4,
    title: "dynamion",
    description:
      "Open-source evaluation harness for long-horizon coding tasks: hermetic Docker grading, pluggable agent adapters, and verifiable graders.",
    tags: ["Python", "Docker", "LLM Evaluation", "Agents", "Pytest"],
    github: "https://github.com/import-dhruv/dynamion",
    featured: true,
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
