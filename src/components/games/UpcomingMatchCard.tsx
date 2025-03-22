import { fetchAllMatches, selectAllMatches, selectMatchesStatus, selectMatchesError } from "@/store/slices/gamesSlice";
import { AppDispatch } from "@/store/store";
import { Clock } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Team {
  name: string;
  logo: string;
}

interface League {
  name: string;
  logo: string;
}

interface DisplayMatch {
  id: string;
  time: string;
  league: League;
  team1: Team;
  team2: Team;
  odds: {
    '1': string;
    'X': string;
    '2': string;
  };
}

export default function MatchCardUpcoming() {
  const dispatch = useDispatch<AppDispatch>()
  const matches = useSelector(selectAllMatches);
  const status = useSelector(selectMatchesStatus);
  const error = useSelector(selectMatchesError);

  useEffect(() => {
    dispatch(fetchAllMatches());
  }, [dispatch]);

  // Helper function to format commence time
  const formatMatchTime = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      const today = new Date();
      
      // Check if the match is today
      if (date.toDateString() === today.toDateString()) {
        return `Today, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      }
      
      // Check if the match is tomorrow
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      if (date.toDateString() === tomorrow.toDateString()) {
        return `Tomorrow, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      }
      
      // Otherwise show date and time
      return `${date.toLocaleDateString([], { month: 'short', day: 'numeric' })}, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } catch (e) {
      return 'Invalid date';
    }
  };

  // Helper to format match data for display
  const formatMatchForDisplay = (match: any): DisplayMatch => {
    // Extract league from match data
    const league = {
      name: match.league.title,
      logo:`/leagues/${match.league.key}.png`
    };

    // Extract teams and add logos
    const team1 = {
      name: match.match.homeTeam,
      logo: match.homeTeamLogo || `/Teams/${match.league.title}/${match.match.homeTeam}.png`
    };

    const team2 = {
      name: match.match.awayTeam,
      logo: match.awayTeamLogo || `/Teams/${match.league.title}/${match.match.awayTeam}.png`
    };

    // Extract odds with null safety
    const odds = match.odds ? {
      '1': match.odds.homeWin ? match.odds.homeWin.toFixed(2) : '-',
      'X': match.odds.draw ? match.odds.draw.toFixed(2) : '-',
      '2': match.odds.awayWin ? match.odds.awayWin.toFixed(2) : '-'
    } : { '1': '-', 'X': '-', '2': '-' };

    return {
      id: match.id,
      time: formatMatchTime(match.match.commenceTime),
      league,
      team1,
      team2,
      odds
    };
  };

  if (status === 'loading') {
    return <div className="text-center mt-8">Loading matches...</div>;
  }

  if (status === 'failed' && error) {
    const errorMessage = typeof error === 'string' 
      ? error 
      : error || (typeof error === 'object' ? JSON.stringify(error) : String(error));
    return <div className="text-center mt-8 text-red-500">Error: {errorMessage}</div>;
  }

  return (
    <>
      {matches.length === 0 ? (
        <div className="text-center p-8 bg-[#2C2C2E] rounded-xl">
          <p className="text-gray-400">No upcoming matches available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {matches.map((match) => {
            const displayMatch = formatMatchForDisplay(match);
            
            return (
              <div key={displayMatch.id} className="bg-[#2C2C2E] rounded-xl p-4 hover:bg-[#3C3C3E] transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img 
                      src={displayMatch.league.logo} 
                      alt={displayMatch.league.name} 
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm text-gray-300">
                      {displayMatch.league.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    <Clock className="w-4 h-4 inline-block mr-1" />
                    {displayMatch.time}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* <img 
                      src={displayMatch.team1.logo} 
                      alt={displayMatch.team1.name} 
                      className="w-8 h-8"
                    /> */}
                    <span className="font-medium text-white">
                      {displayMatch.team1.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">vs</span>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-white">
                      {displayMatch.team2.name}
                    </span>
                    {/* <img 
                      src={displayMatch.team2.logo} 
                      alt={displayMatch.team2.name} 
                      className="w-8 h-8"
                    /> */}
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  {Object.entries(displayMatch.odds).map(([key, value]) => (
                    <button
                      key={key}
                      className="flex-1 p-2 rounded-lg text-center bg-[#1C1C1E] hover:bg-orange-500 text-white transition-colors"
                    >
                      <div className="text-xs mb-1 text-gray-400">
                        {key}
                      </div>
                      <div className="font-medium">{value}</div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}