export default function Hero({ mainHeading, subheading }) {
  return (
    <div className="container h-[50vh] flex flex-col items-center justify-center">
      <h1 className="font-heading md:text-[84px] text-5xl py-20">
        {mainHeading}
      </h1>
      <h2 className="text-2xl font-thin text-blue-800">{subheading}</h2>
    </div>
  );
}
