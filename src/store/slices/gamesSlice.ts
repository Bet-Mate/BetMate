import apiClient from '@/services/api/apiClient';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Types
interface Match {
  match: {
    commenceTime: string;
  };
  league: {
    key: string;
  };
}

interface MatchesState {
  matches: Match[];
  loading: boolean;
  error: string | null;
  selectedBookmaker: string;
}

// Async thunk for fetching matches
export const fetchMatches = createAsyncThunk(
  'matches/fetchMatches',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get('events');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Unknown error');
    }
  }
);

// Initial state
const initialState: MatchesState = {
  matches: [],
  loading: false,
  error: null,
  selectedBookmaker: 'pinnacle',
};

// Create slice
const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setSelectedBookmaker: (state, action: PayloadAction<string>) => {
      state.selectedBookmaker = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action: PayloadAction<Match[]>) => {
        state.loading = false;
        state.matches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch matches';
      });
  },
});

// Export actions and reducer
export const { setSelectedBookmaker } = matchesSlice.actions;

// Selectors
export const selectAllMatches = (state: { matches: MatchesState }) => state.matches.matches;

export const selectUpcomingMatches = (state: { matches: MatchesState }) => {
  const { matches } = state.matches;

  // Sort matches by commence time
  const sortedMatches = [...matches].sort((a, b) => 
    new Date(a.match.commenceTime).getTime() - new Date(b.match.commenceTime).getTime()
  );

  // Return only upcoming matches (matches that haven't started yet)
  return sortedMatches.filter(match => 
    new Date(match.match.commenceTime).getTime() > new Date().getTime()
  );
};

// Selector to get the first 6 upcoming matches for homepage
export const selectHomePageMatches = (state: { matches: MatchesState }) => {
  const upcomingMatches = selectUpcomingMatches(state);
  return upcomingMatches.slice(0, 8);
};

// Selector to get matches for a specific league
export const selectMatchesByLeague = (state: { matches: MatchesState }, leagueKey: string) => {
  const { matches } = state.matches;
  return matches.filter((match: Match) => match.league.key === leagueKey);
};

export default matchesSlice.reducer;