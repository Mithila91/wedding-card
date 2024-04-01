import { getDataFromSanity } from "@/sanity/sanity-utils";
import About from "./components/about";

export default async function Home() {
  const data = await getDataFromSanity();
  console.log("sanity data", JSON.stringify(data));

  return <About data={data} />;
}
