import Image from "next/image";

export default function Gallery({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item._id}>
          <h1>{item.gallery.subheading}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.gallery.images.map((imageUrl, index) => (
              <Image
                key={index}
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
                width={300}
                height={300}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
