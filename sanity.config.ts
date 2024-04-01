import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import about from "./sanity/schemas/about.schemas";
import gallery from "./sanity/schemas/gallery.scehmas";
import hero from "./sanity/schemas/hero.schmas";

const config = defineConfig({
  projectId: "wahec6jw",
  dataset: "production",
  apiVersion: "2024-04-01",
  title: "Wedding card",
  useCdn: false,
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: [about, gallery, hero] },
});

export default config;
