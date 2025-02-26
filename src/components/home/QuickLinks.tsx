import { Clock, Star, TrendingUp, Trophy } from "lucide-react";

export default function QuickLinks () {
    return (
        <div className="bg-[#181818] dark:bg-black py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-900/90 dark:bg-[#181818] p-4 rounded-lg flex items-center space-x-3 cursor-pointer hover:bg-gray-700 transition">
              <TrendingUp className="w-6 h-6 text-white dark:text-blue-900/90" />
              <span className="text-white">Popular</span>
            </div>
            <div className="bg-blue-900/90 dark:bg-[#181818] p-4 rounded-lg flex items-center space-x-3 cursor-pointer hover:bg-gray-700 transition">
              <Clock className="w-6 h-6 text-white dark:text-blue-900/90" />
              <span className="text-white">Live Matches</span>
            </div>
            <div className="bg-blue-900/90 dark:bg-[#181818] p-4 rounded-lg flex items-center space-x-3 cursor-pointer hover:bg-gray-700 transition">
              <Star className="w-6 h-6 text-white dark:text-blue-900/90" />
              <span className="text-white">Featured</span>
            </div>
            <div className="bg-blue-900/90 dark:bg-[#181818] p-4 rounded-lg flex items-center space-x-3 cursor-pointer hover:bg-gray-700 transition">
              <Trophy className="w-6 h-6 text-white dark:text-blue-900/90" />
              <span className="text-white">Tournaments</span>
            </div>
          </div>
        </div>
      </div>
    )
}