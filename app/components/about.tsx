"use client";
import Image from "next/image";
import { AboutData } from "@/types";
import React, { useState } from "react";

export type AboutProps = {
  data: AboutData[];
};

export default function About({ data }: AboutProps) {
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

  return (
    <div>
      {data.map((about) => (
        <div
          key={about._id}
          className="bg-primary-100 py-8 flex flex-col md:flex-row items-center justify-center gap-4 w-full"
        >
          <div className="text-center md:w-1/2">
            <h2 className="font-heading text-5xl py-20">{about.heading}</h2>
            <div className="md:px-40 px-6 h-[448px] overflow-auto scrollbar-hide">
              {about.description.map((desc, index) => (
                <p
                  key={index}
                  className="text-base font-thin mb-4 tracking-wider"
                >
                  {isExpanded ? desc : truncate(desc, 200)}
                </p>
              ))}
              <button onClick={toggleExpand}>
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={about.imageUrl}
              alt="about image"
              width={658}
              height={1024}
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
