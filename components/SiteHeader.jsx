import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "All Stories" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="border-bottom bg-white sticky-top">
      <div className="container py-3 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
        <div>
          <Link href="/" className="text-decoration-none text-dark">
            <span className="fs-3 fw-bold">EngiTBH</span>
          </Link>
          <p className="mb-0 text-secondary small">
            Engineering projects, public tech news, and trends worth your time.
          </p>
        </div>

        <nav className="d-flex flex-wrap gap-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-decoration-none fw-semibold text-dark">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
