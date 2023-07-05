import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "an Open Source Contributor.",
      "a Full Stack Developer.",
      // "a Java Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal dark:text-black">
          WELCOME TO MY PORTFOLIO
        </h4>
        <h1 className="text-6xl font-bold text-white dark:text-black">
          Hi, I'm <span className="text-designColor capitalize">Suryansh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white dark:text-black">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide dark:text-black">
          I am a Full Stack Developer with a passion for learning new
          technologies and building scalable applications. Dedicated,
          knowledgeable student having technological expertise, well-developed
          communication skills and ability to perform well in teams.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 dark:text-black">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="w-16 h-16 bg-black dark:bg-white bg-opacity-25 text-gray-200 dark:text-black text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne dark:shadow-slate-300 hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor dark:hover:text-designColor cursor-pointer duration-300">
              <a
                href="https://github.com/suryanshsoni120"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </span>
            <span className="w-16 h-16 bg-black dark:bg-white bg-opacity-25 text-gray-200 dark:text-black text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne dark:shadow-slate-300 hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor dark:hover:text-designColor cursor-pointer duration-300">
              <a
                href="https://twitter.com/surisoni10"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </span>
            <span className="w-16 h-16 bg-black dark:bg-white bg-opacity-25 text-gray-200 dark:text-black text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne dark:shadow-slate-300 hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor dark:hover:text-designColor cursor-pointer duration-300">
              <a
                href="https://www.linkedin.com/in/surisoni/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
