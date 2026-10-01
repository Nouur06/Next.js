import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legacy",
  description:
    "Continue exploring Marie Curie's life, discoveries, and scientific legacy through the Nobel Prize and Institut Curie.",
};

export default function ContactPage() {
  return (
    <div className="section-wrap">
      <header className="page-intro">
        <p className="eyebrow">Continue exploring</p>
        <h1 className="page-title">
          Her work still <em>matters.</em>
        </h1>
        <p className="page-lede">
          Curie&apos;s research helped shape modern physics, chemistry, and
          medicine. Explore her story and the research institute that carries
          her name.
        </p>
      </header>
      <section className="contact-layout" aria-labelledby="legacy-heading">
        <h2 id="contact-heading">
          Follow the <em>discovery.</em>
        </h2>
        <div className="contact-details">
          <a
            className="contact-email"
            href="https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/"
            target="_blank"
            rel="noreferrer"
          >
            Nobel Prize biography <span aria-hidden="true">&nearr;</span>
          </a>
          <dl>
            <div className="contact-row">
              <dt>Research</dt>
              <dd>Physics, chemistry, radioactivity</dd>
            </div>
            <div className="contact-row">
              <dt>Institutions</dt>
              <dd>
                <a
                  href="https://institut-curie.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Institut Curie <span aria-hidden="true">&nearr;</span>
                </a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>Image sources</dt>
              <dd>
                <a
                  href="https://commons.wikimedia.org/wiki/File:Marie_Curie_1903.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wikimedia Commons <span aria-hidden="true">&nearr;</span>
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
