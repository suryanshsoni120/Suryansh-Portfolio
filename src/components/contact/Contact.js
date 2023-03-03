import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = (props) => {
  const [username, setUsername] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // const service_id = process.env.REACT_APP_SERVICE_ID;
  // const template_id = process.env.REACT_APP_TEMPLATE_ID;
  // const user_id = process.env.REACT_APP_USER_ID;

  const form = useRef();

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

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
        {/* <Title title="CONTACT" des="Contact With Me" /> */}
        <Title des="Contact With Me" />
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
                    } contactInput`}
                    type="text"
                    name="user_name"
                  />
                </div>
                {/* <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div> */}
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
                  } contactInput`}
                  type="email"
                  name="user_email"
                />
              </div>
              {/* <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div> */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 dark:text-black uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
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
          {/* <p className="text-center text-gray-500 text-base">
            © 2022. All rights reserved by Suryansh Soni
          </p> */}
          <p className="text-center text-xl text-gray-500">
            Made With ❤️ By Suryansh Soni
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
