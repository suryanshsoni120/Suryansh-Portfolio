import React from "react";
import { suryansh } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 py-20 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[500px] lgl:h-[550px] z-10"
        src={suryansh}
        alt="bannerImg"
      />
      <div className="absolute w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
