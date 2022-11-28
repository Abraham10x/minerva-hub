import { FC } from "react";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div className="bg-hero bg-center bg-cover">
      <div className="container sm:px-10 2xl:px-0 pt-10 lg:pt-28">
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          <div className="flex flex-col text-left items-left justify-center mx-4 basis-5/12">
            <h1 className="font-bold text-black text-6xl font-sans">
              About Us
            </h1>
            <span className="text-[#64607D] text-xl my-5 mt-5">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </span>
          </div>
          <div className="basis-7/12">
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
