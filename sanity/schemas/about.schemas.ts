import { defineArrayMember } from "sanity";

const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        {
          name: "mainHeading",
          title: "Heading",
          type: "string",
        },
        {
          name: "subheading",
          title: "Subheading",
          type: "string",
        },
        {
          name: "heroImage",
          title: "Hero Image",
          type: "image",
          options:{
            hotspot: true,
          }
        }
      ],
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "text",
          title: "Text",
          name: "text",
        },
      ],
    },
    {
      name: "gallery",
      title: "Photo Gallery",
      type: "document",
      fields: [
        {
          name: "subheading",
          title: "Subheading",
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
    },
  ],
};

export default about;
