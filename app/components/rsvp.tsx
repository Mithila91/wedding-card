'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const RSVP = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
    });

    const fadeInVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <div className="h-[50vh] font-heading flex pt-40 justify-center bg-blue-800">
            <motion.h2 
                className="text-white text-5xl" 
                ref={ref} 
                variants={fadeInVariants} 
                initial="hidden" 
                animate={inView ? "show" : "hidden"}
            >
                RSVP
            </motion.h2>
        </div>
    );
};

export default RSVP;