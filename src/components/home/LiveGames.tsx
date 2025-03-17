import { Star } from "lucide-react";

const liveMatches = [
    {
      id: 1,
      league: {
        name: 'Premier League',
        logo: 'https://media.api-sports.io/football/leagues/39.png'
      },
      time: '32\'',
      status: 'live',
      team1: {
        name: 'Manchester United',
        logo: 'https://media.api-sports.io/football/teams/33.png',
        score: 2
      },
      team2: {
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
        score: 1
      },
      stats: {
        possession: [60, 40],
        shots: [12, 8],
        shotsOnTarget: [5, 3]
      },
      odds: {
        '1': 2.10,
        'X': 3.40,
        '2': 3.20
      }
    },
    {
      id: 2,
      league: {
        name: 'La Liga',
        logo: 'https://media.api-sports.io/football/leagues/140.png'
      },
      time: '65\'',
      status: 'live',
      team1: {
        name: 'Real Madrid',
        logo: 'https://media.api-sports.io/football/teams/541.png',
        score: 3
      },
      team2: {
        name: 'Barcelona',
        logo: 'https://media.api-sports.io/football/teams/529.png',
        score: 2
      },
      stats: {
        possession: [45, 55],
        shots: [15, 14],
        shotsOnTarget: [8, 6]
      },
      odds: {
        '1': 1.90,
        'X': 3.50,
        '2': 3.80
      }
    }
  ];

  export default function LiveGames() {
    return (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-xl font-semibold text-white `}>
              Live Matches
            </h2>
            <div className="flex gap-2">
              <button className={`px-4 py-2 text-sm rounded-lg bg-[#2C2C2E] text-white`}>
                All
              </button>
              <button className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg">
                Popular
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {liveMatches.map((match) => (
              <div key={match.id} className={`bg-[#2C2C2E] rounded-xl p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={match.league.logo} alt={match.league.name} className="w-6 h-6" />
                    <span className={`text-sm text-gray-300`}>
                      {match.league.name}
                    </span>
                    <span className="px-2 py-1 bg-red-500/10 text-red-500 text-xs font-medium rounded-full">
                      LIVE {match.time}
                    </span>
                  </div>
                  <button className={`text-gray-400 hover:text-white' `}>
                    <Star className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={match.team1.logo} alt={match.team1.name} className="w-8 h-8" />
                        <span className={`font-medium text-white`}>
                          {match.team1.name}
                        </span>
                        <span className="text-orange-500 font-semibold">{match.team1.score}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={match.team2.logo} alt={match.team2.name} className="w-8 h-8" />
                        <span className={`font-medium text-white`}>
                          {match.team2.name}
                        </span>
                        <span className="text-orange-500 font-semibold">{match.team2.score}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 ml-8">
                    {Object.entries(match.odds).map(([key, value]) => (
                      <button
                        key={key}
                        className={`min-w-[80px] p-3 rounded-lg bg-[#1C1C1E] hover:bg-orange-500 text-white
                        transition-colors`}
                      >
                        <div className={`text-xs mb-1 text-gray-400`}>
                          {key}
                        </div>
                        <div className="font-medium">{value}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className={`text-xs mb-1 text-gray-400`}>
                        Possession
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-orange-500" 
                            style={{ width: `${match.stats.possession[0]}%` }}
                          />
                        </div>
                        <span className={`text-sm text-white `}>
                          {match.stats.possession[0]}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className={`text-xs mb-1 text-gray-400`}>
                        Shots
                      </div>
                      <div className={`text-sm text-white`}>
                        {match.stats.shots[0]} - {match.stats.shots[1]}
                      </div>
                    </div>
                    <div>
                      <div className={`text-xs mb-1 text-gray-400`}>
                        Shots on Target
                      </div>
                      <div className={`text-sm text-white`}>
                        {match.stats.shotsOnTarget[0]} - {match.stats.shotsOnTarget[1]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
    )
  }