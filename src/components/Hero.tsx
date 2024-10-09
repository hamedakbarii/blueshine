export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center bg-cover overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full min-h-screen zoom-animation"
        style={{
          backgroundImage: "url(./images/hero-banner.avif)",
          backgroundSize: "cover",
          filter: "brightness(0.6)",
          zIndex: -1,
        }}
      ></div>

      <div className="w-full flex flex-col justify-center items-center gap-2 text-white z-10">
        <span className="text-2xl md:text-5xl text-primaryColor">
          BLUE SHINE PROPERTY
        </span>
        <span className="text-sm font-semibold">By Tabnak Holding</span>
      </div>
    </div>
  );
}
