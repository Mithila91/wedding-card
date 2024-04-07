import { defineArrayMember } from "sanity";

const information = {
  name: "information",
  title: "Information",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
    },
    {
      name: "paragraph",
      title: "Paragraph",
      type: "array",
      of: [
        {
          type: "text",
          title: "Text",
          name: "text",
        },
      ],
    },
  ],
};

export default information;
