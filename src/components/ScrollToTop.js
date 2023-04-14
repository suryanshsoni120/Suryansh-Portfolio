import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [scroll, setScroll] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let height = 850;
      const scrollCheck =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollCheck > height) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    scroll && (
      <div
        // className="fixed cursor-pointer bottom-20 right-10 p-4 rounded-full bg-black dark:bg-white bg-opacity-25 text-gray-200 dark:text-black text-xl inline-flex items-center justify-center shadow-shadowOne dark:shadow-slate-300 hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor dark:hover:text-designColor duration-300"
        className="fixed cursor-pointer bg-bodyColor dark:bg-white bottom-20 right-10 p-4 rounded-full shadow-lg text-white dark:text-bodyColor hover:bg-bodyColor dark:hover:bg-white hover:text-designColor dark:hover:text-designColor transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
        onClick={scrollToTop}
      >
        <FiArrowUp size={28} />
      </div>
    )
  );
};

export default ScrollToTop;
