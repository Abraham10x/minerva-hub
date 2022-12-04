import { LinkButton } from "@components/general/Button";
import Image from "next/image";
import { FC } from "react";

const Download: FC = () => {
  return (
    <div className="relative mt-36 bg-product bg-no-repeat bg-cover bg-top">
      <div className="container sm:px-10 2xl:px-0">
        <div className="flex flex-col sm:flex-row gap-36 py-28">
          <div className="mt-5 sm:mt-36 basis-[45%]">
            <h3 className="text-5xl lg:text-7xl font-bold text-[#313131]">
              Download App
            </h3>
            <p className="text-xl text-[#575757] my-10">
              Wisdom new and valley answer. Contented it so is discourse
              recommend. Man its upon him call mile. An pasture he himself
              believe ferrars besides cottage.
            </p>
            <div className="flex mt-10 gap-x-6 sm:gap-x-10 flex-wrap gap-y-6 justify-center lg:justify-start">
              <LinkButton
                link="/"
                className="bg-secondary text-white rounded-full px-10 font-bold text-base py-3"
              >
                View Product
              </LinkButton>
            </div>
          </div>
          <div className="relative basis-[45%]">
            <Image
              data-aos="zoom-in-down"
              className="z-10"
              src="/img/products/school-hero.png"
              alt="team image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
