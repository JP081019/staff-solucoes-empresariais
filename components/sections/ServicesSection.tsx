import { ArrowUpRight, Building2, Shield, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  { n: "01", title: "Segurança", icon: Shield, text: "Proteção planejada para pessoas, patrimônios e operações.", items: ["Portaria e vigilância", "Escolta armada e velada", "Segurança VIP", "Segurança em obras", "Controle de acesso"] },
  { n: "02", title: "Limpeza", icon: Sparkles, text: "Ambientes impecáveis, cuidados por equipes preparadas.", items: ["Serviços gerais", "Limpeza pós-obra", "Lavação predial", "Zeladoria"] },
  { n: "03", title: "Apoio operacional", icon: Building2, text: "Profissionais certos para manter cada detalhe em movimento.", items: ["Almoxarifado", "Jardinagem", "Trabalho em altura", "Terceirização em geral"] },
];

export function ServicesSection() { return <section id="servicos" className="section services"><div className="shell">
  <Reveal className="section-heading"><div><span className="kicker">O que fazemos</span><h2>Soluções que sustentam<br/><em>o seu negócio.</em></h2></div><p>Da proteção ao cuidado diário, reunimos serviços essenciais em uma operação mais simples, segura e eficiente.</p></Reveal>
  <div className="service-grid">{services.map((service, index) => <Reveal key={service.title} delay={index * 100} className="service-card"><div className="service-top"><span>{service.n}</span><service.icon/></div><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><a href={`https://wa.me/5548999071670?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(service.title)}.`} target="_blank" rel="noreferrer">Quero este serviço <ArrowUpRight/></a></Reveal>)}</div>
</div></section>; }
