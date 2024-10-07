import { Carousel } from "@mantine/carousel";
import { Card, Image, Text, Badge, Group, Tooltip } from "@mantine/core";
import { useState } from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaBath, FaBed, FaCarSide, FaRegHeart } from "react-icons/fa";

export default function Services() {
  const [isHoverd, setIsHovered] = useState(false);

  const services = [
    {
      id: 1,
      img: "./images/hero-banner.avif",
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi maiores beatae aperiam cum quam, explicabo iusto autemqui veniam, eligendi odit nemo eius? Quam laudantium quasireprehenderit facilis totam voluptatum?",
      price: 2000,
    },
    {
      id: 2,
      img: "./images/houses/01/01.jpg",
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi maiores beatae aperiam cum quam, explicabo iusto autemqui veniam, eligendi odit nemo eius? Quam laudantium quasireprehenderit facilis totam voluptatum?",
      price: 2000,
    },
    {
      id: 3,
      img: "./images/houses/02/02.jpg",
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi maiores beatae aperiam cum quam, explicabo iusto autemqui veniam, eligendi odit nemo eius? Quam laudantium quasireprehenderit facilis totam voluptatum?",
      price: 2000,
    },
    {
      id: 4,
      img: "./images/houses/03/03.jpg",
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi maiores beatae aperiam cum quam, explicabo iusto autemqui veniam, eligendi odit nemo eius? Quam laudantium quasireprehenderit facilis totam voluptatum?",
      price: 2000,
    },
    {
      id: 5,
      img: "./images/houses/04/04.jpg",
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi maiores beatae aperiam cum quam, explicabo iusto autemqui veniam, eligendi odit nemo eius? Quam laudantium quasireprehenderit facilis totam voluptatum?",
      price: 2000,
    },
    {
      id: 6,
      img: "./images/houses/05/05.jpg",
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi maiores beatae aperiam cum quam, explicabo iusto autemqui veniam, eligendi odit nemo eius? Quam laudantium quasireprehenderit facilis totam voluptatum?",
      price: 2000,
    },
    {
      id: 7,
      img: "./images/houses/06/06.jpg",
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi maiores beatae aperiam cum quam, explicabo iusto autemqui veniam, eligendi odit nemo eius? Quam laudantium quasireprehenderit facilis totam voluptatum?",
      price: 2000,
    },
    {
      id: 8,
      img: "./images/houses/07/07.jpg",
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi maiores beatae aperiam cum quam, explicabo iusto autemqui veniam, eligendi odit nemo eius? Quam laudantium quasireprehenderit facilis totam voluptatum?",
      price: 2000,
    },
    {
      id: 9,
      img: "./images/houses/07/07.jpg",
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi maiores beatae aperiam cum quam, explicabo iusto autemqui veniam, eligendi odit nemo eius? Quam laudantium quasireprehenderit facilis totam voluptatum?",
      price: 2000,
    },
    {
      id: 10,
      img: "./images/houses/08/08.jpg",
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi maiores beatae aperiam cum quam, explicabo iusto autemqui veniam, eligendi odit nemo eius? Quam laudantium quasireprehenderit facilis totam voluptatum?",
      price: 2000,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 my-10">
      {/* Services Section Title */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl">Services</h2>

        <p className="text-sm text-secondaryColor">
          Here is our services section
        </p>
      </div>

      {/* Services Section Carousel */}
      <div className="w-full flex justify-center items-center">
        <Carousel
          withIndicators
          slideSize="25"
          slideGap="md"
          align={"center"}
          loop
          slidesToScroll={1}
          className="w-full flex justify-center items-center"
        >
          {services.map((service) => (
            <Carousel.Slide key={service.id}>
              <div
                className="cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Card
                  shadow="lg"
                  padding="lg"
                  radius="md"
                  withBorder
                  className="w-[300px] md:w-[400px]"
                >
                  <Card.Section className="relative">
                    <Image
                      src={service.img}
                      alt={"title"}
                      className="transition-all duration-300 group-hover:opacity-50 !w-full !h-[300px]"
                    />

                    <Badge className="absolute right-2 top-2 z-10" color="blue">
                      New
                    </Badge>

                    {isHoverd && (
                      <Tooltip label="افزودن به علاقه مندی">
                        <div className="absolute left-2 top-2 bg-white p-2 rounded-full">
                          <FaRegHeart className="text-black" />
                        </div>
                      </Tooltip>
                    )}
                  </Card.Section>

                  <Group
                    mt="md"
                    mb="xs"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text
                      fw={500}
                      className="transition-all duration-300 hover:text-red-500"
                    >
                      {service.title}
                    </Text>

                    <Text size="sm" c="dimmed" className="text-justify">
                      {service.desc}
                    </Text>

                    <div className="flex justify-center items-center gap-2 bg-primaryColor p-2 text-white rounded-xl">
                      <Text>{service.price}$</Text>
                      <CiMoneyCheck1 className="text-2xl" />
                    </div>
                  </Group>

                  <div className="bg-gray-300 w-[95%] h-[1px] mx-auto m-1"></div>

                  <Group
                    mt="md"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 20,
                    }}
                  >
                    <div className="flex justify-center items-center gap-1 text-secondaryColor">
                      <FaCarSide className="text-xl" />
                      <span className="text-sm">2</span>
                    </div>

                    <div className="flex justify-center items-center gap-1 text-secondaryColor">
                      <FaBath className="text-xl" />
                      <span className="text-sm">2</span>
                    </div>

                    <div className="flex justify-center items-center gap-1 text-secondaryColor">
                      <FaBed className="text-xl" />
                      <span className="text-sm">2</span>
                    </div>
                  </Group>
                </Card>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
