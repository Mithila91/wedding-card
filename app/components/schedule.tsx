import React from "react";
import Image from "next/image";

interface Event {
  title: string;
  description: string;
  image: string;
}

const Schedule = ({ events = [] }: { events?: Event[] } = {}) => (
  <div className="my-40">
    <h3 className="flex justify-center text-5xl pb-40">Schedule</h3>
    <div className="container w-full max-w-4xl mx-auto px-4">
      <div className="-my-6">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative pl-8 sm:pl-32 py-6 group ${
              index === events.length - 1 ? "group-last" : ""
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start mb-1">
              <div className="group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              </div>
              <div className="w-16 h-16 relative sm:w-24 sm:h-24 flex items-center justify-center mb-4 sm:mb-0">
                <Image
                  src="/"
                  alt="profile image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <div
                  className={`font-caveat font-medium text-2xl text-indigo-500 mb-1 ${
                    index % 2 === 0 ? "text-right" : ""
                  }`}
                >
                  {event.title}
                </div>
                <div className="text-slate-500">{event.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Schedule;