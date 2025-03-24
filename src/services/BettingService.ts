import axios from 'axios';

interface BetMatch {
  matchId: string;
  betOutcome: string;
  odds: number;
}

interface CreateBetDto {
  stake: number;
  matches: BetMatch[];
}

interface PlaceBetResponse {
  id: string;
  userId: string;
  stake: number;
  totalOdds: number;
  potentialWinnings: number;
  status: string;
  createdAt: string;
  matches: {
    matchId: string;
    betOutcome: string;
    odds: number;
  }[];
}

class BetService {
  private apiUrl: string;
  
  constructor(baseApiUrl = '/api') {
    this.apiUrl = `${baseApiUrl}/bets`;
  }

  async placeBet(betData: CreateBetDto): Promise<PlaceBetResponse> {
    try {
      const token = localStorage.getItem('accessToken');
      
      if (!token) {
        throw new Error('Authentication required. Please log in.');
      }
      
      const response = await axios.post<PlaceBetResponse>(this.apiUrl, betData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          const errorMessage = error.response.data.message || 'Failed to place bet';
          throw new Error(errorMessage);
        } else if (error.request) {
          // The request was made but no response was received
          throw new Error('No response from server. Please check your internet connection.');
        } else {
          // Something happened in setting up the request
          throw new Error('Error setting up the request: ' + error.message);
        }
      }
      throw new Error('An unexpected error occurred');
    }
  }

  async getBetHistory(): Promise<PlaceBetResponse[]> {
    try {
      const token = localStorage.getItem('accessToken');
      
      if (!token) {
        throw new Error('Authentication required. Please log in.');
      }
      
      const response = await axios.get<PlaceBetResponse[]>(this.apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const errorMessage = error.response.data.message || 'Failed to get bet history';
          throw new Error(errorMessage);
        } else if (error.request) {
          throw new Error('No response from server. Please check your internet connection.');
        } else {
          throw new Error('Error setting up the request: ' + error.message);
        }
      }
      throw new Error('An unexpected error occurred');
    }
  }
}

export default new BetService();