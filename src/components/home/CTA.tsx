import { LinkButton } from "@components/general/Button";
import Image from "next/image";
import { FC } from "react";

const CTA: FC = () => {
  return (
    <div className="bg-cta bg-cover bg-no-repeat my-24">
      <div className="container sm:px-10 flex flex-col py-24 sm:flex-row text-white justify-between gap-y-28">
        <div className="mt-4 basis-[48%]">
          <h2 className="font-bold text-5xl">
            Partiality on or continue in the particular principles
          </h2>
          <p className="text-lg mt-5 mb-10">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <LinkButton
            link="/"
            className="rounded-lg mt-5 px-10 py-3 font-bold text-base text-white bg-secondary"
          >
            Contact Us
          </LinkButton>
        </div>
        <div className="">
          <Image
            src="/img/home/globe.png"
            alt="globe"
            className="basis-2/4"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
