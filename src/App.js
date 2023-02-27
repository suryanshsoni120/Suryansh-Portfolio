import React, { useState, useEffect } from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
// import Footer from "./components/footer/Footer";
// import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
// import Resume from "./components/resume/Resume";
// import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  // handle switch theme
  const toggleTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <>
      <div className="w-full h-auto bg-bodyColor dark:bg-white text-lightText px-4">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Skills />
          <Projects />
          {/* <Resume /> */}
          {/* <Testimonial /> */}
          <Contact />
          {/* <Footer /> */}
          {/* <FooterBottom /> */}
        </div>
      </div>
    </>
  );
}

export default App;
