import React from "react";
import background from "../assets/Background.jpeg";

const Home = () => {
  return (
    <div
      className="w-full h-[700px] flex flex-row bg-cover bg-center bg-slate-400"
      style={{ backgroundImage: `url(${background})` }}
    >
     
      <div className="w-3/5 h-full flex items-center justify-start  text-white">
        <div>
          <h1 className="text-4xl font-bold mb-4"></h1>
          <p className="text-lg">
           
          </p>
        </div>
      </div>
      <div className="w-2/5 h-full"></div>
    </div>
  );
};

export default Home;
