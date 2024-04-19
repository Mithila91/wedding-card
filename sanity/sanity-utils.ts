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
        subheading,
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
  const rsvpData = await client.fetch(
    groq`*[_type == "rsvp"] {
        heading,
        paragraph,
        closingMessage,
        names
    }`
  );

  return { aboutData, locationData, informationData, rsvpData };
}
