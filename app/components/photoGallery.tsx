"use client";
import React from "react";
import Image from "next/image";
import { PhotoGallery } from "@/types";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

interface GalleryProps {
    data: PhotoGallery[];
}

const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1
        }
    }
};

const imageVariants = {
    initial: { opacity: 0, y: 60 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

export default function Gallery({ data }: GalleryProps) {
    const { ref, inView } = useInView({
        triggerOnce: false, 
    });

    return (
        <motion.div className="bg-blue-800 mx-auto px-5 py-20 lg:px-32 lg:pt-24" variants={staggerVariants} initial="initial" animate={inView ? "animate" : "initial"} ref={ref}>
            <motion.div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {data.flatMap((item, index) => 
                    item.gallery.images.map((imageUrl, imageIndex) => (
                        <motion.div key={`${item._id}-${imageIndex}`} className="overflow-hidden rounded-lg" variants={imageVariants}>
                            <Image
                                src={imageUrl}
                                alt={`Gallery image ${imageIndex ++}`}
                                layout="responsive"
                                width={400}
                                height={400}
                                className="object-cover"
                            />
                        </motion.div>
                    ))
                )}
            </motion.div>
        </motion.div>
    );
}