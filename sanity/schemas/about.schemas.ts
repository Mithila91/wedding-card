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
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "Url",
                  },
                ],
              },
            ],
            decorators: [
              {
                title: "Italic",
                value: "em",
              },
              {
                title: "Strong",
                value: "strong",
              },
            ],
          },
          styles: [],
          type: "block",
        }),
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
