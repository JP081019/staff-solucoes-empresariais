import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Staff Soluções Empresariais | Palhoça",
  description: "Segurança, limpeza e serviços terceirizados em Palhoça.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={raleway.variable}><body>{children}</body></html>;
}
