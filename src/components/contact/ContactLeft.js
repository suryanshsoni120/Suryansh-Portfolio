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
        {/* <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p> */}
        {/* <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p> */}
        {/* <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+968 97859628</span>
        </p> */}
        {/* <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">surisoni10@gmail.com</span>
        </p> */}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont dark:text-black">
          Find me on
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/suryanshsoni120"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
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
    </div>
  );
};

export default ContactLeft;
