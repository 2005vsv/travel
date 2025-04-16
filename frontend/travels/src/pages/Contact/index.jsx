import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4 py-12">
        <div className="bg-white shadow-xl rounded-lg p-10 max-w-3xl w-full">
          <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-4">
            Contact Me
          </h1>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
            Have questions or want to get in touch? Fill out the form below or
            reach me directly through the contact details provided. I look
            forward to hearing from you!
          </p>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row justify-around mb-10 space-y-6 sm:space-y-0 sm:space-x-6 text-gray-700">
            <div className="flex items-center space-x-3">
              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.518 4.553a1 1 0 01-.217 1.09l-2.2 2.2a11.042 11.042 0 005.516 5.516l2.2-2.2a1 1 0 011.09-.217l4.553 1.518a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z"
                />
              </svg>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              {/* Email Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m0 0l4-4m0 8l-4-4m12 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"
                />
              </svg>
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              {/* Location Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c4.418 0 8-3.582 8-8 0-3.866-3.134-7-7-7S5 9.134 5 13c0 4.418 3.582 8 7 8z"
                />
              </svg>
              <span>123 Main Street, Cityville</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                placeholder="Type your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
