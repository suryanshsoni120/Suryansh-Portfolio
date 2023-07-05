import React from "react";
import Title from "../layouts/Title";
import {
  newsdaily,
  texteditor,
  portfolio,
  blog,
  chat,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-black dark:border-b-white"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Javascript Journeys"
          des="This is my blog website. It is a single page application built using NextJS. It is a responsive website that can be viewed on any device. It is hosted on Vercel."
          src={blog}
          code_link="https://github.com/suryanshsoni120/React-Portfolio"
          demo_link="https://js-journeys.vercel.app"
        />
        <ProjectsCard
          title="ChitChat"
          des="This is a chat application built using ReactJS and Appwrite. It is a responsive website that can be viewed on any device. It is hosted on Vercel."
          src={chat}
          code_link="https://github.com/suryanshsoni120/React-Portfolio"
          demo_link="https://letschitchat.vercel.app"
        />
        <ProjectsCard
          title="Portfolio Website"
          des="This is my portfolio website. It is a single page application built using ReactJS. It is a responsive website that can be viewed on any device. It is hosted on Vercel."
          src={portfolio}
          code_link="https://github.com/suryanshsoni120/React-Portfolio"
          demo_link="https://suryanshsoniportfolio.vercel.app"
        />
        <ProjectsCard
          title="Text Editor"
          des="A text editor built using Java. It has features like cut, copy, paste, undo, redo, find, replace, select all, word wrap, font size, font style, font color, and background color."
          src={texteditor}
          code_link="https://github.com/suryanshsoni120/Text-Editor"
        />
        <ProjectsCard
          title="NewsDaily Website"
          des="React application that uses REST API to fetch latest news from newsapi.org. It has a search functionality that allows users to search for the latest news from different categories. "
          src={newsdaily}
          code_link="https://github.com/suryanshsoni120/NewsDaily-website"
        />
      </div>
    </section>
  );
};

export default Projects;
