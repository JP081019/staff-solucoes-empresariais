export function Brand({ compact = false }: { compact?: boolean }) {
  return <a className="brand" href="#inicio" aria-label="Staff Soluções Empresariais — início">
    <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M7 10h13l14 23-7 12L7 10Z" fill="currentColor"/><path d="M23 10h34L36 48l-7-12 13-23H25l-2-3Z" fill="#14a7d6"/><path d="m27 45 8 13 8-14-7-11-9 12Z" fill="#14a7d6"/></svg>
    {!compact && <span className="brand-copy"><b>STAFF</b><small>SOLUÇÕES EMPRESARIAIS</small></span>}
  </a>;
}
