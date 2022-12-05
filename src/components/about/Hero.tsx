import { FC } from "react";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div className="bg-hero bg-center bg-cover py-24">
      <div className="container sm:px-10 2xl:px-0 pt-10 lg:pt-28">
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          <div className="flex flex-col text-left items-left justify-center mx-4 basis-5/12">
            <h1 className="font-bold text-black text-6xl font-sans">
              About Us
            </h1>
            <span className="text-[#64607D] text-xl my-5 mt-5">
              We provide software products and services to corporate entities as
              well as individuals. We use technology to drive day to day
              activities with the aim of impacting lives positively.
            </span>
          </div>
          <div className="basis-7/12" data-aos="zoom-in">
            <Image
              className=""
              alt="logo"
              src="/img/about/about-hero.png"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
