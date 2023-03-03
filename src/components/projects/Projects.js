import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-black dark:border-b-white"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
        {/* <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="NewsDaily Website"
          des="React application that uses REST API to fetch latest news from newsapi.org. It has a search functionality that allows users to search for the latest news from different categories. "
          // des="React application that uses REST API to fetch latest news from newsapi.org. It is a simple website that shows the latest news from different categories. It also has a search functionality that allows users to search for news from different categories. "
          src={projectTwo}
          code_link="https://github.com/suryanshsoni120/NewsDaily-website"
        />
        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}
        <ProjectsCard
          title="Portfolio Website"
          des="This is my portfolio website. It is a single page application built using React. It is a responsive website that can be viewed on any device. It is hosted on Vercel."
          src={projectOne}
          code_link="https://github.com/suryanshsoni120/React-Portfolio"
          demo_link="https://suryansh-soni-portfolio.vercel.app/"
        />
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
};

export default Projects;
