import { getDataFromSanity } from "@/sanity/sanity-utils";
import About from "./components/about";
import Gallery from "./components/photoGallery";
import { Hero } from "./components/hero";
import TheInvite from "./components/theInvite";
import Information from "./components/information";
import RSVP from "./components/rsvp";
import Schedule from "./components/schedule";
export default async function Home() {
  const { aboutData, locationData, informationData, rsvpData } =
    await getDataFromSanity();
  console.log(
    "sanity data",
    JSON.stringify({ aboutData, locationData, informationData, rsvpData })
  );
  const events = [
    { title: "Event 1", description: "This is event descrtiption1 ", image: "image1.jpg" },
    { title: "Event 2", description: "This is event description2", image: "image2.jpg" },
    { title: "Event 3", description: "This is event description3", image: "image2.jpg" },
    { title: "Event 4", description: "This is event description4", image: "image2.jpg" },
  ];

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
      <Schedule events={events} />
      <RSVP data={rsvpData} />
    </div>
  );
}
