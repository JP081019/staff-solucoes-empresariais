import { ArrowDownRight, MapPin, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return <section id="inicio" className="hero"><div className="hero-grid" aria-hidden="true"/><div className="hero-glow" aria-hidden="true"/>
    <div className="shell hero-inner"><div className="hero-copy">
      <div className="eyebrow hero-enter"><span/> Presença que protege. Cuidado que permanece.</div>
      <h1 className="hero-enter hero-delay-1">Sua operação<br/>em <em>boas mãos.</em></h1>
      <p className="hero-lead hero-enter hero-delay-2">Soluções profissionais em segurança, limpeza e terceirização para empresas, condomínios e obras em Palhoça.</p>
      <div className="hero-actions hero-enter hero-delay-3"><a className="button button-primary" href="https://wa.me/5548999071670?text=Ol%C3%A1%21%20Encontrei%20a%20Staff%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noreferrer">Solicitar orçamento <ArrowDownRight/></a><a className="text-link" href="#servicos">Conheça as soluções</a></div>
      <div className="hero-meta hero-enter hero-delay-4"><span><MapPin/> Atendimento em Palhoça</span><span><ShieldCheck/> Soluções sob medida</span></div>
    </div><div className="hero-visual hero-enter hero-delay-2"><div className="hero-image" role="img" aria-label="Profissionais de segurança e serviços empresariais"/><div className="hero-badge"><b>Atuação</b><span>integrada</span></div><span className="orbit orbit-one"/><span className="orbit orbit-two"/></div></div>
    <div className="hero-index" aria-hidden="true">01</div>
  </section>;
}
