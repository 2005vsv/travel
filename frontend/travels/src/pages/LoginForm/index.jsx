import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { LoginApi } from "../../api/loginApi"; // Adjust path if needed
import { LoginApi } from "../../api/loginApp";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await LoginApi({ email, password });

    // If login is successful
    if (res?.token) {
      localStorage.setItem("token", res.token);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("User not found. Redirecting to Sign Up...");
      navigate("/signup");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 animate-gradient-x -z-10"></div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full z-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

          <label className="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <label className="block text-gray-700 font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
      <Footer />

      <style>
        {`
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% center;
            }
            50% {
              background-position: 100% center;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 15s ease infinite;
          }
        `}
      </style>
    </>
  );
};

export default LoginForm;
