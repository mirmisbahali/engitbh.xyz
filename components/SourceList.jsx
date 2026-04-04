export default function SourceList({ sources = [] }) {
  if (!sources.length) return null;

  return (
    <section className="mt-5">
      <h2 className="h4 mb-3">Sources</h2>
      <div className="list-group">
        {sources.map((source, index) => (
          <a
            key={`${source.url}-${index}`}
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="list-group-item list-group-item-action"
          >
            <div className="fw-semibold">{source.name}</div>
            <div className="small text-secondary">{source.url}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
