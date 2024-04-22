/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Modal from "./modal";
import { RSVP } from "@/types";

type RSVPProps = {
  data: RSVP[];
};

const RSVP = ({ data }: RSVPProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.5 } },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!name || !email) {
      // Display modal with error message
      setModalOpen(true);
      setIsSuccess(false); // Set isSuccess to false for error message
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Mithila & Houssein",
      message: message,
    };

    emailjs
      .send(serviceId!, templateId!, templateParams, publicKey!)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setModalOpen(true); // Display modal with success message
        setIsSuccess(true); // Set isSuccess to true for success message
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setModalOpen(true); // Display modal with error message
        setIsSuccess(false); // Set isSuccess to false for error message
      });
  };

  return (
    <div
      id="rsvp"
      className="bg-blue-800 py-12 flex flex-col md:flex-row justify-center items-center "
    >
      <motion.div
        ref={ref}
        variants={fadeInVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="w-full md:w-1/2 md:px-24 px-6 py-10 text-white"
      >
        {data.map((item, index) => (
          <div key={index}>
            <h4 className="font-semibold tracking-wider leading-[48px] text-white text-3xl my-6">
              {item.heading}
            </h4>
            {item.paragraph.map((paragraph, index) =>
              typeof paragraph === "string" ? (
                <p
                  key={index}
                  className="md:w-[500px] text-base font-thin tracking-wider leading-lose pb-4"
                >
                  {paragraph}
                </p>
              ) : paragraph.children && paragraph.children.length > 0 ? (
                <ul key={index} className="list-disc p-20 space-y-2">
                  {paragraph.children[0].text.split("\n").map(
                    (line, index) =>
                      line.trim() !== "" && (
                        <li
                          key={index}
                          className="text-base font-thin tracking-wider leading-lose pb-4"
                        >
                          {line}
                        </li>
                      )
                  )}
                </ul>
              ) : null
            )}
            <p className="pb-4">{item.closingMessage}</p>
          </div>
        ))}
        <p className="font-heading">// Mithila & Houssein</p>
      </motion.div>

      <motion.div
        className="p-12 bg-white rounded-3xl flex mx-6 md:mx-0 shadow-xl"
        ref={ref}
        variants={fadeInVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <form
          className="md:w-[350px] w-[250px] mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800">
              Please enter you name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-200 focus:bg-gray-100 
              border border-gray-200 rounded-lg focus:outline-none 
              focus:border-purple-400"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800">
              Please enter you email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-200 focus:bg-gray-100 
              border border-gray-200 rounded-lg focus:outline-none 
              focus:border-purple-400"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-800">
              Please let us know if you have any Requests/allergies/other
            </label>

            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-gray-200 focus:bg-gray-100 
              border border-gray-200 rounded-lg focus:outline-none 
              focus:border-purple-400"
            ></textarea>
          </div>
          <div className="mb-5">
            <motion.button
              whileHover={{ scale: 1.1, borderColor: "#9f7aea" }}
              type="submit"
              className="w-full flex justify-center hover:bg-purple-700 
              text-blue-800 p-3 rounded-lg tracking-wide font-semibold 
              cursor-pointer transition ease-in duration-500 border-blue-800 border-2"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
      <Modal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default RSVP;
