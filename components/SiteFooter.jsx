export default function SiteFooter() {
  return (
    <footer className="border-top mt-5 bg-light">
      <div className="container py-4 d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <p className="fw-bold mb-1">EngiTBH</p>
          <p className="text-secondary mb-0 small">
            Built with Next.js. Content is markdown-first and source-cited.
          </p>
        </div>
        <div className="small text-secondary">
          <div>Editorial workflow: OpenClaw content writer agent</div>
          <div>Rendering layer: Next.js App Router</div>
        </div>
      </div>
    </footer>
  );
}
