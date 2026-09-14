import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return <main><Header /><HeroSection /><ServicesSection /><DifferenceSection /><AboutSection /><ContactSection /><Footer /></main>;
}
