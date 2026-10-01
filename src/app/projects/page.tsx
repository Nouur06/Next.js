import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Scientific Milestones",
  description:
    "Explore Marie Curie's research on radioactivity, discovery of polonium and radium, and mobile radiology work during the First World War.",
};

export default function ProjectsPage() {
  return (
    <div className="projects-page section-wrap">
      <header className="page-intro">
        <p className="eyebrow">Research, discovery, service</p>
        <h1 className="page-title">
          A life in <em>science.</em>
        </h1>
        <p className="page-lede">
          From measuring uranium rays in a Paris laboratory to bringing X-ray
          equipment to wartime field hospitals, Curie put scientific inquiry to
          work in the world.
        </p>
      </header>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
