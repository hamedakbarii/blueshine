import { Button, Checkbox, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function ContactUs() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="w-full min-h-screen">
      <div
        className="bg-secondaryColor text-white text-2xl w-full h-40 flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(./images/contact-us/blurred_contact_us_image.png)",
        }}
      >
        <h2 className="text-2xl font-semibold">Contact us</h2>
      </div>

      <div className="mt-20 flex justify-center items-center gap-20">
        {/* Form */}
        <div className="shadow-2xl p-10 w-1/2">
          <span className="text-lg">Be in touch with us via ...</span>

          <form
            onSubmit={form.onSubmit((values) => console.log(values))}
            className="mt-10 flex flex-col gap-2"
          >
            <div className="flex gap-2">
              <TextInput
                withAsterisk
                label="First Name"
                placeholder="Enter your name"
                key={form.key("name")}
                {...form.getInputProps("name")}
              />

              <TextInput
                withAsterisk
                label="Last Name"
                placeholder="Enter your last name"
                key={form.key("lastName")}
                {...form.getInputProps("lastName")}
              />
            </div>

            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />

            <Textarea placeholder="Message" />

            <div className="">
              <span className="text-xl">Agreement</span>

              <Checkbox
                mt="md"
                label="I agree to sell my privacy"
                key={form.key("termsOfService")}
                {...form.getInputProps("termsOfService", { type: "checkbox" })}
              />
            </div>

            <Button type="submit" className="w-full mt-4">
              Submit
            </Button>
          </form>
        </div>

        {/* numbers and address and socials */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white shadow-2xl p-10 flex flex-col gap-4 w-80">
            <h3 className="text-lg">For inquiries contact:</h3>

            <div>
              <h2>Abdol Nasser Mohammad</h2>
              <span className="text-secondaryColor">+971 52 154 0901</span>
            </div>

            <div>
              <h2>Abdol Nasser Mohammad</h2>
              <span className="text-secondaryColor">+971 52 154 0901</span>
            </div>
          </div>

          <div className="bg-white shadow-2xl p-10 flex flex-col gap-4 w-80">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg">Corporate Headquarters</h2>
              <p className="text-secondaryColor w-[250px]">
                Unit 2207, Bayswater tower, Marasi drive St, Business bay, Dubai
              </p>
            </div>
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
      </div>
    </div>
  );
}
