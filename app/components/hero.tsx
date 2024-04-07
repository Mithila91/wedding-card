export default function Hero({ mainHeading, subheading }) {
  return (
    <div className="hero">
      <h1 className="hero-mainHeading">{mainHeading}</h1>
      <h2 className="hero-subheading">{subheading}</h2>
    </div>
  );
}
