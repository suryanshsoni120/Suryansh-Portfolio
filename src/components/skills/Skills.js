import React from "react";
// import { AiFillAppstore } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import {
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
  SiSpring,
  SiSpringboot,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import Title from "../layouts/Title";
import Card from "./Card";

const Skills = (props) => {
  return (
    <section
      id="skills"
      className="w-full py-16 border-b-black dark:border-b-white"
    >
      {/* <Title title="Skills" des="What I Do" /> */}
      <div className="flex justify-center items-center text-center">
        <Title des="Skills" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 xl:gap-10">
        <Card
          title="HTML5"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiHtml5 />}
        />
        <Card
          title="CSS3"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiCss3 />}
        />
        <Card
          title="Tailwind CSS"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiTailwindcss />}
        />
        <Card
          title="JavaScript"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiJavascript />}
        />
        {/* <Card
          title="TypeScript"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiTypescript />}
        /> */}
        <Card
          title="ReactJS"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiReact />}
        />
        {/* <Card
          title="NextJS"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiNextdotjs />}
        /> */}
        <Card
          title="NodeJS"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiNodedotjs />}
        />
        {/* <Card
          title="React Native"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<TbBrandReactNative />}
        /> */}
        <Card
          title="C++"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiCplusplus />}
        />
        <Card
          title="Python"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiPython />}
        />
        <Card
          title="Java"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<FaJava />}
        />
        {/* <Card
          title="Spring"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiSpring />}
        />
        <Card
          title="Spring Boot"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiSpringboot />}
        /> */}
        <Card
          title="MySQL"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<GrMysql />}
        />
        {/* <Card
          title="Docker"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiDocker />}
        /> */}
        <Card
          title="Git"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiGit />}
        />
        <Card
          title="GitHub"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiGithub />}
        />
      </div>
    </section>
  );
};

export default Skills;
