import HeroSection from "@/components/home/HeroSection";
import "../App.css";
import QuickLinks from "@/components/home/QuickLinks";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import BonusSection from "@/components/home/BonusSection";
function Home() {
  return (
    <>
      <HeroSection />
      <QuickLinks/>
      <FeaturesSection/>
      <StatsSection/>
      <BonusSection/>
    </>
  );
}

export default Home;
