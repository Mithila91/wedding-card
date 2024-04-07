import React from "react";

function Location({ data }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <h2 className="text-lg font-bold mb-2">{data[0].subHeading}</h2>
        <h1 className="text-2xl font-bold mb-4">{data[0].heading}</h1>
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-lg font-bold mb-2">{data[0].title}</h2>
        <p className="text-base">{data[0].paragraph[0].children[0].text}</p>
      </div>
    </div>
  );
}

export default Location;
