import React, { useState } from "react";
import { SignUpApi } from "../../api/signupApi";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

// You can use any royalty-free image or your own asset
const SIGNUP_IMAGE_URL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const res = await SignUpApi(formData);
    if (res?.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/");
    } else {
      alert("Sign up failed.");
      console.error(res);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x -z-10"></div>

        <div className="flex flex-col md:flex-row bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-4xl w-full mx-4 my-8 overflow-hidden z-10">
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex items-center justify-center bg-gradient-to-tr from-purple-100 to-pink-100 p-6">
            <img
              src={SIGNUP_IMAGE_URL}
              alt="Sign up illustration"
              className="rounded-lg shadow-lg object-cover w-full h-64 md:h-96"
              style={{ maxWidth: 350 }}
            />
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Create an Account
            </h2>

            {/* Name Input */}
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Your full name"
              onChange={handleChange}
              value={formData.name}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            {/* Email Input */}
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              onChange={handleChange}
              value={formData.email}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            {/* Password Input */}
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={formData.password}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            {/* Confirm Password Input */}
            <label htmlFor="confirmpassword" className="block text-gray-700 font-semibold mb-1">
              Confirm Password
            </label>
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              placeholder="Re-enter password"
              onChange={handleChange}
              value={formData.confirmpassword}
              className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            {/* Sign Up Button */}
            <button
              onClick={handleSignup}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Sign Up
            </button>

            {/* Login Prompt */}
            <div className="mt-4 text-center text-gray-700 text-sm">
              Already have an account?{" "}
              <button
                onClick={handleLoginRedirect}
                className="text-purple-600 hover:underline font-semibold"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Custom styles for animated gradient */}
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

export default SignUpForm;
