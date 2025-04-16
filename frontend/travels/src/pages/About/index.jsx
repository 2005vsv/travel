import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
// import { Footer } from "../../components/Footer";
export const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Welcome to our platform! We are dedicated to providing you with the
            best hotel booking experience. Our mission is to make your travel
            planning seamless, affordable, and enjoyable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be the world’s most trusted travel companion, connecting
                travelers with unforgettable experiences.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Our Values
              </h2>
              <p className="text-gray-600">
                Customer satisfaction, transparency, innovation, and
                sustainability guide everything we do.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Why Choose Us?
              </h2>
              <p className="text-gray-600">
                We offer competitive prices, verified reviews, and 24/7 customer
                support to ensure you have peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
