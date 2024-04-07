import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

const config = defineConfig({
  projectId: "wahec6jw",
  dataset: "production",
  apiVersion: "2024-04-01",
  title: "Wedding card",
  useCdn: false,
  basePath: "/admin",
  plugins: [structureTool(), unsplashImageAsset()],
  schema: { types: schemas },
});

export default config;
