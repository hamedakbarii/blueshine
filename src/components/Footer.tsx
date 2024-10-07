import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* footer top */}
      <div className="bg-black w-full p-6 flex flex-col gap-4 md:flex-row justify-between text-white">
        <div className="flex flex-col gap-4">
          <span className="text-3xl">Blue Shine</span>

          <div className="flex gap-2 items-center">
            <FaPhone className="text-primaryColor" />
            <span className="text-secondaryColor">+971 52 154 0901</span>
          </div>

          <div className="flex gap-2 items-center">
            <IoMdMail className="text-primaryColor" />
            <span className="text-secondaryColor">
              info@blushineproperties.com
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <FaLocationDot className="text-primaryColor" />
            <span className="text-secondaryColor">
              Unit 2207, Bayswater tower, Marasi drive St, Business bay, Dubai
            </span>
          </div>
        </div>

        <div>
          <span>Company</span>

          <ul className="text-secondaryColor flex flex-col gap-4 mt-5">
            <li className="transition-all duration-300 hover:opacity-70">
              <Link to={"/about-us"}>About</Link>
            </li>{" "}
            <li className="transition-all duration-300 hover:opacity-70">
              Blog
            </li>
            <li className="transition-all duration-300 hover:opacity-70">
              Careers
            </li>
            <li className="transition-all duration-300 hover:opacity-70">
              Lead Form
            </li>
            <li className="transition-all duration-300 hover:opacity-70">
              <Link to={"/contact-us"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <span>UAE</span>

          <ul className="text-secondaryColor flex flex-col gap-4 mt-5">
            <li className="transition-all duration-300 hover:opacity-70">
              Abu Dhabi
            </li>
            <li className="transition-all duration-300 hover:opacity-70">
              Ajman
            </li>
            <li className="transition-all duration-300 hover:opacity-70">
              Dubai
            </li>
            <li className="transition-all duration-300 hover:opacity-70">
              Fujairah
            </li>
            <li className="transition-all duration-300 hover:opacity-70">
              Sharjah
            </li>
            <li className="transition-all duration-300 hover:opacity-70">
              Ras Al Khaimah
            </li>
          </ul>
        </div>

        <div>
          <span>Quick Links</span>

          <ul className="text-secondaryColor flex flex-col gap-4 mt-5">
            <li className="transition-all duration-300 hover:opacity-70">
              For Sale
            </li>
            <li className="transition-all duration-300 hover:opacity-70">
              New Projects
            </li>
            <li className="transition-all duration-300 hover:opacity-70">
              <Link to={"/termsofcondition"}>Terms Of Conditions</Link>
            </li>
            <li className="transition-all duration-300 hover:opacity-70">
              <Link to={"/contact-us"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* footer bottom  */}
      <div className="w-full bg-grayBackground flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-between p-8">
        <div className="flex gap-2">
          <span className="text-secondaryColor">
            All rights reserved Blue Shine Real Estate Broker |
          </span>
          <span className="text-white">Privacy Policy</span>
        </div>

        {/* socials */}
        <div className="flex gap-2">
          <FaTwitter className="text-2xl text-white bg-primaryColor w-10 h-10 p-2 rounded-md transition-all duration-300 hover:bg-white hover:text-primaryColor cursor-pointer" />
          <FaFacebook className="text-2xl text-white bg-primaryColor w-10 h-10 p-2 rounded-md transition-all duration-300 hover:bg-white hover:text-primaryColor cursor-pointer" />
          <FaInstagram className="text-2xl text-white bg-primaryColor w-10 h-10 p-2 rounded-md transition-all duration-300 hover:bg-white hover:text-primaryColor cursor-pointer" />
          <FaLinkedin className="text-2xl text-white bg-primaryColor w-10 h-10 p-2 rounded-md transition-all duration-300 hover:bg-white hover:text-primaryColor cursor-pointer" />
          <FaYoutube className="text-2xl text-white bg-primaryColor w-10 h-10 p-2 rounded-md transition-all duration-300 hover:bg-white hover:text-primaryColor cursor-pointer" />
          <FaTelegram className="text-2xl text-white bg-primaryColor w-10 h-10 p-2 rounded-md transition-all duration-300 hover:bg-white hover:text-primaryColor cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
