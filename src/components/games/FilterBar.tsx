"use client"

import { CalendarDays } from "lucide-react"

interface FilterBarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  selectedLeague: string
  setSelectedLeague: (league: string) => void
  selectedDate: string
  setSelectedDate: (date: string) => void
}

export default function FilterBar({
  activeTab,
  setActiveTab,
  selectedLeague,
  setSelectedLeague,
  selectedDate,
  setSelectedDate,
}: FilterBarProps) {
  // Available leagues for filter
  const leagues = [
    { id: "all", name: "All Leagues" },
    { id: "premier-league", name: "Premier League" },
    { id: "la-liga", name: "La Liga" },
    { id: "champions-league", name: "Champions League" },
    { id: "serie-a", name: "Serie A" },
  ]

  // Available dates for filter
  const dates = [
    { id: "today", name: "Today" },
    { id: "tomorrow", name: "Tomorrow" },
    { id: "this-week", name: "This Week" },
  ]

  return (
    <div className="flex flex-wrap items-center text-white justify-between mb-6 gap-y-4">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === "all" ? "bg-[#ff7b26]" : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"}`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("live")}
          className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === "live" ? "bg-[#ff7b26]" : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"}`}
        >
          Live
        </button>
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === "upcoming" ? "bg-[#ff7b26]" : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"}`}
        >
          Upcoming
        </button>
      </div>

      <div className="flex items-center space-x-4">
        {/* League filter */}
        <div className="relative">
          <select
            value={selectedLeague}
            onChange={(e) => setSelectedLeague(e.target.value)}
            className="px-4 py-2 pr-8 text-sm font-medium rounded-md appearance-none bg-[#2a2a2a] focus:ring-1 focus:ring-[#ff7b26] focus:outline-none"
          >
            {leagues.map((league) => (
              <option key={league.id} value={league.id}>
                {league.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Date filter */}
        <div className="relative flex items-center">
          <CalendarDays className="absolute left-3 w-4 h-4 text-gray-400" />
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 pl-10 pr-8 text-sm font-medium rounded-md appearance-none bg-[#2a2a2a] focus:ring-1 focus:ring-[#ff7b26] focus:outline-none"
          >
            {dates.map((date) => (
              <option key={date.id} value={date.id}>
                {date.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

