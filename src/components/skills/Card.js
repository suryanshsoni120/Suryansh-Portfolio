import React from "react";

const Card = ({ title, des, icon }) => {
  return (
    <div className=" h-50 py-5 rounded-lg shadow-shadowOne dark:shadow-slate-300 bg-gradient-to-r from-bodyColor to-[#202327] dark:bg-gradient-to-r dark:from-white dark:to-white group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] dark:hover:bg-gradient-to-b dark:hover:from-slate-300 dark:hover:to-white transition-colors duration-100 group">
      <div className="translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-8xl text-designColor flex justify-center ">
          {icon}
        </span>
        <div className="flex flex-col gap-10 py-4">
          <h2 className="text-xl md:text-2xl text-center font-titleFont font-bold text-gray-300 dark:text-black flex justify-center">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
