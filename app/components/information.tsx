import Link from "next/link";
import React from "react";

function Information({ data }) {
  return (
    <div className="container flex items-center flex-col h-[50vh] md:flex-row">
      <div className="md:w-1/2 p-4">
        <h3 className="text-6xl font-thin font-heading tracking-wider leading-[64px] my-10">
          {data[0].heading}
        </h3>
        <Link className="text-base underline " href="/">
          Link
        </Link>
        <p className="text-base text-blue-800 font-bold underline">
          Cermony starts at
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <h4 className="text-base p-6 text-blue-800 font-bold mb-2">
          {data[0].subheading}
        </h4>
        {data[0].paragraph.map((paragraph, index) => (
          <ul key={index} className="list-disc pl-5 space-y-2">
            {paragraph.children[0].text.split("\n").map(
              (line, index) =>
                line.trim() !== "" && (
                  <li
                    key={index}
                    className="text-base font-thin tracking-wider leading-lose pb-4"
                  >
                    {line}
                  </li>
                )
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Information;
