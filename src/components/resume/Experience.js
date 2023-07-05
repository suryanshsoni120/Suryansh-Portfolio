import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Open Source Contributor"
            subTitle="GirlScript Summer of Code - (May 2023 - Present)"
            result="Remote"
            des="GirlScript Summer of Code is the 3 month long Open Source program during summers conducted by GirlScript Foundation, started in 2018, with an aim to help beginners get started with Open Source Development while encouraging diversity."
          />
          <ResumeCard
            title="Open Source Contributor"
            subTitle="Socail Summer of Code - (June 2023 - Present)"
            result="Remote"
            des="Social Summer of Code is a program by Open Source Diversity e.V. to support the Open Source community. It is a 3 month long program during summers conducted by Open Source Diversity e.V., started in 2021, with an aim to help beginners get started with Open Source Development while encouraging diversity."
          />
          <ResumeCard
            title="Web Developer Intern"
            subTitle="Levyne - (Feb 2021 - Aug 2021)"
            result="Mumbai"
            des="I worked as a web developer making different pages in order to develop the website and also to make the user interface better."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
