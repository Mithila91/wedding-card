import { getDataFromSanity } from "@/sanity/sanity-utils";
import About from "./components/about";
import Gallery from "./components/photoGallery";
import { Hero } from "./components/hero";
import TheInvite from "./components/theInvite";
import Information from "./components/information";
import RSVP from "./components/rsvp";
import Timeline from "./components/schedule";
export default async function Home() {
  const { aboutData, locationData, informationData, rsvpData } =
    await getDataFromSanity();
  console.log(
    "sanity data",
    JSON.stringify({ aboutData, locationData, informationData, rsvpData })
  );

  return (
    <div className="overflow-x-hidden">
      <Hero
        mainHeading={aboutData[0].hero.mainHeading}
        subheading={aboutData[0].hero.subheading}
        heroImage={aboutData[0].hero.heroImage}
      />

      <TheInvite data={locationData} />
      <About data={aboutData} />
      <Gallery data={aboutData} />
      <Information data={informationData} />
      <Timeline />
      <RSVP data={rsvpData} />
    </div>
  );
}
