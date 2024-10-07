import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl sm:text-4xl">oh oh! Page Not Found.</h1>

        <p className="text-secondaryColor text-center w-5/6 lg:w-full">
          We're sorry, but the page you are looking for doesn't exist. you can
          search your topic using the box below or return to the homepage.
        </p>

        <Link to={"/"} className="text-[#367ccc] font-semibold">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
