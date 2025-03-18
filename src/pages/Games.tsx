import FilterBar from "@/components/games/FilterBar";
import { useState } from "react";
import MatchCardLive from "@/components/games/LiveMatchCard";
import { Star } from "lucide-react";
import MatchCardUpcoming from "@/components/games/UpcomingMatchCard";

function GamesPage() {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedLeague, setSelectedLeague] = useState("all");
    const [selectedDate, setSelectedDate] = useState("today");
  return (
    <div className="w-full pl-[18rem] mt-16 p-6 ">
      <FilterBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedLeague={selectedLeague}
        setSelectedLeague={setSelectedLeague}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />{" "}
      
      <div className="space-y-4">
        {/* Live match - Premier League */}
        <MatchCardLive />

        {/* Upcoming match */}
        <MatchCardUpcoming />

      </div>
    </div>
  );
}
export default GamesPage;
