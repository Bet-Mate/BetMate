import "../App.css";
import { Zap } from "lucide-react";
function Home() {

  return (
    <>
      <div>
        <img src="https://img.pikbest.com/back_our/bg/20200727/bg/8fad558c5d474_372331.jpg!w700wp" alt="bg" className="w-screen h-screen relative" />
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto h-full flex items-center px-6">
            <div>
              <h1 className="text-4xl text-white md:text-7xl font-autour font-bold mb-4">
                Welcome to BetMate
              </h1>
              <p className="text-6xl text-gray-500 font-niconne mb-6">
                Your trusted partner in every wager
              </p>
              <button className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Betting Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
