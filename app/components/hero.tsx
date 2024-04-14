"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type HeroProps = {
  mainHeading: string;
  subheading: string;
  heroImage: string;
};

export const Hero: React.FC<HeroProps> = ({
  mainHeading,
  subheading,
  heroImage,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="relative h-[90vh] mb-40 flex flex-col items-center justify-center overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <motion.h1
          className="font-heading md:text-[84px] text-5xl py-20 md:px-0 px-6 leading-12 tracking-wide text-center"
          variants={childVariants}
        >
          {mainHeading}
        </motion.h1>
        <div className="flex items-center justify-center">
          <motion.svg
            className="hidden md:block w-20 mx-2"
            variants={lineVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <line
              x1="5"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="#214E6F"
              strokeWidth="2"
            />
          </motion.svg>
          <motion.h2
            className="md:text-2xl md:w-auto w-1/2 text-xl font-thin text-blue-800 text-center"
            variants={childVariants}
          >
            {subheading}
          </motion.h2>
          <motion.svg
            className="hidden md:block w-20 mx-2"
            variants={lineVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <line
              x1="5"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="#214E6F"
              strokeWidth="2"
            />
          </motion.svg>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 md:left-40 md:w-1/2 w-1/3 object-cover">
        <Image src={heroImage} alt="hero image" width={300} height={300} />
      </div>
      <div className="absolute bottom-[-30px] right-[-40px] object-cover">
        <Image
          src="/images/rightflowers.png"
          alt="Flowers image"
          width={350}
          height={350}
          className="object-cover"
        />
      </div>
    </motion.div>
  );
};
