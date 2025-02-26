import HeroSection from "@/components/home/HeroSection";
import "../App.css";
import QuickLinks from "@/components/home/QuickLinks";
import FeaturesSection from "@/components/home/FeaturesSection";
function Home() {
  return (
    <>
      <HeroSection />
      <QuickLinks/>
      <FeaturesSection/>
    </>
  );
}

export default Home;
