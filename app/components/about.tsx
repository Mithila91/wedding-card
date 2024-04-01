import Image from "next/image";

export default function About({ data }) {
  return (
    <div>
      {data.map((about) => (
        <div key={about._id}>
          <h1 className="font-heading">{about.heading}</h1>
          {about.description.map((desc) => (
            <p key={desc._key}>{desc.children[0].text}</p>
          ))}
          <Image
            src={about.imageUrl}
            alt="about image"
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}
