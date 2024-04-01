import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "wahec6jw",
  dataset: "production",
  apiVersion: "2024-04-01",
  title: "Wedding card",
  useCdn: false,
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
