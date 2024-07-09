"use client";
import React from "react";
import Link from "next/link";
import { InformationData } from "@/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type InformationProps = {
  data: InformationData[];
};

export default function Information({ data }: InformationProps) {
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      id="information"
      className="container flex items-center flex-col h-[100vh] mb-10 md:flex-row"
      ref={ref}
    >
      <motion.div
        className="md:w-1/2 p-4"
        variants={leftContainerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <h3 className="text-6xl font-thin tracking-wider leading-[64px] my-10">
          {data[0].heading}
        </h3>
        <Link
          className="text-base pb-1 border-b-2 border-current"
          href="https://maps.app.goo.gl/YUF2ebk8SFCrVZQ5A"
        >
          <motion.button whileHover={{ scale: 1.1 }}>How to get here</motion.button>
        </Link>

      </motion.div>
      <motion.div
        className="md:w-1/2 p-4"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* <h3 className="mb-3 font-bold text-forest-800 text-xl">
          {data[0].subheading}
        </h3> */}
        {data[0].paragraph.map((paragraph, index) => {
          const headings = ["VENUE PARKING", "KIDDOS", "SHUTTLES", "REGISTRY"];
          return typeof paragraph === "string" ? (
            <>
              <motion.h4 
              variants={item}
              className="text-md pt-4 text-forest-800 font-extrabold">
                {headings[index % headings.length]}
              </motion.h4>
              <motion.p
                key={index}
                className="md:w-[500px] text-base font-thin tracking-wider leading-lose py-2"
                variants={item}
              >
                {paragraph}
              </motion.p>
            </>
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
          ) : null;
        })}
      </motion.div>
    </motion.div>
  );
}
