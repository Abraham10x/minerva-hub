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
            <p className="text-lg text-[#575757] my-10">
              Our Mobile App is now available on Google play store and the Apple
              app store. please click on the appropiate button for your device
            </p>
            <div className="flex flex-col md:flex-row">
              <LinkButton
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
                link="https://play.google.com/store/apps/details?id=com.myminervahub.plutus"
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
          <div className="relative basis-[45%] lg:bottom-24">
            <Image
              data-aos="zoom-in-down"
              className="z-10"
              src="/img/products/plux/plux.png"
              alt="team image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
