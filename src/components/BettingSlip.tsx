import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiClient from "@/services/api/apiClient";
import {
  removeBet,
  clearBets,
  selectBets,
  selectBetSlipOpen,
  toggleBetSlip,
} from "@/store/slices/bettingSlipSlice";
import { RootState } from "@/store/store";

const BetSlip: React.FC = () => {
  const dispatch = useDispatch();
  const selectedBets = useSelector(selectBets);
  const isOpen = useSelector(selectBetSlipOpen);

  const [stake, setStake] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const totalOdds = selectedBets.reduce((acc, bet) => acc * bet.odds, 1);
  const potentialWinnings = stake * totalOdds;

  const handleStakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setStake(isNaN(value) ? 0 : value);
  };

  const handleRemoveFromSlip = (matchId: string) => {
    dispatch(removeBet(matchId));
  };

  const handleClearSlip = () => {
    dispatch(clearBets());
  };

  const placeBet = async () => {
    if (stake <= 0) {
      setError("Please enter a valid stake amount");
      return;
    }

    if (selectedBets.length === 0) {
      setError("Your bet slip is empty");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const storedAuth = localStorage.getItem("auth");
      const token = storedAuth ? JSON.parse(storedAuth).accessToken : null;
      const betData = {
        stake,
        matches: selectedBets.map((bet) => ({
          matchId: bet.matchId,
          betOutcome: bet.betOutcome,
          odds: bet.odds,
        })),
      };

      await apiClient.post("bet", betData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setSuccess("Bet placed successfully!");
      dispatch(clearBets());
      setStake(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to place bet");
    } finally {
      setIsLoading(false);
    }
  };

  // Close any alerts after 5 seconds
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  return (
    <div className="bg-black text-white shadow-lg rounded-lg">
      {/* Bet Slip Header */}
      <div
        className="bg-orange-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center cursor-pointer"
        onClick={() => dispatch(toggleBetSlip())}
      >
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 15a7 7 0 100-14 7 7 0 000 14z"
              clipRule="evenodd"
            />
            <path d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z" />
          </svg>
          <span className="font-bold">Bet Slip</span>
          <span className="bg-white text-orange-600 rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold">
            {selectedBets.length}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Bet Slip Content */}
      {isOpen && (
        <div className="p-4">
          {/* Alert Messages */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 relative">
              <span className="block sm:inline">{error}</span>
              <button
                onClick={() => setError(null)}
                className="absolute top-0 right-0 px-4 py-3"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 relative">
              <span className="block sm:inline">{success}</span>
              <button
                onClick={() => setSuccess(null)}
                className="absolute top-0 right-0 px-4 py-3"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}

          {selectedBets.length === 0 ? (
            <div className="text-center py-6 text-gray-500">
              <p>Your bet slip is empty</p>
              <p className="text-sm">Select some odds to start betting</p>
            </div>
          ) : (
            <>
              {/* Selected Bets List */}
              <div className="mb-4 max-h-64 overflow-y-auto">
                {selectedBets.map((bet) => (
                  <div
                    key={bet.matchId}
                    className="border-b border-gray-200 py-2"
                  >
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">
                          {bet.matchName || `Match ${bet.matchId}`}
                        </p>
                        <p className="text-sm text-gray-400">
                          {bet.betOutcome}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-orange-600 mr-2">
                          {bet.odds.toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleRemoveFromSlip(bet.matchId)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Betting Controls */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Total Odds:{" "}
                    <span className="font-bold text-orange-600">
                      {totalOdds.toFixed(2)}
                    </span>
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="stake"
                    className="block text-sm font-medium text-gray-500   mb-1"
                  >
                    Your Stake ($)
                  </label>
                  <input
                    type="number"
                    id="stake"
                    className="w-full bg-[#181818] rounded-md border-0 shadow-sm px-4 py-2 "
                    placeholder="Enter amount"
                    min="0"
                    step="0.01"
                    value={stake || ""}
                    onChange={handleStakeChange}
                  />
                </div>
                <div className="bg-[#181818] rounded-md p-3">
                  <p className="text-sm font-medium text-gray-300">
                    Potential Winnings:
                  </p>
                  <p className="text-xl font-bold text-green-600">
                    ${potentialWinnings.toFixed(2)}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={placeBet}
                    disabled={
                      isLoading || selectedBets.length === 0 || stake <= 0
                    }
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed flex-1"
                  >
                    {isLoading ? "Placing Bet..." : "Place Bet"}
                  </button>
                  <button
                    onClick={handleClearSlip}
                    disabled={isLoading || selectedBets.length === 0}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BetSlip;
