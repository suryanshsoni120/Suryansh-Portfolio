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

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
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
