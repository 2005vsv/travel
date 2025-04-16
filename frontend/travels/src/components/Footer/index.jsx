export const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-white transition">
                    Company Info
                  </a>
                </li>
                <li>
                  <a href="/team" className="hover:text-white transition">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Services Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/booking" className="hover:text-white transition">
                    Booking
                  </a>
                </li>
                <li>
                  <a href="/destinations" className="hover:text-white transition">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="/special-offers" className="hover:text-white transition">
                    Special Offers
                  </a>
                </li>
                <li>
                  <a href="/gift-cards" className="hover:text-white transition">
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Support Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/help-center" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/cancellation" className="hover:text-white transition">
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Media Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                    aria-label="Facebook"
                  >
                    {/* Facebook SVG Icon */}
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.48 1.49-3.86 3.77-3.86 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.88h-2.33v6.99A10 10 0 0022 12z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                    aria-label="Twitter"
                  >
                    {/* Twitter SVG Icon */}
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.03 9.03 0 01-2.85 1.1 4.52 4.52 0 00-7.7 4.12A12.83 12.83 0 013 4.15a4.52 4.52 0 001.4 6.03 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.13A9.06 9.06 0 012 19.54a12.77 12.77 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.83 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                    aria-label="Instagram"
                  >
                    {/* Instagram SVG Icon */}
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1 1 0 100 2 1 1 0 000-2z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                    aria-label="LinkedIn"
                  >
                    {/* LinkedIn SVG Icon */}
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.6v1.7h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.5 4.45 5.75V20h-4v-5.25c0-1.25-.02-2.85-1.75-2.85-1.75 0-2.02 1.37-2.02 2.75V20h-4V8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom copyright */}
          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  