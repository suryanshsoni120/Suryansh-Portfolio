import React from "react";
// import { AiFillAppstore } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Skills = (props) => {
  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      {/* <Title title="Skills" des="What I Do" /> */}
      <div className="flex justify-center items-center text-center">
        <Title des="Skills" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-20">
        {/* <Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
        /> */}
        <Card
          title="HTML5"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          icon={<SiHtml5 />}
        />
        <Card
          title="Tailwind CSS"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiTailwindcss />}
        />
        <Card
          title="JavaScript"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiJavascript />}
        />
        <Card
          title="ReactJS"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiReact />}
        />
        <Card
          title="NextJS"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiNextdotjs />}
        />
        <Card
          title="Java"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaJava />}
        />
      </div>
    </section>
  );
};

export default Skills;
