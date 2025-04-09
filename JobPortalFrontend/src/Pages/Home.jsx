import React from "react";
import background from "../assets/Background.jpeg";
import { GoArrowRight } from "react-icons/go";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <div
        className="w-full h-[575px] flex flex-row bg-cover bg-center bg-slate-400 relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        

        <div className="w-1/2 h-full flex items-center justify-start text-white relative z-10">
          <div>
            <h1
              className="font-bold mb-4 text-black text-5xl m-8"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Welcome to <span className="text-blue-500">Career Horizon</span>
            </h1>

            <p className="text-black p-10 text-xl">
              Launch your career with top jobs and internships. Explore
              opportunities, connect with companies, and apply with ease—start
              today!
            </p>
            <button className="bg-slate-700 hover:bg-blue-700 text-white h-[70px] w-[350px] rounded-2xl text-lg transition duration-300 ease-in-out m-8 flex items-center justify-center gap-3">
              Explore Opportunities
              <GoArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>

            {/* Features Section */}
            <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Why Choose Career Horizon?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Personalized Matching', 'AI-Powered Tools', 'Expert Support'].map((feature, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="bg-blue-600 w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-white text-2xl">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{feature}</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
