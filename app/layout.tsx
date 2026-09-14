import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Staff Soluções Empresariais | Palhoça",
  description: "Segurança, limpeza e serviços terceirizados em Palhoça.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
