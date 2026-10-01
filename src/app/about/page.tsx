import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The life and work of Marie Skłodowska-Curie, pioneering physicist and chemist.",
};

const milestones = [
  "1903 · Nobel Prize in Physics, shared with Pierre Curie and Henri Becquerel",
  "1906 · First woman professor at the University of Paris",
  "1911 · Nobel Prize in Chemistry for her work on radium and polonium",
  "1914 · Organized mobile X-ray units for wartime field hospitals",
];

export default function AboutPage() {
  return (
    <div className="section-wrap">
      <header className="page-intro">
        <p className="eyebrow">Maria Skłodowska, 1867-1934</p>
        <h1 className="page-title">
          From Warsaw to Paris. <em>Beyond the known.</em>
        </h1>
        <p className="page-lede">
          Marie Curie was a Polish-born physicist and chemist whose pioneering
          research transformed the study of radioactivity.
        </p>
      </header>
      <section className="about-layout" aria-labelledby="about-heading">
        <div className="about-copy">
          <h2 id="about-heading">A scientist who opened new paths.</h2>
          <p>
            Born Maria Skłodowska in Warsaw in 1867, she moved to Paris in 1891
            to study physics and mathematics at the Sorbonne. Her investigations
            of uranium rays led her to coin the term radioactivity.
          </p>
          <p>
            Working with Pierre Curie, she identified polonium, named for her
            homeland, and radium in 1898. In 1903, she shared the Nobel Prize in
            Physics with Pierre and Henri Becquerel, becoming the first woman
            Nobel laureate.
          </p>
          <p>
            She later became the first woman to teach at the University of
            Paris and, in 1911, the first person to win Nobel Prizes in two
            scientific fields. During the First World War, she helped bring
            mobile X-ray services to field hospitals.
          </p>
          <div className="skills-block">
            <h3>Selected milestones</h3>
            <ul className="skill-list">
              {milestones.map((milestone) => (
                <li key={milestone}>{milestone}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
