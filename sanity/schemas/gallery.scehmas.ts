import { defineArrayMember, defineField } from "sanity";

const gallery = {
  name: "gallery",
  title: "Photo Gallery",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

export default gallery;
