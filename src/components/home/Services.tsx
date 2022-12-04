import { FC } from "react";
import Image from "next/image";

const serviceData = [
  {
    bg: "/img/home/1.svg",
    image: "/img/home/web-icon.svg",
    header: "Web Development",
    body: ` We design, create and manage web apps to meet our customers satisfaction.`,
  },
  {
    bg: "/img/home/2.svg",
    image: "/img/home/mobile-icon.svg",
    header: "Mobile Development",
    body: `We design, create and manage mobile (IOS and Android) apps to meet our customers’ satisfaction using the current state of the art technology.`,
  },
  {
    bg: "/img/home/3.svg",
    image: "/img/home/software.svg",
    header: "Software Development",
    body: `We design, create and manage software to meet our customers satisfaction.`,
  },
];

const Servces: FC = () => {
  return (
    <div className="container gap-y-24 gap-x-14 pb-32 sm:px-10">
      <h2 className="font-bold text-5xl w-full lg:w-2/4 text-blue">
        We offer solutions for your business
      </h2>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-24 gap-10 align-middle"
      >
        {serviceData.map((data, index) => (
          <div
            className="bg-center"
            style={{
              backgroundImage: `url(${data.bg})`,
              backgroundRepeat: "no-repeat",
            }}
            key={index}
          >
            <Image src={data.image} alt="web-icon" width={60} height={60} />
            <h5 className="font-bold text-base mt-6 mb-2">{data.header}</h5>
            <p className="text-sm text-gray-700 font-medium sm:w-4/5">
              {data.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servces;
