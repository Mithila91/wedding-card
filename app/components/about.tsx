"use client";
import Image from "next/image";
import { AboutData } from "@/types";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type AboutProps = {
  data: AboutData[];
};

export default function About({ data }: AboutProps) {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncate = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  const fadeInOutVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 1.5 } },
  };

  return (
    <div id="about">
      {data.map((about) => (
        <div
          key={about._id}
          className="bg-burnt-800 py-8 flex flex-col md:flex-row items-center justify-center gap-4 w-full"
        >
          <motion.div
            className="text-center md:w-1/2"
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
            exit="exit"
            variants={fadeInOutVariants}
            ref={ref1}
          >
            <h2 className="font-heading text-5xl text-white py-20">
              {about.heading}
            </h2>
            <div className="md:px-40 p-6 md:pb-0 mb-10 h-[448px] overflow-auto scrollbar-hide">
              {about.description.map((desc, index) => (
               <p
               key={index}
               className="text-base text-white font-thin mb-4 tracking-wider"
               dangerouslySetInnerHTML={{ __html: isExpanded ? desc.replace(/\n/g, '<br />') : truncate(desc, 800).replace(/\n/g, '<br />') }}
            />
              ))}
              <button
                onClick={toggleExpand}
                className="text-white py-10 font-heading"
              >
                {isExpanded ? "Read Less ..." : "Read More ..."}
              </button>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center px-6"
            initial="hidden"
            animate={inView2 ? "show" : "hidden"}
            exit="exit"
            variants={fadeInOutVariants}
            ref={ref2}
          >
            <Image
              src={about.imageUrl}
              alt="about image"
              width={658}
              height={1024}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
