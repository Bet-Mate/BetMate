import { Search, Wallet } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  const user = useSelector((state: any) => state.auth.user) || {};
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-[#181818] z-10 flex items-center justify-between px-6">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for Games..."
            className="w-full bg-[#2C2C2E] text-white rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>
      
      {isAuth ? (
        <div className="flex items-center gap-6">
          {/* Balance */}
          <div className="flex items-center gap-2 bg-[#2C2C2E] px-4 py-2 rounded-lg">
            <Wallet className="w-4 h-4 text-orange-500" />
            <span className="text-white font-medium">$1,234.56</span>
          </div>

          {/* Notifications */}
          {/* <button className="relative text-gray-400 hover:text-white transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-white text-xs flex items-center justify-center rounded-full">
              3
            </span>
          </button> */}

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=FF6B00&color=fff"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex items-center gap-2 cursor-pointer group">
              <div>
                <div className="text-sm font-medium text-white">{user?.username}</div>
                <div className="text-xs text-gray-400">{user?.email}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
            <button className="px-4 py-2 text-gray-300 hover:text-white hover:border-orange-500 transition-colors">
              Login
            </button>
          </Link>
          <Link to="/register" className="text-white">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors border-0">
              Register
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;