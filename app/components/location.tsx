import Link from "next/link";
import React from "react";
import { LocationData } from "@/types";

type LocationProps = {
  data: LocationData[];
};

export default function Location({ data }: LocationProps) {
  return (
    <div className="container flex items-center flex-col md:h-screen md:flex-row">
      <div className="md:w-1/2 p-4 md:pb-96">
        <h4 className="text-lg font-bold text-blue-800 mb-2 ">
          <span className="pb-1 border-b-2 font-bold border-current">
            {data[0].subHeading}
          </span>
        </h4>
        <h3 className="md:text-[64px] text-5xl font-bolder md:my-4 my-10 md:w-[554px] ">
          {data[0].heading}
        </h3>
      </div>
      <div className="md:w-1/2 p-4 md:pt-96">
        <h4 className="text-lg font-bold mb-2">{data[0].title}</h4>
        <p className="text-base font-thin tracking-wider leading-lose">
          {data[0].paragraph[0].children[0].text}
        </p>
        <div className="py-20">
          <Link className="text-blue-800" href="/">
            RSVP
          </Link>
        </div>
      </div>
    </div>
  );
}
