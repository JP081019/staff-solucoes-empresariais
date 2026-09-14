import Image from "next/image";

export function Brand({ compact = false }: { compact?: boolean }) {
  return <a className="brand" href="#inicio" aria-label="Staff Soluções Empresariais — início">
    <Image className="brand-mark" src="/logo-staff.png" alt="" width={150} height={150} priority />
    {!compact && <span className="brand-copy"><b>STAFF</b><small>SOLUÇÕES EMPRESARIAIS</small></span>}
  </a>;
}
