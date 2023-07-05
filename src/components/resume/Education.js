import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Electronics & Telecommunication"
            subTitle="KJ Somaiya College of Engineering (2019 - 2023)"
            result="73.94%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="KPC Junior College of Science & Commerce (2017 - 2019)"
            result="69.38%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Primary School Education"
            subTitle="Apeejay School (2016-2017)"
            result="80.6%"
            des="Primary education, is typically the first stage of formal education, coming after preschool and before secondary school."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
