import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Experience from "./Experience";

const Resume = (props) => {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="about" className="w-full py-20">
      <div className="flex justify-center items-center text-center">
        <Title des="About" />
      </div>
      <div>
        <ul className="w-full flex flex-cols-1 md:flex-cols-2 xl:flex-cols-2">
          <li
            onClick={() => setEducationData(true) & setExperienceData(false)}
            className={`${
              educationData
                ? "border-designColor"
                : "dark:border-slate-300 border-bodyColor"
            } w-full h-20 flex justify-center cursor-pointer items-center border-2 rounded-lg bg-black dark:bg-white dark:shadow-slate-300 bg-opacity-25 text-xl text-gray-300 dark:text-black hover:bg-opacity-40 duration-300`}
          >
            Education
          </li>
          <li
            onClick={() => setEducationData(false) & setExperienceData(true)}
            className={`${
              experienceData
                ? "border-designColor"
                : "dark:border-slate-300 border-bodyColor"
            } w-full h-20 flex justify-center cursor-pointer items-center border-2 rounded-lg bg-black dark:bg-white dark:shadow-slate-300 bg-opacity-25 text-xl text-gray-300 dark:text-black hover:bg-opacity-40 duration-300`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
