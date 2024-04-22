"use client";
import React from "react";
import Link from "next/link";
import { InformationData } from "@/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

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
          <motion.button whileHover={{ scale: 1.1 }}>Map</motion.button>
        </Link>
        <p className="text-base text-blue-800 font-bold mt-4">
          <span className="pb-1 border-b-2 font-bold border-current">
            Ceremony starts at:
          </span>
        </p>
      </motion.div>
      <motion.div
        className="md:w-1/2 p-4"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <h4 className="text-base py-6 text-blue-800 font-bold mb-2">
          {data[0].subheading}
        </h4>
        {data[0].paragraph.map((paragraph, index) =>
          typeof paragraph === "string" ? (
            <motion.p
              key={index}
              className="md:w-[500px] text-base font-thin tracking-wider leading-lose pb-4"
              variants={item}
            >
              {paragraph}
            </motion.p>
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
      </motion.div>
    </motion.div>
  );
}
