import { createClient, groq } from "next-sanity";

export async function getDataFromSanity() {
  const client = createClient({
    projectId: "wahec6jw",
    dataset: "production",
    apiVersion: "2024-04-01",
  });

  return client.fetch(
    groq`*[_type == "about"] {
        _id,
        _createdAt,
      heading,
      description,
      "imageUrl": images.asset->url
      
    }`
  );
}
