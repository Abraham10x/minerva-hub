import { LinkButton } from "@components/general/Button";
import Image from "next/image";
import { FC } from "react";

const CTA: FC = () => {
  return (
    <div className="container sm:px-10 2xl:px-0 mt-10 mb-32">
      <div className="bg-[#3734A9] rounded-3xl flex flex-col sm:flex-row justify-around py-20 px-10 relative">
        <div>
          <h3 className="text-5xl font-semibold text-[#F5F2FF]">
            Subscribe to get updated
          </h3>
          <p className="my-6 text-lg text-[#F5F2FF] w-full lg:w-5/6">
            Subscribe to our newsletter today and get updated with any new
            products, product update etc
          </p>
        </div>
        <LinkButton
          link="/contact"
          className="px-12 py-4 border rounded-lg border-[#FAFAFA] font-medium text-base text-[#FAFAFA] my-6"
        >
          Get started
        </LinkButton>
        <Image
          className="z-10 absolute bottom-0 right-8"
          src="/img/products/cta-curve.svg"
          alt="icon"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default CTA;
