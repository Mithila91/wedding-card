import Image from "next/image";

export default function About({ data }) {
  return (
    <div>
      {data.map((about) => (
        <div
          key={about._id}
          className=" bg-primary-100 py-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
        >
          <div className="text-center mb-4 sm:mb-0 mx-auto">
            <h2 className="font-heading text-5xl py-8">{about.heading}</h2>
            {about.description.map((desc) => (
              <p key={desc._key} className="text-m">
                {desc.children[0].text}
              </p>
            ))}
          </div>
          <div>
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
