import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-callout">
        <p>A legacy that keeps asking questions</p>
        <Link href="/contact">Explore her story.</Link>
      </div>
      <nav className="footer-links" aria-label="Further reading">
        <a
          href="https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/"
          target="_blank"
          rel="noreferrer"
        >
          Nobel Prize <span aria-hidden="true">&nearr;</span>
        </a>
        <a href="https://institut-curie.org/" target="_blank" rel="noreferrer">
          Institut Curie <span aria-hidden="true">&nearr;</span>
        </a>
      </nav>
      <div className="footer-bottom">
        <span>Marie Curie, 1867-1934</span>
        <span>Archival images: public domain, via Wikimedia Commons</span>
      </div>
    </footer>
  );
}
