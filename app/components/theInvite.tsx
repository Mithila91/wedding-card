"use client";
import Link from "next/link";
import React from "react";
import { InviteData } from "@/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type LocationProps = {
  data: InviteData[];
};

export default function TheInvite({ data }: LocationProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  const leftContainerVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightContainerVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const lineVariants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      id="invitation"
      className="container flex items-center flex-col md:h-screen md:flex-row"
      ref={ref}
    >
      <motion.div
        className="md:w-1/2 p-4 md:pb-96"
        variants={leftContainerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <h4 className="text-lg font-bold text-forest-800 mb-2 ">
          <span className="pb-1 border-b-2 font-bold border-current">
            {data[0].subheading}
          </span>
        </h4>
        <h3 className="md:text-[64px] text-5xl tracking-wide leading-[4.5rem] font-bolder md:my-4 my-10 md:w-[554px] ">
          {data[0].heading}
        </h3>
      </motion.div>
      <motion.div
        className="md:w-1/2 p-4 md:pt-96"
        variants={rightContainerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <h4 className="text-lg font-heading tracking-wider font-bolder mb-2 pb-8 text-forest-800">{data[0].title}</h4>
        <p className="text-base font-thin tracking-wider leading-lose">
          {data[0].paragraph[0].children[0].text}
        </p>
        <div className="py-20">
          <Link className="text-forest-800 font-bold" href="#rsvp">
            <motion.button whileHover={{ scale: 1.1 }}>RSVP HERE</motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
