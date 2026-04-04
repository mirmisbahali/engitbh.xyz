import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "All Stories" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="sticky-top site-header-glass border-bottom border-secondary-subtle">
      <div className="container py-3 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="brand-mark d-inline-flex align-items-center justify-content-center text-white fw-bold">
            E
          </div>
          <div>
            <Link href="/" className="text-decoration-none text-dark">
              <span className="fs-3 fw-bold brand-wordmark">EngiTBH</span>
            </Link>
            <p className="mb-0 text-secondary small">
              Engineering projects, public tech news, and trends worth your time.
            </p>
          </div>
        </div>

        <nav className="d-flex flex-wrap gap-2 align-items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-decoration-none fw-semibold text-dark nav-pill"
            >
              {item.label}
            </Link>
          ))}
          <a href="/rss.xml" className="btn btn-sm btn-dark rounded-pill px-3">
            RSS
          </a>
        </nav>
      </div>
    </header>
  );
}
