import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

import LogoLight from "../assets/class-echo-logo-light.png";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ["Features", "About", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      {/* Pill Navbar Container */}
      <div className="flex items-center justify-between px-6 py-3 bg-black/90 border border-amber-50 text-white rounded-full shadow-lg backdrop-blur-sm">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src={LogoLight} alt="Class Echo" className="h-10 w-auto" />
          <h6 className="font-semibold text-lg">Class Echo</h6>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              {item}
            </a>
          ))}

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-white">
            {theme === "dark" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          {/* Login / Signup */}
          <button className="px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-sm transition-colors">
            Login
          </button>
          <button className="px-4 py-1 bg-white text-black hover:bg-gray-200 rounded-full text-sm transition-colors">
            Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 px-6 py-4 bg-black/90 text-white rounded-2xl shadow-lg backdrop-blur-sm"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}

              <div className="flex justify-center">
                {/* Theme Toggle */}
                <button onClick={toggleTheme} className="text-white">
                  {theme === "dark" ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Login / Signup */}
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-sm transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-full text-sm transition-colors">
                Signup
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
