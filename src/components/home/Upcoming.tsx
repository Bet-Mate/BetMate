import { Clock } from "lucide-react";

const upcomingMatches = [
    {
      id: 3,
      time: "Today, 20:00",
      league: {
        name: "Serie A",
        logo: "https://media.api-sports.io/football/leagues/135.png"
      },
      team1: {
        name: "AC Milan",
        logo: "https://media.api-sports.io/football/teams/489.png"
      },
      team2: {
        name: "Inter",
        logo: "https://media.api-sports.io/football/teams/505.png"
      },
      odds: {
        '1': 2.40,
        'X': 3.20,
        '2': 2.90
      }
    },
    {
      id: 4,
      time: "Today, 21:15",
      league: {
        name: "Bundesliga",
        logo: "https://media.api-sports.io/football/leagues/78.png"
      },
      team1: {
        name: "Bayern Munich",
        logo: "https://media.api-sports.io/football/teams/157.png"
      },
      team2: {
        name: "Dortmund",
        logo: "https://media.api-sports.io/football/teams/165.png"
      },
      odds: {
        '1': 1.75,
        'X': 3.80,
        '2': 4.20
      }
    }
  ];

  export default function UpcomingMatches(){
    return (
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-xl font-semibold text-white`}>
              Upcoming Matches
            </h2>
            <button className={`text-sm text-orange-400`}>
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingMatches.map((match) => (
              <div key={match.id} className={`bg-[#2C2C2E] rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img src={match.league.logo} alt={match.league.name} className="w-6 h-6" />
                    <span className={`text-sm text-gray-300`}>
                      {match.league.name}
                    </span>
                  </div>
                  <span className={`text-sm text-gray-400`}>
                    <Clock className="w-4 h-4 inline-block mr-1" />
                    {match.time}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={match.team1.logo} alt={match.team1.name} className="w-8 h-8" />
                    <span className={`font-medium text-white`}>
                      {match.team1.name}
                    </span>
                  </div>
                  <span className={`text-sm text-gray-400`}>vs</span>
                  <div className="flex items-center gap-3">
                    <span className={`font-medium text-white`}>
                      {match.team2.name}
                    </span>
                    <img src={match.team2.logo} alt={match.team2.name} className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  {Object.entries(match.odds).map(([key, value]) => (
                    <button
                      key={key}
                      className={`flex-1 p-2 rounded-lg text-center bg-[#1C1C1E] hover:bg-orange-500 text-white
                      } transition-colors`}
                    >
                      <div className={`text-xs mb-1 text-gray-400`}>
                        {key}
                      </div>
                      <div className="font-medium">{value}</div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
    )
  }