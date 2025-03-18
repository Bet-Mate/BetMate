"use client"

import { useState } from "react"
import { History, Filter, Search, ChevronDown, ChevronUp } from "lucide-react"
import BetHistoryFilters from "@/components/history/HistoryFilters" 
import BetHistoryStats from "@/components/history/HistoryStates" 
import BetCard from "@/components/history/BetCard" 

export default function HistoryPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeStatus, setActiveStatus] = useState("all")

  return (
    <div className="flex-1 pl-[18rem] pt-16 p-6 bg-[#121212] text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center mb-4 md:mb-0">
          <History className="mr-2" /> Betting History
        </h1>

        <div className="flex items-center space-x-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="search"
              className="w-full p-2 pl-10 text-sm rounded-md bg-[#2a2a2a] border-none focus:ring-1 focus:ring-[#ff7b26] focus:outline-none"
              placeholder="Search bets..."
            />
          </div>
          <button
            className="p-2 rounded-md bg-[#2a2a2a] hover:bg-[#3a3a3a] flex items-center"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="w-5 h-5 mr-2" />
            <span className="hidden md:inline">Filters</span>
            {isFilterOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
          </button>
        </div>
      </div>

      {isFilterOpen && <BetHistoryFilters />}

      <BetHistoryStats />

      <div className="flex items-center space-x-2 mb-4 mt-6 overflow-x-auto pb-2">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
            activeStatus === "all" ? "bg-[#ff7b26]" : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
          }`}
          onClick={() => setActiveStatus("all")}
        >
          All Bets
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
            activeStatus === "won" ? "bg-[#ff7b26]" : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
          }`}
          onClick={() => setActiveStatus("won")}
        >
          Won
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
            activeStatus === "lost" ? "bg-[#ff7b26]" : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
          }`}
          onClick={() => setActiveStatus("lost")}
        >
          Lost
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
            activeStatus === "pending" ? "bg-[#ff7b26]" : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
          }`}
          onClick={() => setActiveStatus("pending")}
        >
          Pending
        </button>
      </div>

      <div className="space-y-4">
        <BetCard
          match={{
            league: "Premier League",
            leagueIcon: "/leagues/epl.webp",
            homeTeam: "Manchester United",
            homeTeamIcon: "/leagues/",
            homeScore: 2,
            awayTeam: "Chelsea",
            awayTeamIcon: "/placeholder.svg?height=32&width=32",
            awayScore: 1,
            date: "2025-03-15",
          }}
          bet={{
            id: "BET-123456",
            type: "Home Win",
            amount: 50,
            odds: 2.1,
            status: "won",
            payout: 105,
            placedAt: "2025-03-15 14:30",
          }}
        />

        
      </div>
    </div>
  )
}

