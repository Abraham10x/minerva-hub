import { LinkButton } from "@components/general/Button";
import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="bg-careerBg bg-no-repeat bg-cover mt-[5.6rem]">
      <div className="container sm:px-10 2xl:px-0 flex flex-col sm:flex-row gap-10 pt-20 align-middle justify-between pb-28">
        <div className="flex flex-col basis-[50%] mt-5 lg:mt-28">
          <h1 className="text-6xl my-4 font-sans text-center sm:text-left font-bold text-white">
            School Management System
          </h1>
          <p className="text-lg text-[#FAFAFA]">
            It helps schools achieve great efficiency in all functions. The best
            solution for managing daily school operations. It allows school to
            manage registration, admissions, academic calendar, attendance, and
            more.
          </p>
          <div className="flex mt-10 gap-x-6 sm:gap-x-10 flex-wrap gap-y-6 justify-center lg:justify-start">
            <LinkButton
              link="https://school.myminervahub.com/"
              target="_blank"
              className="bg-secondary text-white rounded-full px-10 font-bold text-base py-3"
            >
              Get Stated
            </LinkButton>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="basis-[50%]"
        >
          <Image
            className="rounded-3xl"
            src="/img/products/school/school.png"
            alt="team image"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
