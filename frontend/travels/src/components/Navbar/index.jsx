import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ setsearch, search, isDarkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-lg z-50 transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-900 bg-opacity-90 backdrop-blur-lg"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and Brand */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/1983/1983854.png"
            alt="Holidaysadda Logo"
            className="w-10 h-10"
          />
          <h1
            className={`text-2xl font-extrabold select-none ${
              isDarkMode ? "text-white" : "text-blue-600"
            }`}
          >
            Holidaysadda
          </h1>
        </div>

        {/* Search Bar (hidden on xs, shown on sm+) */}
        <div className="flex-1 max-w-md mx-6 hidden sm:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for destinations..."
              onChange={(e) => setsearch(e.target.value.toLowerCase())}
              value={search}
              className={`w-full rounded-full py-2 pl-12 pr-4 ${
                isDarkMode
                  ? "text-gray-100 placeholder-gray-400 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  : "text-gray-800 placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              }`}
              aria-label="Search destinations"
            />
            <div
              className={`absolute inset-y-0 left-4 flex items-center pointer-events-none ${
                isDarkMode ? "text-indigo-400" : "text-gray-400"
              }`}
            >
              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center gap-8 font-semibold select-none ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          <button
            onClick={() => navigate("/")}
            className={`hover:text-indigo-300 transition-colors ${
              isDarkMode ? "" : "hover:text-blue-600"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => navigate("/about")}
            className={`hover:text-indigo-300 transition-colors ${
              isDarkMode ? "" : "hover:text-blue-600"
            }`}
          >
            About
          </button>
          <button
            onClick={() => navigate("/contact")}
            className={`hover:text-indigo-300 transition-colors ${
              isDarkMode ? "" : "hover:text-blue-600"
            }`}
          >
            Contact Us
          </button>

          {/* Sign Up Button */}
          <button
            onClick={() => navigate("/signup")}
            className={`hover:text-indigo-300 transition-colors ${
              isDarkMode ? "" : "hover:text-blue-600"
            }`}
          >
            Sign Up
          </button>

          {/* User Profile Icon */}
          <button
            aria-label="User profile"
            className={`ml-3 p-2 rounded-full ${
              isDarkMode ? "hover:bg-indigo-600" : "hover:bg-blue-400"
            } transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </button>

          {/* Dark Mode Toggle Button */}
          <button
            aria-label="Toggle theme"
            className={`ml-3 p-2 rounded-full ${
              isDarkMode ? "bg-indigo-600" : "bg-blue-400"
            } transition-colors`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 3v1m6 9h2.1M21 19h-2.1M4 19h2.1M3 12h18M5 3v2M19 4v2m1 5v2M4 12h16" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav
            className={`md:hidden ${
              isDarkMode
                ? "bg-gray-800 bg-opacity-95"
                : "bg-gray-100 shadow-md"
            } px-6 py-6 space-y-4 font-semibold rounded-b-lg shadow-lg ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <button
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className={`block w-full text-left ${
                isDarkMode ? "hover:text-indigo-300" : "hover:text-blue-600"
              } transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("/about");
                setMenuOpen(false);
              }}
              className={`block w-full text-left ${
                isDarkMode ? "hover:text-indigo-300" : "hover:text-blue-600"
              } transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => {
                navigate("/contact");
                setMenuOpen(false);
              }}
              className={`block w-full text-left ${
                isDarkMode ? "hover:text-indigo-300" : "hover:text-blue-600"
              } transition-colors`}
            >
              Contact Us
            </button>

            {/* Sign Up Button */}
            <button
              onClick={() => {
                navigate("/signup");
                setMenuOpen(false);
              }}
              className={`block w-full text-left ${
                isDarkMode ? "hover:text-indigo-300" : "hover:text-blue-600"
              } transition-colors`}
            >
              Sign Up
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
