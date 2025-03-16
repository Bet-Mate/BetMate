import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
    </header>
  );
};

export default Navbar;