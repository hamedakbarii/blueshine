export default function AboutUs() {
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src="./images/team/team.jpg"
          alt="team"
          className="w-full h-40 object-cover opacity-40"
        />

        <div className="text-black absolute left-1/2 top-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center">
          <h2 className="text-4xl">About us</h2>
          <span className="text-grayColor">
            Here you can findout information from our team.
          </span>
        </div>
      </div>

      {/* About us content */}
      <div className="mt-20 flex flex-col items-center justify-center m-10 gap-10">
        <h2 className="text-lg">
          Welcome to{" "}
          <span className="text-primaryColor text-2xl">Blue Shine</span> where
          your dream home becomes a reality!
        </h2>

        <div className="flex justify-center items-start gap-10 w-5/6 mx-auto">
          <div className="flex flex-col items-start justify-center">
            <p>
              established in 2023 blueshine is a top real estate brokerage based
              in the uae. our mission has been always to assist our clients from
              all around the world to own their ideal properties in the shortest
              time. our website is platform through wich our client can explore
              a variety of properties for sale or for rent in the uae. providing
              a detailde information about each property. we help our clients
              easily find their ideal property. above all we walk them through
              the process of buyying a property in dubai abu dhabi and ras al
              khaimah
            </p>

            <div className="flex flex-col items-start gap-4 mt-10">
              <h3 className="font-semibold">Why choose us?</h3>
              <ul>
                <li>
                  • Expertise: Our agents have deep local knowledge, ensuring
                  that you find the best properties in prime locations.
                </li>
                <li>
                  • Trust: We are known for our integrity, transparency, and
                  client-first approach.
                </li>
                <li>
                  • Variety: From cozy apartments to luxury homes, we offer a
                  wide range of properties to suit every lifestyle and budget.
                </li>
                <li>
                  • Guidance: Whether you’re a first-time homebuyer or an
                  experienced investor, we guide you through every step of the
                  process, making real estate easy and hassle-free.
                </li>
              </ul>
            </div>
          </div>

          <img
            src="./images/aboutus/aboutus.jpeg"
            alt="aboutus"
            className="w-[500px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
