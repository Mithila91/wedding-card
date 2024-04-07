import { getDataFromSanity } from "@/sanity/sanity-utils";
import About from "./components/about";
import Gallery from "./components/photoGallery";
import Hero from "./components/hero";
import Location from "./components/location";
import Information from "./components/information";
export default async function Home() {
  const { aboutData, locationData, informationData } =
    await getDataFromSanity();
  console.log(
    "sanity data",
    JSON.stringify({ aboutData, locationData, informationData })
  );

  return (
    <div className="">
      <Hero
        mainHeading={aboutData[0].hero.mainHeading}
        subheading={aboutData[0].hero.subheading}
      />

      <Location data={locationData} />
      <About data={aboutData} />
      <Gallery data={aboutData} />
      <Information data={informationData} />
    </div>
  );
}
