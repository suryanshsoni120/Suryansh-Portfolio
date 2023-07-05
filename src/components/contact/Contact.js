import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const form = useRef();

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      emailjs
        .sendForm(
          "service_w2o5wxe",
          "contact_form",
          form.current,
          "yNst1ZWTVi8DYl4vK"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setSuccessMsg(`Your Message has been sent Successfully!`);
      setErrMsg("");
      setUsername("");
      setEmail("");
      setMessage("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrMsg("");
      setSuccessMsg("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [errMsg, successMsg]);

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black dark:border-b-white"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="Contact" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] dark:bg-gradient-to-r dark:from-white dark:to-white flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne dark:shadow-slate-300">
            <form
              ref={form}
              onSubmit={handleSend}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
              {errMsg && (
                <p className="text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full flex flex-col gap-4">
                  <p className="text-sm text-gray-400 dark:text-black uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] dark:bg-slate-200 text-lightText dark:text-black px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`}
                    type="text"
                    name="user_name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 dark:text-black uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] dark:bg-slate-200 text-lightText dark:text-black px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`}
                  type="email"
                  name="user_email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 dark:text-black uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] dark:bg-slate-200 text-lightText dark:text-black px-4 py-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300 resize-none`}
                  cols="30"
                  rows="3"
                  name="message"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] dark:bg-slate-200 rounded-lg text-base text-gray-400 dark:text-black tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full py-10">
          <p className="text-center text-gray-500 text-base">
            © 2022. All rights reserved by Suryansh Soni
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
