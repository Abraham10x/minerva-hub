import Image from "next/image";
import { FC } from "react";

const Features: FC = () => {
  return (
    <div className="relative mt-36">
      <div className="container sm:px-10 2xl:px-0 bg-productBg bg-no-repeat bg-center">
        <h2 className="font-bold text-5xl text-[#313131] text-center">
          Core Features
        </h2>
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-28 ">
          <div className="relative basis-[50%] flex justify-between items-center lg:bottom-36">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 "
              src="/img/products/banking/feature-1.png"
              alt="team image"
              width={700}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-32 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Automated Savings and Loan Management
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              It is clear that modern automation software for financial services
              providers usually comes as a full package, a solution that covers
              every part of the process.
            </p>
          </div>
        </div>

        {/* second */}

        <div className="flex flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 lg:h-[50%]">
          <div className="relative basis-[50%] flex justify-between items-center lg:bottom-36">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10"
              src="/img/products/banking/feature-2.png"
              alt="team image"
              width={700}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-32 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Transactions through Card, USSD and Bank Transfer
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Designated mobile App to perform transactions through Card, USSD
              and Bank Transfer You don’t need Internet data on your phone to
              enjoy the USSD code
            </p>
          </div>
        </div>

        {/* third  */}
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-10 lg:h-screen">
          <div className="relative basis-[50%] flex justify-between lg:bottom-36 items-center">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10"
              src="/img/products/banking/feature-3.png"
              alt="team image"
              width={700}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-32 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Self-customizable notifications
            </h3>
            <p className="text-xl text-[#575757] mt-8">
              Personalized Push notifications are real-time updates and
              reminders that are customized as per the user behaviour and
              journey. We Offer Self-customizable notifications for
              members/customers transactions
            </p>
          </div>
        </div>
      </div>
      <Image
        className="absolute bottom-0 right-0"
        src="/img/products/product-curve.svg"
        alt="Icon"
        width={150}
        height={150}
      />
    </div>
  );
};

export default Features;
