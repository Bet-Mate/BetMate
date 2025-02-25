"use client";

import { useState, useEffect } from "react";
import {
  DoorOpen,
  Gem,
  Home,
  LogIn,
  LogOut,
  Menu,
  Moon,
  Sun,
  TvMinimalPlay,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-filter backdrop-blur-xl bg-gradient-to-b from-blue-800/60 to-blue-950/30 dark:from-black/60 dark:to-black/30 shadow-lg z-50">
      <div className="max-w-8xl mx-auto md:mx-16 px-4">
        <div className="flex items-center gap-4 justify-between h-24">
          <div className="">
            <Link to="/">
              <img
                src="./BetMate-Logo.png"
                className="hidden md:block w-48 "
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
          <div className="w-fit md:w-full flex justify-between">
            <div className="hidden md:flex  items-center space-x-8">
              <NavLink to="/" icon={<Home className="mr-2 h-4 w-4" />}>
                Home
              </NavLink>
              <NavLink to="/" icon={<TvMinimalPlay className="mr-2 h-4 w-4" />}>
                Live Betting
              </NavLink>
              <NavLink to="/" icon={<Gem className="mr-2 h-4 w-4" />}>
                Promotions
              </NavLink>
              {isAuth && (
                <>
                  <NavLink
                    to="/profile"
                    icon={<User className="mr-2 h-4 w-4" />}
                  >
                    Account
                  </NavLink>
                </>
              )}
            </div>
            <div className="w-fit flex gap-4">
              {/* Auth Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                {!isAuth ? (
                  <>
                    <NavLink
                      to="/login"
                      icon={<LogIn className="mr-2 h-4 w-4" />}
                    >
                      Login
                    </NavLink>{" "}
                    <NavLink
                      to="/register"
                      icon={<DoorOpen className="mr-2 h-4 w-4" />}
                    >
                      Register
                    </NavLink>{" "}
                  </>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => console.log("Logout")}
                    className="rounded-full bg-white/40 dark:bg-blue-700/40 text-gray-800 dark:text-white hover:bg-white/60 dark:hover:bg-blue-600/60 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 transition-all duration-300 ease-in-out backdrop-blur-md"
                  >
                    <LogOut className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                )}
              </div>
              {/* Navigation Buttons */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  className="rounded-full bg-white/40 dark:bg-blue-700/40 text-gray-800 dark:text-white hover:bg-white/60 dark:hover:bg-blue-600/60 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 transition-all duration-300 ease-in-out backdrop-blur-md"
                >
                  {darkMode ? (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  )}
                  <span className="sr-only">
                    {darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  </span>
                </Button>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="md:hidden rounded-full bg-white/40 dark:bg-blue-700/40 text-gray-800 dark:text-white hover:bg-white/60 dark:hover:bg-blue-600/60 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 transition-all duration-300 ease-in-out backdrop-blur-md"
                    >
                      <Menu className="h-[1.2rem] w-[1.2rem]" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[300px] bg-transparent sm:w-[400px]"
                  >
                    <nav className="flex flex-col space-y-4 mt-8">
                        <NavLink
                          to="/"
                          icon={<Home className="mr-2 h-4 w-4" />}
                        >
                          Home
                        </NavLink>
                        <NavLink
                          to="/"
                          icon={<TvMinimalPlay className="mr-2 h-4 w-4" />}
                        >
                          Live Betting
                        </NavLink>
                        <NavLink to="/" icon={<Gem className="mr-2 h-4 w-4" />}>
                          Promotions
                        </NavLink>
                        {isAuth && (
                          <>
                            <NavLink
                              to="/profile"
                              icon={<User className="mr-2 h-4 w-4" />}
                            >
                              Account
                            </NavLink>
                          </>
                        )}
                      {!isAuth ? (
                        <>
                          <NavLink
                            to="/login"
                            icon={<LogIn className="mr-2 h-4 w-4" />}
                          >
                            Login
                          </NavLink>{" "}
                          <NavLink
                            to="/register"
                            icon={<DoorOpen className="mr-2 h-4 w-4" />}
                          >
                            Register
                          </NavLink>{" "}
                        </>
                      ) : (
                        <Button
                          onClick={() => console.log("Logout")}
                          variant="outline"
                          className="text-white dark:text-white border-blue-300 dark:border-blue-600 hover:bg-white/40 dark:hover:bg-blue-700/40 transition-all duration-300 ease-in-out backdrop-blur-md"
                        >
                          {/* <LogOut /> */}
                          Logout
                        </Button>
                      )}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  to,
  children,
  icon,
}: {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="text-white dark:text-white hover:text-blue-300 dark:hover:text-gray-300 transition-colors duration-300 relative group"
    >
      <span className="flex items-center">
        {icon}
        {children}
      </span>
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-800 dark:bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
    </Link>
  );
}
