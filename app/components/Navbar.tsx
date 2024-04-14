"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/our-story", label: "Our Story" },
    { href: "/invitation", label: "Invitation" },
    { href: "/information", label: "Information" },
    { href: "/rsvp", label: "RSVP" },
  ];

  // Variants for mobile animation
  const mobileParentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for desktop animation
  const desktopParentVariants = {
    initial: { opacity: 1 },
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

      {/* Mobile Navbar */}
      <nav className="md:hidden bg-white px-6 py-4 md:w-1/2 container z-10">
        <div className="flex flex-col md:flex-row justify-end items-center w-full md:w-auto my-4"></div>

        <div className="md:hidden flex justify-end z-30">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div
              className={clsx(`tham tham-e-squeeze tham-w-6`, {
                "tham-active": isOpen,
              })}
            >
              <div className="tham-box">
                <div className="tham-inner" />
              </div>
            </div>
          </button>
        </div>
        <motion.div
          className={`flex ${
            isOpen ? "block" : "hidden"
          } w-full h-screen pt-32 md:h-auto md:w-auto flex-col md:justify-end`}
          variants={mobileParentVariants}
          initial="initial"
          animate={isOpen ? "animate" : "initial"}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="pb-6 font-bold"
            >
              <Link
                key={item.href}
                href={item.href}
                className="py-4 text-blue-800 hover:bg-gray-300 text-4xl"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      {/* Desktop Navbar */}
      <motion.nav
        className="hidden md:block bg-white px-6 py-4 w-full container"
        ref={ref}
      >
        <div className="flex flex-col md:flex-row justify-end items-center w-full md:w-auto my-4"></div>
        <motion.div
          className=" w-full h-screen md:pt-0 pt-24  md:h-auto md:w-auto flex flex-col md:flex-row md:items-center md:justify-end"
          variants={desktopParentVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {navItems.map((item, index) => (
            <motion.div key={index} variants={childVariants}>
              <Link
                key={item.href}
                href={item.href}
                className="px-10 py-4 text-blue-800 hover:bg-gray-300 text-xl"
              >
                <motion.button whileHover={{ scale: 1.1 }}>
                  {item.label}
                </motion.button>{" "}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
