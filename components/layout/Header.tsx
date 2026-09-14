"use client";
import { useState } from "react";
import { Brand } from "@/components/Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell header-inner"><Brand />
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}><i className={open ? "bi bi-x-lg" : "bi bi-list"}/></button>
    <nav className={open ? "nav is-open" : "nav"} aria-label="Navegação principal">
      <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a><a href="#diferenciais" onClick={() => setOpen(false)}>Diferenciais</a><a href="#sobre" onClick={() => setOpen(false)}>A Staff</a>
      <a className="instagram-link" href="https://www.instagram.com/staff.se/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"/> @staff.se</a>
      <a className="nav-cta" href="https://wa.me/5548999071670?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noreferrer"><span>Falar com a Staff</span><i className="bi bi-arrow-up-right"/></a>
    </nav>
  </div></header>;
}
