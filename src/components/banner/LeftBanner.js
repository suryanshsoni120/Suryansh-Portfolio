import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "an Open Source Contributor.",
      "a Full Stack Developer.",
      "a Java Developer.",
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
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 dark:text-black">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://www.instagram.com/surisoni10/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://twitter.com/surisoni10"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </span>
            <span className="bannerIcon">
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
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
