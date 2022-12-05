import { LinkButton } from "@components/general/Button";
import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="bg-careerBg bg-no-repeat bg-cover mt-[5.6rem] lg:h-screen">
      <div className="container sm:px-10 2xl:px-0 flex flex-col sm:flex-row gap-10 pt-32 align-middle">
        <div className="flex flex-col basis-5/12 mt-5 lg:mt-28">
          <h1 className="text-6xl my-4 font-sans text-center sm:text-left font-bold text-white">
            Plux
          </h1>
          <p className="text-xl text-[#FAFAFA]">
            An electricity bill payment mobile app for both prepaid and postpaid
            customers.
          </p>
          <div className="flex flex-col md:flex-row mt-8">
            <LinkButton
              link="/"
              className="flex flex-row bg-black text-white rounded-lg px-6 py-3 m-2"
            >
              <div>
                <Image
                  className="z-10"
                  src="/img/products/AS.png"
                  alt="team image"
                  width={40}
                  height={38}
                />
              </div>
              <div className="flex flex-col ml-3 text-left justify-center ">
                <span className="text-xs">Download on the</span>
                <span className="text-2xl">App Store</span>
              </div>
            </LinkButton>
            <LinkButton
              link="https://play.google.com/store/apps/details?id=com.myminervahub.plutus"
              target="_blank"
              className="flex flex-row bg-black text-white rounded-lg px-4 py-3 m-2"
            >
              <div>
                <Image
                  className="z-10"
                  src="/img/products/PS.png"
                  alt="team image"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col ml-1 text-left  justify-center ">
                <span className="text-xs">GET IT ON</span>
                <span className="text-2xl">Google Play</span>
              </div>
            </LinkButton>
          </div>
        </div>
        <div
          className="basis-7/12 flex justify-center items-center relative lg:bottom-40"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <Image
            className=""
            src="/img/products/plux/plux.png"
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
