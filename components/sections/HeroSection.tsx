import Image from "next/image";

export function HeroSection() {
  return <section id="inicio" className="hero"><div className="hero-grid" aria-hidden="true"/><div className="hero-glow" aria-hidden="true"/>
    <div className="shell hero-inner"><div className="hero-copy">
      <div className="eyebrow hero-enter"><span/> Presença que protege. Cuidado que permanece.</div>
      <h1 className="hero-enter hero-delay-1">Sua operação<br/>em <em>boas mãos.</em></h1>
      <p className="hero-lead hero-enter hero-delay-2">Soluções profissionais em segurança, limpeza e terceirização para empresas, condomínios e obras em Palhoça.</p>
      <div className="hero-actions hero-enter hero-delay-3"><a className="button button-primary" href="https://wa.me/5548999071670?text=Ol%C3%A1%21%20Encontrei%20a%20Staff%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noreferrer">Solicitar orçamento <i className="bi bi-arrow-down-right"/></a><a className="text-link" href="#servicos">Conheça as soluções</a></div>
      <div className="hero-meta hero-enter hero-delay-4"><span><i className="bi bi-geo-alt"/> Atendimento em Palhoça</span><span><i className="bi bi-shield-check"/> Soluções sob medida</span></div>
    </div><div className="hero-visual hero-enter hero-delay-2"><div className="hero-image" role="img" aria-label="Profissionais de segurança e serviços empresariais"/><div className="hero-badge"><span className="badge-logo"><Image src="/logo-staff.png" alt="Logo Staff" width={150} height={150}/></span><span className="badge-label">Atuação integrada</span></div><span className="orbit orbit-one"/><span className="orbit orbit-two"/></div></div>
    <div className="hero-index" aria-hidden="true">01</div>
  </section>;
}
