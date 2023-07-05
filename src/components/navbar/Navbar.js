import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { icon } from "../../assets/index";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor dark:bg-white mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 dark:border-b-slate-300">
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
          activeClass="active"
          to="home"
        >
          <img src={icon} alt="icon" className="cursor-pointer" />
        </Link>
        <div>
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            <li className="text-base font-normal text-gray-400 dark:text-slate-400 tracking-wide cursor-pointer hover:text-designColor dark:hover:text-designColor duration-300">
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                activeClass="active"
                to="home"
              >
                Home
              </Link>
            </li>
            <li className="text-base font-normal text-gray-400 dark:text-slate-400 tracking-wide cursor-pointer hover:text-designColor dark:hover:text-designColor duration-300">
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                activeClass="active"
                to="about"
              >
                About
              </Link>
            </li>
            <li className="text-base font-normal text-gray-400 dark:text-slate-400 tracking-wide cursor-pointer hover:text-designColor dark:hover:text-designColor duration-300">
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                activeClass="active"
                to="skills"
              >
                Skills
              </Link>
            </li>
            <li className="text-base font-normal text-gray-400 dark:text-slate-400 tracking-wide cursor-pointer hover:text-designColor dark:hover:text-designColor duration-300">
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                activeClass="active"
                to="projects"
              >
                Projects
              </Link>
            </li>
            <li className="text-base font-normal text-gray-400 dark:text-slate-400 tracking-wide cursor-pointer hover:text-designColor dark:hover:text-designColor duration-300">
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                activeClass="active"
                to="contact"
              >
                Contact
              </Link>
            </li>
            <span onClick={props.toggleTheme}>
              {props.theme === "light" ? (
                <MdOutlineLightMode
                  size={28}
                  className="hover:text-designColor duration-300 cursor-pointer"
                />
              ) : (
                <MdOutlineDarkMode
                  size={28}
                  className="hover:text-designColor duration-300 cursor-pointer"
                />
              )}
            </span>
          </ul>

          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-bodyColor dark:bg-white w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-bodyColor dark:bg-white p-4 scrollbar-hide">
              <div className="flex flex-col gap-8 py-2 relative">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  activeClass="active"
                  to="home"
                >
                  <img
                    src={icon}
                    alt="icon"
                    className="w-22 py-2 cursor-pointer"
                  />
                </Link>
                <ul className="flex flex-col gap-4">
                  <li className="text-base font-normal text-gray-400 dark:text-slate-400 tracking-wide cursor-pointer hover:text-designColor dark:hover:text-designColor duration-300">
                    <Link
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="nav-link"
                      activeClass="active"
                      to="home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-base font-normal text-gray-400 dark:text-slate-400 tracking-wide cursor-pointer hover:text-designColor dark:hover:text-designColor duration-300">
                    <Link
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="nav-link"
                      activeClass="active"
                      to="about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="text-base font-normal text-gray-400 dark:text-slate-400 tracking-wide cursor-pointer hover:text-designColor dark:hover:text-designColor duration-300">
                    <Link
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="nav-link"
                      activeClass="active"
                      to="skills"
                    >
                      Skills
                    </Link>
                  </li>
                  <li className="text-base font-normal text-gray-400 dark:text-slate-400 tracking-wide cursor-pointer hover:text-designColor dark:hover:text-designColor duration-300">
                    <Link
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="nav-link"
                      activeClass="active"
                      to="projects"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="text-base font-normal text-gray-400 dark:text-slate-400 tracking-wide cursor-pointer hover:text-designColor dark:hover:text-designColor duration-300">
                    <Link
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="nav-link"
                      activeClass="active"
                      to="contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="flex flex-col gap-4">
                  <h2 className="text-base uppercase font-titleFont mb-4 dark:text-black">
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
                <MdClose />
                <span
                  className="absolute top-4 right-12 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                  onClick={props.toggleTheme}
                >
                  {props.theme === "light" ? (
                    <MdOutlineLightMode
                      size={28}
                      className="hover:text-designColor duration-300 cursor-pointer"
                    />
                  ) : (
                    <MdOutlineDarkMode
                      size={28}
                      className="hover:text-designColor duration-300 cursor-pointer"
                    />
                  )}
                </span>
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                >
                  <MdClose />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
