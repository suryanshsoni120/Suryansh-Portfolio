import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiAppwrite,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import Title from "../layouts/Title";
import Card from "./Card";

const Skills = (props) => {
  return (
    <section
      id="skills"
      className="w-full py-16 border-b-black dark:border-b-white"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="Skills" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-6 xl:gap-10">
        <Card title="HTML5" icon={<SiHtml5 />} />
        <Card title="CSS3" icon={<SiCss3 />} />
        <Card title="Tailwind CSS" icon={<SiTailwindcss />} />
        <Card title="JavaScript" icon={<SiJavascript />} />
        <Card title="TypeScript" icon={<SiTypescript />} />
        <Card title="ReactJS" icon={<SiReact />} />
        <Card title="NextJS" icon={<SiNextdotjs />} />
        <Card title="NodeJS" icon={<SiNodedotjs />} />
        <Card title="ExpressJS" icon={<SiExpress />} />
        <Card title="C++" icon={<SiCplusplus />} />
        <Card title="Python" icon={<SiPython />} />
        <Card title="Java" icon={<FaJava />} />
        <Card title="MySQL" icon={<GrMysql />} />
        <Card title="Appwrite" icon={<SiAppwrite />} />
        <Card title="Mongodb" icon={<SiMongodb />} />
        <Card title="Git" icon={<SiGit />} />
        <Card title="GitHub" icon={<SiGithub />} />
      </div>
    </section>
  );
};

export default Skills;
