export type HeroProps = {
  mainHeading: string;
  subheading: string;
};

export const Hero: React.FC<HeroProps> = ({ mainHeading, subheading }) => {
  return (
    <div className="container md:h-[70vh] mb-40 flex flex-col items-center justify-center">
      <h1 className="font-heading md:text-[84px] text-5xl py-20 text-center">
        {mainHeading}
      </h1>
      <h2 className="md:text-2xl text-xl font-thin text-blue-800">
        {subheading}
      </h2>
    </div>
  );
};
