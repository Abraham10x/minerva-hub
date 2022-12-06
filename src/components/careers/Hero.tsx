import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="bg-careerBg bg-no-repeat bg-cover mt-24">
      <div className="container sm:px-10 2xl:px-0 flex flex-col sm:flex-row gap-10 py-32 align-middle">
        <div className="flex flex-col basis-5/12 mt-5 lg:mt-28">
          <h1 className="text-6xl my-4 font-sans text-center sm:text-left font-bold text-white">
            Come let's Colab Together
          </h1>
          <p className="text-lg text-[#FAFAFA]">
            Take your next career step in the tech sector. Join the Minerva Hub
            team to make our tech products easy as well as mind-blowing.
          </p>
        </div>
        <div className="basis-7/12">
          <Image
            className="rounded-3xl"
            src="/img/career/hero-img.png"
            alt="team image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
