import Link from "next/link";

const navigation = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-link" href="/" aria-label="Marie Curie home">
        <span className="brand-stamp" aria-hidden="true">
          MC
        </span>
        <span className="brand-copy">
          Marie Curie
          <br />
          Physicist + chemist
        </span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-contact" href="/contact">
        Let&apos;s talk <span aria-hidden="true">&nearr;</span>
      </Link>
    </header>
  );
}
