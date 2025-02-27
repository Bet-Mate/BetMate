import { Award, Check, Gift, Zap } from "lucide-react";

export default function BonusSection() {
  return (
    <section className="bg-[#181818] dark:bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#181818]/50 to-blue-800/90 dark:to-blue-800/90"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(16, 185, 129, 0.05)"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <div className="text-center mb-16">
          <span className="bg-blue-800/90 text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4 inline-block">
            Limited Time Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Triple Welcome Package
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join BetMate today and unlock our exclusive welcome package with
            three tiers of bonuses!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* First Deposit Bonus */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <div className="bg-white dark:bg-blue-800/90 py-4 text-center">
              <h3 className="text-xl font-bold text-blue-800/90 dark:text-white">First Deposit</h3>
            </div>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-white dark:bg-blue-800/90 rounded-full p-5">
                  <Gift className="w-10 h-10 text-blue-800/90 dark:text-white" />
                </div>
              </div>
              <div className="text-center mb-8">
                <p className="text-5xl font-bold text-white mb-2">100%</p>
                <p className="text-gray-400">Up to $500</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Minimum deposit: $20
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    10x wagering requirement
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Valid for 30 days
                  </span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white dark:bg-blue-800/90 rounded-lg hover:bg-blue-700 transition text-blue-800/90 dark:text-white font-bold">
                Claim Now
              </button>
            </div>
          </div>

          {/* Second Deposit Bonus */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-105 md:translate-y-4">
            <div className="bg-white dark:bg-blue-800/90 py-4 text-center">
              <h3 className="text-xl font-bold text-blue-800/90 dark:text-white">Second Deposit</h3>
            </div>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-white dark:bg-blue-800/90 rounded-full p-5">
                  <Award className="w-10 h-10 text-blue-800/90 dark:text-white" />
                </div>
              </div>
              <div className="text-center mb-8">
                <p className="text-5xl font-bold text-white mb-2">50%</p>
                <p className="text-gray-400">Up to $250</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Minimum deposit: $20
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    8x wagering requirement
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Valid for 30 days
                  </span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white dark:bg-blue-800/90 rounded-lg hover:bg-blue-700 transition text-blue-800/90 dark:text-white font-bold">
                Claim Now
              </button>
            </div>
          </div>

          {/* Free Spins Bonus */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <div className="bg-white dark:bg-blue-800/90 py-4 text-center">
              <h3 className="text-xl font-bold text-blue-800/90 dark:text-white">Free Spins</h3>
            </div>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-white dark:bg-blue-800/90 rounded-full p-5">
                  <Zap className="w-10 h-10 text-blue-800/90 dark:text-white" />
                </div>
              </div>
              <div className="text-center mb-8">
                <p className="text-5xl font-bold text-white mb-2">100</p>
                <p className="text-gray-400">Free Spins</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    20 spins per day for 5 days
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    On selected slots only
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    No wagering on winnings
                  </span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white dark:bg-blue-800/90 rounded-lg hover:bg-blue-700 transition text-blue-800/90 dark:text-white font-bold">
                Claim Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-[#181818] dark:bg-black rounded-lg p-4 mb-8 max-w-2xl">
            <p className="text-gray-300 text-sm">
              <span className="text-yellow-400 font-bold">⚠️ Important:</span>{" "}
              New players only. 18+. Terms & conditions apply. Please gamble
              responsibly.
            </p>
          </div>
          <button className="px-10 py-4 bg-white dark:bg-blue-800/90 text-blue-800/90 dark:text-white rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-lg">
            Create Account & Claim Bonus
          </button>
        </div>
      </div>
    </section>
  );
}
