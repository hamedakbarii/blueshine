import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <nav className="w-full bg-black p-6 flex justify-between items-center">
      <span className="text-white text-2xl font-semibold">Blue Shine</span>

      <div className="hidden md:block">
        <ul className="text-white flex gap-4">
          <li>
            <Link
              to={"/"}
              className="transition-all duration-300 hover:opacity-70"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to={"/about-us"}
              className="transition-all duration-300 hover:opacity-70"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to={"/contact-us"}
              className="transition-all duration-300 hover:opacity-70"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to={"/termsofcondition"}
              className="transition-all duration-300 hover:opacity-70"
            >
              Terms Of Condition
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-white gap-2 items-center hidden md:flex">
        <FaWhatsapp className="text-xl" />
        <span>+971 52 154 0901</span>
      </div>

      {/* Hamburger Menu */}
      <IoMenu
        className="text-white text-2xl cursor-pointer md:hidden"
        onClick={open}
      />

      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        position="right"
      >
        {/* Drawer content */}
        <div>Drawer content</div>
      </Drawer>
    </nav>
  );
}
