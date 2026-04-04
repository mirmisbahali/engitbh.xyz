import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-shell border-bottom">
      <div className="container py-5 py-lg-6 position-relative">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-7">
            <span className="badge rounded-pill text-bg-dark mb-3 px-3 py-2">
              Daily engineering brief
            </span>
            <h1 className="display-3 fw-bold mb-3 text-white hero-title">
              A sharper engineering publication for curious builders.
            </h1>
            <p className="lead text-white-50 mb-4 pe-lg-5">
              Discover open source builds, public engineering news, and trend analysis through source-backed writeups designed to be useful, auditable, and genuinely interesting.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <Link href="/posts" className="btn btn-light btn-lg rounded-pill px-4">
                Explore stories
              </Link>
              <Link href="/about" className="btn btn-outline-light btn-lg rounded-pill px-4">
                How it works
              </Link>
            </div>
            <div className="row g-3 text-white">
              <div className="col-6 col-md-4">
                <div className="hero-stat-card">
                  <div className="hero-stat-number">100%</div>
                  <div className="small text-white-50">Source-cited articles</div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="hero-stat-card">
                  <div className="hero-stat-number">Markdown</div>
                  <div className="small text-white-50">Content-first publishing</div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="hero-stat-card">
                  <div className="hero-stat-number">Daily</div>
                  <div className="small text-white-50">Local writer workflow</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-panel shadow-lg border-0">
              <div className="card-body p-4 p-lg-4">
                <div className="small text-uppercase text-secondary mb-2">Editorial model</div>
                <h2 className="h3 mb-3">Human-readable. Agent-assisted. Publicly sourced.</h2>
                <div className="d-grid gap-3">
                  <div className="mini-feature-card">
                    <strong>Open source radar</strong>
                    <div className="text-secondary small">Interesting repos, tools, and engineering bets worth watching.</div>
                  </div>
                  <div className="mini-feature-card">
                    <strong>Engineering news</strong>
                    <div className="text-secondary small">Public platform and tooling shifts summarized without fluff.</div>
                  </div>
                  <div className="mini-feature-card">
                    <strong>Trend synthesis</strong>
                    <div className="text-secondary small">Context-rich explainers that connect signals across sources.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
