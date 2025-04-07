import React from "react";
import background from "../assets/Background.jpeg";

const Notifications = () => {
  return (
    <>
      <div
        className="w-full h-[575px] flex flex-row bg-cover bg-center bg-slate-400 relative"
        style={{ backgroundImage: `url(${background})` }}
      >
      </div>
    </>
  );
};

export default Notifications;