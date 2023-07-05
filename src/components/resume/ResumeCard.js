import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bg-black bg-opacity-40 mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne dark:shadow-slate-300 bg-gradient-to-r from-bodyColor to-[#202327] dark:bg-gradient-to-r dark:from-white dark:to-white group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] dark:hover:bg-gradient-to-b dark:hover:from-slate-300 dark:hover:to-white transition-colors duration-100">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-400 group-hover:text-white dark:text-gray-600 dark:group-hover:text-black duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white dark:text-gray-600 dark:group-hover:text-black duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black dark:bg-white dark:shadow-slate-300 bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 dark:text-gray-600 dark:group-hover:text-black duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
