import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section className="home-hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">Physicist &amp; chemist · Warsaw and Paris</p>
          <h1 className="hero-title">
            She changed how we see <em>the atom.</em>
          </h1>
          <p className="hero-description">
            Marie Skłodowska-Curie pioneered the study of radioactivity,
            discovered polonium and radium, and became the first person to win
            Nobel Prizes in two scientific fields.
          </p>
          <div className="hero-actions">
            <Link className="text-link" href="/projects">
              Explore her discoveries <span aria-hidden="true">&rarr;</span>
            </Link>
            <span className="hero-note">Physics, 1903 · Chemistry, 1911</span>
          </div>
        </div>
        <figure className="hero-portrait">
          <Image
            src="/project-form.jpg"
            alt="Marie Curie beside a mobile military hospital X-ray vehicle, circa 1915"
            width={960}
            height={626}
            priority
            sizes="(max-width: 680px) 78vw, (max-width: 900px) 32vw, 370px"
          />
          <figcaption className="portrait-caption">
            <span>The Little Curies</span>
            <span>Circa 1915</span>
          </figcaption>
        </figure>
      </section>

      <section className="section-band">
        <div className="selected-work section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Research, discovery, service</p>
              <h2>Scientific milestones</h2>
            </div>
            <Link className="text-link" href="/projects">
              All milestones <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-note section-wrap">
        <h2>Science belongs wherever it can help.</h2>
        <div className="home-note-copy">
          <p>
            During the First World War, Curie helped equip and operate mobile
            X-ray units for field hospitals, bringing radiology closer to
            wounded soldiers.
          </p>
          <Link className="text-link" href="/about">
            Read her story <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
