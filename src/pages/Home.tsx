import { Link } from "react-router-dom";
import Header from "../components/general/Header";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import BenefitsSection from "../components/home/BenefitsSection";
import CategoriesSection from "../components/home/CategoriesSection";
import StatsSection from "../components/home/StatsSection";
import CtaSection from "../components/home/CtaSection";
import Footer from "../components/general/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <CategoriesSection />
      <StatsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default HomePage;
