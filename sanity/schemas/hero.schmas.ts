import { defineField } from "sanity";

const hero = {
  name: "heroImage",
  title: "Hero Image",
  description:
    "This is the image that will appear at the top of your personal website. It should be a high-quality image that represents you or your work.",
  type: "image",
  options: {
    hotspot: true,
  },
};

export default hero;
