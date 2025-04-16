import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../api/loginApp";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await LoginApi({ email, password });

    if (res?.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/");
    } else {
      alert("User not found. Redirecting to Sign Up...");
      navigate("/signup");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">
        {/* Left Side Image */}
        <div className="hidden md:flex md:w-1/2 h-full">
          <img
            src="https://media.istockphoto.com/id/1386241240/photo/concept-of-security-network-security-data-and-password-login-on-computer-protect-data-by.webp?a=1&b=1&s=612x612&w=0&k=20&c=hPk-xy0l220S8FPbY1FPF20XBFAU3RMaxMNKHTmc7y4="
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="flex items-center justify-center md:w-1/2 w-full px-6 py-10 bg-gradient-to-br from-white via-gray-50 to-blue-100">
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Welcome Back
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Login to access your account
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <button
                onClick={handleLogin}
                className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
              >
                Login
              </button>
            </div>

            <p className="mt-6 text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginForm;