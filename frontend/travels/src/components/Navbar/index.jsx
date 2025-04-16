import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ setsearch, search, isDarkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

<<<<<<< HEAD
=======
  // Set username from localStorage if available
>>>>>>> 356105025c4f41283cee39fffb106be9aad9194b
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.name) {
      setUsername(storedUser.name);
    }
  }, []);

<<<<<<< HEAD
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUsername(null);
    navigate("/");
    window.location.reload(); // reload to re-render the navbar properly
=======
  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    localStorage.removeItem("user"); // Remove user data
    setUsername(null); // Clear the username in the state
    navigate("/"); // Redirect to home page
    window.location.reload(); // Optional: reload page to re-render the navbar
>>>>>>> 356105025c4f41283cee39fffb106be9aad9194b
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-lg z-50 transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-900 bg-opacity-90 backdrop-blur-lg"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
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

        {/* Search */}
        <div className="flex-1 max-w-md mx-6 hidden sm:block">
          <input
            type="text"
            placeholder="Search for destinations..."
            onChange={(e) => setsearch(e.target.value.toLowerCase())}
            value={search}
            className={`w-full rounded-full py-2 pl-4 pr-4 ${
              isDarkMode
                ? "text-gray-100 placeholder-gray-400 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                : "text-gray-800 placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            }`}
          />
        </div>

        {/* Navigation Buttons */}
        <nav
          className={`hidden md:flex items-center gap-6 font-semibold select-none ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/contact")}>Contact</button>

          {username ? (
            <>
              <span className="font-bold text-black">
                {username.length > 12
                  ? username.slice(0, 12) + "..."
                  : username}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/signup")}>Sign Up</button>
              <button
                className="p-2 rounded-full hover:bg-blue-400"
                onClick={() => navigate("/login")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  fill="currentcolor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </button>
            </>
          )}

          {/* Dark mode */}
          <button
            aria-label="Toggle theme"
            onClick={toggleDarkMode}
            className={`ml-3 p-2 rounded-full ${
              isDarkMode ? "bg-indigo-600" : "bg-blue-400"
            }`}
          >
<<<<<<< HEAD
            {isDarkMode ? "🌙" : "☀️"}
=======
            {isDarkMode ? "🌙" : "☀"}
>>>>>>> 356105025c4f41283cee39fffb106be9aad9194b
          </button>
        </nav>
      </div>
    </header>
  );
};
