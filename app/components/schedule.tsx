"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

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
      image: "/images/cermony.png",
    },
    {
      time: "15.00-16.00",
      description: "Photo shoot for the newlyweds.",
      image: "/images/camera.png",
    },
    {
      time: "15.00-16.00",
      description: "Cocktails & Mingle for the guests",
      image: "/images/cocktails.png",
    },
    {
      time: "17.00-18.00",
      description: "Dinner is served.",
      image: "/images/dinner.png",
    },
    {
      time: "19.00-20.00",
      description: "First dance & cake cutting.",
      image: "/images/dance.png",
    },
    {
      time: "21.00-00.45",
      description: "Party time!",
      image: "/images/party.png",
    },
    {
      time: "1.00",
      description: "Shuttles back to town",
      image: "/images/shuttle.png",
    },
  ];

  return (
    <>
      <h2 className="font-heading text-5xl text-forest-800 font-semibold text-center md:mb-20 mb-40 md:mt-0 mt-60">
        Schedule
      </h2>
      <div className="container bg-gray-200 mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden">
          <svg
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 mb-20"
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
          <div className="container mx-auto md:w-1/2 h-full">
            <div className="relative wrap overflow-hidden h-full">
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
                    } mb-4`}
                    variants={{
                      initial: { opacity: 0, y: 0 },
                      animate: {
                        opacity: 1,
                        y: 20,
                        transition: { duration: 0.5 },
                      },
                    }}
                  >
                    <div className="w-1/2 mx-8"></div>
                    <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 px-8 py-4">
                      <Image
                        src={data.image}
                        alt={data.description}
                        width={100}
                        height={100}
                      />
                      <div>
                        <h3 className="mb-3 font-bold text-forest-800 text-xl">
                          {data.time}
                        </h3>
                        <p className="text-m uppercase leading-snug tracking-wide text-gray-900 text-opacity-100">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-[350px] flex justify-center mx-auto">
        <p className="tracking-wider leading-loose md:text-2xl text-xl md:my-40 my-20 font-heading">
          Ps.. Since you know us you know that nothing will be according to the
          schedule....
        </p>
      </div>
    </>
  );
};

export default Timeline;
