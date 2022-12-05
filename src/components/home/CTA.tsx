import { LinkButton } from "@components/general/Button";
import Image from "next/image";
import { FC } from "react";

const CTA: FC = () => {
  return (
    <div className="bg-cta bg-cover bg-no-repeat my-24">
      <div className="container sm:px-10 flex flex-col py-24 sm:flex-row text-white justify-between gap-10">
        <div className="mt-4 lg:mt-10 basis-[40%]">
          <h2 className="font-bold text-5xl">Let us create your Software</h2>
          <p className="text-lg mt-5 mb-8">
            Accelerate innovation with world-class tech teams We’ll match you to
            an entire remote team of incredible talent for all your software
            development
          </p>
          <LinkButton
            link="/contact"
            className="rounded-lg mt-5 px-10 py-3 font-bold text-base text-white bg-secondary"
          >
            Contact Us
          </LinkButton>
        </div>
        <div className="w-full sm:w-[50%] lg:w-[37%] pr-14">
          <Image
            src="/img/home/globe.png"
            alt="globe"
            className="basis-[60%] animate-spin-slow w-full"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
