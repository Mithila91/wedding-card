"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type TimelineBlockProps = {
  title: string;
  time: string | number;
  icon: ReactNode;
  delay: number;
  position?: "left" | "right";
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

const TimelineBlock = ({ title, time, icon, delay, position }: TimelineBlockProps) => {
  return (
    <motion.div
      className="flex items-center justify-between mb-8 w-full"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 ml-4 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{time}</p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      title: "Event 1",
      time: "January 2022",
      icon: <i className="fas fa-clock"></i>,
      delay: 0.2,
    },
    {
      title: "Event 2",
      time: "March 2022",
      icon: <i className="fas fa-briefcase"></i>,
      delay: 0.4,
    },
    {
      title: "Event 3",
      time: "June 2022",
      icon: <i className="fas fa-chart-line"></i>,
      delay: 0.6,
    },
    {
      title: "Event 4",
      time: "September 2022",
      icon: <i className="fas fa-user-friends"></i>,
      delay: 0.8,
    },
  ];

  return (
    <>
      <h2 className="font-heading text-5xl text-forest-800 font-semibold text-center md:mb-20 md:mt-0 mt-60">
        Schedule
      </h2>
      <div className="container w-full h-1/2 flex justify-center  md:my-8 mt-20">
        <div className="relative">
          <svg
            className="absolute top-0 left-6 h-[480px] w-1 mb-20"
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 0 V 1"
              stroke="#444A3B"
              variants={draw}
              initial="hidden"
              animate="visible"
            />
          </svg>
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
          >
            {timelineData.map((event, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                } justify-center`}
              >
                <TimelineBlock
                  title={event.title}
                  time={event.time}
                  icon={event.icon}
                  delay={index * 0.2}
                  position={index % 2 === 0 ? "right" : "left"}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
