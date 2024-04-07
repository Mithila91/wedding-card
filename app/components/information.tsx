import React from "react";

function Information({ data }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <h2 className="text-lg font-bold mb-2 underline">{data[0].heading}</h2>
        <p className="text-base underline">Link</p>
        <p className="text-base underline">Time Slot Title</p>
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-lg font-bold mb-2">{data[0].subheading}</h2>
        <p className="text-base">{data[0].paragraph[0].children[0].text}</p>
      </div>
    </div>
  );
}

export default Information;
