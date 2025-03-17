import { BadgeDollarSign, History, Home, LogOut, Volleyball } from "lucide-react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const guestMenu = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Volleyball, label: "Games", path: "/games" },
];

const authMenu = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Volleyball, label: "Games", path: "/games" },
  { icon: Home, label: "Profile", path: "/profile" },
  { icon: History, label: "Betting History", path: "/my-bets" },
  { icon: BadgeDollarSign, label: "My Transactions", path: "/deposit" },
  { icon: LogOut, label: "Logout", path: "/logout" },
];

const Sidebar = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  const menuItems = isAuth ? authMenu : guestMenu;
  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-[#181818] text-gray-400">
      <div className="p-4">
        <div className="my-4 self-center">
          <Link to="/">
            <img
              src="./BetMate-Logo.png"
              className="hidden md:block w-40 "
              alt="Logo"
            />
          </Link>
          <Link to="/">
            <img
              src="./adaptive-icon.png"
              className="block md:hidden w-14"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.label}>
              <button
                key={item.label}
                className={clsx(
                  "w-full text-white flex border-0 items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors hover:bg-orange-500/10 hover:text-orange-500"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xs font-medium text-gray-500 uppercase px-3 mb-3">
            Popular Leagues
          </h3>
          <div className="space-y-1">
            {[
              {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-sports.io/football/leagues/39.png",
              },
              {
                name: "La Liga",
                country: "Spain",
                logo: "https://media.api-sports.io/football/leagues/140.png",
              },
              {
                name: "Champions League",
                country: "Europe",
                logo: "https://media.api-sports.io/football/leagues/2.png",
              },
              {
                name: "Serie A",
                country: "Italy",
                logo: "https://media.api-sports.io/football/leagues/135.png",
              },
            ].map((league) => (
              <button
                key={league.name}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-[#2C2C2E]"
              >
                <img
                  src={league.logo}
                  alt={league.name}
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <div className="text-sm text-gray-300">{league.name}</div>
                  <div className="text-xs text-gray-500">{league.country}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-[#2C2C2E] rounded-lg p-4">
            <h4 className="text-white text-sm font-medium mb-2">
              Join BetMate Today
            </h4>
            <p className="text-gray-400 text-sm mb-3">
              Get 100% bonus on your first deposit!
            </p>
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
