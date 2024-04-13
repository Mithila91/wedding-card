import Image from "next/image";
import {motion} from "framer-motion";

export type HeroProps = {
  mainHeading: string;
  subheading: string;
  heroImage: string;
};

export const Hero: React.FC<HeroProps> = ({
  mainHeading,
  subheading,
  heroImage,
}) => {
  return (
    <div className=" relative h-[90vh] mb-40 flex flex-col items-center justify-center overflow-hidden">
      <div className="z-10">
        <h1 className="font-heading md:text-[84px] text-5xl py-20 md:px-0 px-6 leading-12 tracking-wide text-center">
          {mainHeading}
        </h1>
        <h2 className="md:text-2xl text-xl font-thin text-blue-800 text-center">
          {subheading}
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 md:left-40 md:w-1/2 w-1/3 object-cover">
        <Image src={heroImage} alt="hero image" width={300} height={300} />
      </div>
      <div className="absolute bottom-[-30px] right-[-40px] object-cover">
        <Image
          src="/images/rightflowers.png"
          alt="Flowers image"
          width={350}
          height={350}
          className="object-cover"
        />
      </div>
    </div>
  );
};
