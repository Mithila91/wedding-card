import Link from "next/link";
import React from "react";

function Location({ data }) {
  return (
    <div className="container flex items-center flex-col h-[50vh] md:flex-row">
      <div className="md:w-1/2 p-4 md:pb-96">
        <h4 className="text-lg font-bold mb-2">{data[0].subHeading}</h4>
        <h3 className="text-2xl font-bold mb-4">{data[0].heading}</h3>
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

export default Location;
