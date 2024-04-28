"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const Timeline = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  const timelineData = [
    {
      time: "14.00",
      description: "wedding ceremony.",
    },
    {
      time: "15.00-16.00",
      description: "Photo shoot for the newlyweds.",
    },
    {
      time: "15.00-16.00",
      description: "Cocktails & Mingle for the guests",
    },
    {
      time: "17.00-18.00",
      description: "Dinner is served.",
    },
    {
      time: "19.00-20.00",
      description: "First dance & cake cutting.",
    },
    {
      time: "21.00-00.45",
      description:"Party time!",
    },
    {
      time: "1.00",
      description:"Shuttles back to town",
    },
  ];

  return (
    <>
      <h2 className="font-heading text-5xl text-forest-800 font-semibold text-center md:mb-20 mb-40 md:mt-0 mt-60">
        Schedule
      </h2>
      <div className="container bg-gray-200 mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <svg
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full w-1 mb-20"
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
          >
            <motion.path
              id="linePath"
              d="M 0 0 V 1"
              stroke="#444A3B"
              variants={draw}
              initial="hidden"
              animate="visible"
            />
          </svg>
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <motion.div
                ref={ref}
                variants={stagger}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {timelineData.map((data, index) => (
                  <motion.div
                    key={index}
                    className={`flex ${
                      index % 2 === 0 ? "flex-row-reverse" : ""
                    } mb-8`}
                    variants={{
                      initial: { opacity: 0, y: 0 },
                      animate: { opacity: 1, y: 20, transition: { duration: 0.5 } },
                    }}
                  >
                    <div className="w-1/2 mx-8"></div>
                    <div className=" px-6 py-4">
                      <h3 className="mb-3 font-bold text-forest-800 text-xl">
                        {data.time}
                      </h3>
                      <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                        {data.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-[350px] flex justify-center mx-auto">
      <p className="tracking-wider leading-loose text-2xl my-8 mb-20 font-heading">Ps.. Since you know us you know that 
      nothing will be according to the schedule....</p>
      </div>

    </>
  );
};

export default Timeline;
