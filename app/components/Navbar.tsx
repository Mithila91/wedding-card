"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/our-story", label: "Our Story" },
    { href: "/invitation", label: "Invitation" },
    { href: "/information", label: "Information" },
    { href: "/rsvp", label: "RSVP" },
  ];

  const parentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="absolute top-0 left-0 ">
        <Image
          src="/images/leftflowers.png"
          alt="Flowers image"
          width={350}
          height={350}
        />
      </div>
      <motion.nav
        variants={parentVariants}
        initial="initial"
        animate="animate"
        className="bg-white px-6 py-4 md:w-1/2 container z-10"
      >
        <div className="flex flex-col md:flex-row justify-end items-center w-full md:w-auto my-4"></div>
        <div className="md:hidden flex justify-end z-30">
          <button
            type="button"
            className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <motion.div
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } w-full h-screen md:pt-0 pt-24  md:h-auto md:w-auto flex flex-col md:flex-row md:items-center md:justify-end`}
        >
          {navItems.map((item, index) => (
            <motion.div key={index} variants={childVariants}>
              <Link
                key={item.href}
                href={item.href}
                className="md:px-10 md:py-1 !py-4 text-blue-800 hover:bg-gray-300 md:text-base  text-4xl"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
