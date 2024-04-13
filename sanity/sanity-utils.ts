import { createClient, groq } from "next-sanity";

export async function getDataFromSanity() {
  const client = createClient({
    projectId: "wahec6jw",
    dataset: "production",
    apiVersion: "2024-04-01",
  });

  const aboutData = await client.fetch(
    groq`*[_type == "about"] {
        _id,
        _createdAt,
        heading,
        description,
        "imageUrl": images.asset->url,
        gallery {
          subheading,
          "images": images[].asset->url
        },
        hero {
          mainHeading,
          subheading,
          "heroImage": heroImage.asset->url
        }
    }`
  );

  const locationData = await client.fetch(
    groq`*[_type == "location"] {
        subHeading,
        heading,
        title,
        paragraph
    }`
  );

  const informationData = await client.fetch(
    groq`*[_type == "information"] {
      
        heading,
        subheading,
        paragraph
    }`
  );

  return { aboutData, locationData, informationData };
}
