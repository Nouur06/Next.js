import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" id={project.slug}>
      <Link
        className="project-image-link"
        href={`/projects#${project.slug}`}
        aria-label={`View ${project.name} project`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1400}
          height={1000}
          sizes="(max-width: 680px) 100vw, (max-width: 900px) 45vw, 600px"
        />
        <span className="project-image-label" aria-hidden="true">
          &nearr;
        </span>
      </Link>
      <div className="project-meta">
        <h3>{project.name}</h3>
        <p>{project.year}</p>
      </div>
      <p className="project-description">{project.summary}</p>
    </article>
  );
}
