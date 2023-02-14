import React from "react";
// import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div className=" h-60 py-5 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      {/* <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group"> */}
      {/* <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group"> */}
      {/* <div className="h-72 overflow-y-hidden"> */}
      <div className="translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
        {/* <div className="flex h-full flex-col gap-10 translate-y-5 group-hover:translate-y-0 transition-transform duration-500"> */}
        <span className="text-8xl text-designColor flex justify-center ">
          {icon}
        </span>
        <div className="flex flex-col gap-10 py-4">
          <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300 flex justify-center">
            {title}
          </h2>
        </div>
        {/* <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Card;
