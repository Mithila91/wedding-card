import Image from "next/image";

export default function About({ data }) {
  return (
    <div>
      {data.map((about) => (
        <div
          key={about._id}
          className=" md:bg-primary-100 py-8 flex flex-col md:flex-row items-center justify-center gap-4 w-full"
        >
          <div className="text-center md:w-1/2 p-4">
            <div className="md:px-40 ">
              <h2 className="font-heading text-5xl py-8">{about.heading}</h2>
              {about.description.map((desc) => (
                <p
                  key={desc._key}
                  className="text-base font-thin tracking-wider"
                >
                  {desc.children[0].text}
                </p>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={about.imageUrl}
              alt="about image"
              width={658}
              height={1024}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
