import { LinkButton } from "@components/general/Button";
import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="bg-careerBg bg-no-repeat bg-cover">
      <div className="container sm:px-10 2xl:px-0 flex flex-col sm:flex-row gap-10 py-32 align-middle">
        <div className="flex flex-col basis-5/12 mt-5 lg:mt-28">
          <h1 className="text-6xl my-4 font-sans text-center sm:text-left font-bold text-white">
            Core Banking Application (OZI)
          </h1>
          <p className="text-lg text-[#FAFAFA]">
            Our Core Banking Application is an improved Banking platform As A
            Service (BAAS), for Microfinance Banks and Institutions, Thrift
            operators, Cooperative Societies, Fintech, Savings and Loans,
            Micro-Credit etc
          </p>
          <div className="flex flex-col md:flex-row mt-8">
            <LinkButton
              target="_blank"
              link="#"
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
              target="_blank"
              link="https://play.google.com/store/apps/details?id=com.myminervahub.ozi_signup_ui"
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
              <div className="flex flex-col ml-2 text-left  justify-center ">
                <span className="text-xs">GET IT ON</span>
                <span className="text-2xl">Google Play</span>
              </div>
            </LinkButton>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="basis-7/12 flex justify-center items-center"
        >
          <Image
            className="rounded-3xl"
            src="/img/products/plux/pluxhero.png"
            alt="team image"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
