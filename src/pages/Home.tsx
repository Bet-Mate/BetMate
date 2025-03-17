import HeroSection from "@/components/home/HeroSection";
import "../App.css";
import QuickLinks from "@/components/home/QuickLinks";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import BonusSection from "@/components/home/BonusSection";
function Home() {
  return (
    <>
      <div className="w-full ml-64 mt-16 p-6 ">
        <HeroSection />
        {/* <QuickLinks/>
      <FeaturesSection/>
      <StatsSection/>
      <BonusSection/> */}
      </div>
    </>
  );
}

export default Home;
