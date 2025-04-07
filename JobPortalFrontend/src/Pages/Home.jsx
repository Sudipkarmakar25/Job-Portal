import React from "react";
import background from "../assets/Background.jpeg";
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div
      className="w-full h-[700px] flex flex-row bg-cover bg-center bg-slate-400"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-1/2 h-full flex items-center justify-start text-white">
        <div>
          <h1 className="font-bold mb-4 text-black text-5xl m-8">
            Welcome to <span className="text-blue-500">Carrier Horizon</span>
          </h1>
          <p className=" text-black p-10 text-xl">
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
  );
};

export default Home;
