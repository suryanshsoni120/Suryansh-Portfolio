import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] dark:bg-gradient-to-r dark:from-white dark:to-white p-4 lgl:p-8 rounded-lg shadow-shadowOne dark:shadow-slate-300 flex flex-col gap-8 justify-center">
      <img
        className="w-full h-60 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white dark:text-black">
          Suryansh Soni
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont dark:text-black">
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
  );
};

export default ContactLeft;
