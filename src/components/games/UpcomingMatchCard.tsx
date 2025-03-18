export default function MatchCardUpcoming() {
  return (
    <>
      <div className="p-4 rounded-lg bg-[#1e1e1e] text-white border border-gray-800">
        {/* Match header with league info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src="https://soccerwizdom.com/wp-content/uploads/2024/11/fgdfhfd.png"
              alt="Serie A"
              width={40}
              height={40}
              className="mr-2 rounded-full"
            />
            <span className="text-sm font-medium">Serie A</span>
          </div>
        </div>

        {/* Teams and time */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center flex-1">
            <img
              src="https://logowik.com/content/uploads/images/651_juventus_2017_logo.jpg"
              alt="Juventus"
              width={32}
              height={32}
              className="mr-3 rounded-full"
            />
            <span className="font-medium">Juventus</span>
          </div>

          <div className="px-3 py-1 text-sm font-medium text-center">19:45</div>

          <div className="flex items-center justify-end flex-1">
            <span className="font-medium">AC Milan</span>
            <img
              src="https://seeklogo.com/images/A/ac-milan-logo-6C6FFEFCF1-seeklogo.com.png"
              alt="AC Milan"
              width={32}
              height={32}
              className="ml-3 rounded-full"
            />
          </div>
        </div>

        {/* Betting odds */}
        <div className="grid grid-cols-3 gap-2">
          <button className="p-3 text-center rounded bg-[#252525] hover:bg-[#303030]">
            <div className="text-xs text-gray-400">1</div>
            <div className="text-lg font-bold">2.4</div>
          </button>
          <button className="p-3 text-center rounded bg-[#252525] hover:bg-[#303030]">
            <div className="text-xs text-gray-400">X</div>
            <div className="text-lg font-bold">3.1</div>
          </button>
          <button className="p-3 text-center rounded bg-[#252525] hover:bg-[#303030]">
            <div className="text-xs text-gray-400">2</div>
            <div className="text-lg font-bold">2.9</div>
          </button>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-[#1e1e1e] text-white border border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqp1HnlZ5IYdv7IBaBXAZfqN5kClmqSFM9g&s"
              alt="Champions League"
              width={40}
              height={40}
              className="mr-2 rounded-full"
            />
            <span className="text-sm font-medium">Champions League</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center flex-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg/1024px-Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg.png"
              alt="Bayern Munich"
              width={32}
              height={32}
              className="mr-3 rounded-full"
            />
            <span className="font-medium">Bayern Munich</span>
          </div>

          <div className="px-3 py-1 text-sm font-medium text-center">20:00</div>

          <div className="flex items-center justify-end flex-1">
            <span className="font-medium">PSG</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/2048px-Paris_Saint-Germain_Logo.svg.png"
              alt="PSG"
              width={32}
              height={32}
              className="ml-3 rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <button className="p-3 text-center rounded bg-[#252525] hover:bg-[#303030]">
            <div className="text-xs text-gray-400">1</div>
            <div className="text-lg font-bold">1.8</div>
          </button>
          <button className="p-3 text-center rounded bg-[#252525] hover:bg-[#303030]">
            <div className="text-xs text-gray-400">X</div>
            <div className="text-lg font-bold">3.5</div>
          </button>
          <button className="p-3 text-center rounded bg-[#252525] hover:bg-[#303030]">
            <div className="text-xs text-gray-400">2</div>
            <div className="text-lg font-bold">4.2</div>
          </button>
        </div>
      </div>
    </>
  );
}
