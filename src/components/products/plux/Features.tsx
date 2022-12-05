import Image from "next/image";
import { FC } from "react";

const Features: FC = () => {
  return (
    <div className="relative mt-36">
      <div className="container sm:px-10 2xl:px-0 bg-productBg bg-no-repeat bg-center">
        <h2 className="font-bold text-5xl text-[#313131] text-center">
          Core Features
        </h2>
        {/* first */}
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 pt-28">
          <div className="relative basis-[50%] flex justify-center items-center lg:bottom-36">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10 "
              src="/img/products/plux/feature-1.png"
              alt="team image"
              width={700}
              height={700}
            />
            <div className="w-full h-[40%] absolute bottom-28 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Zero commission charge
            </h3>
            <p className="text-lg text-[#575757] mt-8">
              Ye am depending propriety sweetness distrusts belonging collected.
              Smiling mention he in thought equally musical. Wisdom new and
              valley answer. Contented it so is discourse recommend. Man its
              upon him call mile. An pasture he himself believe ferrars besides
              cottage.
            </p>
          </div>
        </div>

        {/* second */}

        <div className="flex flex-col-reverse sm:flex-row-reverse gap-x-36 gap-y-10 py-10 lg:py-0 ">
          <div className="relative basis-[50%] flex justify-center items-center lg:bottom-36">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10"
              src="/img/products/plux/feature-2.png"
              alt="team image"
              width={700}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-32 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              make payments for both prepaid and postpaid
            </h3>
            <p className="text-lg text-[#575757] mt-8">
              Ye am depending propriety sweetness distrusts belonging collected.
              Smiling mention he in thought equally musical. Wisdom new and
              valley answer. Contented it so is discourse recommend. Man its
              upon him call mile. An pasture he himself believe ferrars besides
              cottage.
            </p>
          </div>
        </div>

        {/* third  */}
        <div className="flex flex-col-reverse sm:flex-row gap-x-36 gap-y-10 py-10">
          <div className="relative basis-[50%] flex justify-center items-center lg:bottom-36">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="z-10"
              src="/img/products/plux/feature-3.png"
              alt="team image"
              width={700}
              height={700}
            />
            <div className="w-full h-[40%] absolute lg:bottom-32 bg-blue -z-20"></div>
          </div>
          <div className="mt-10 sm:mt-36 basis-[50%]">
            <h3 className="text-5xl font-semibold text-[#000F37]">
              Easy payment tracking
            </h3>
            <p className="text-lg text-[#575757] mt-8">
              Ye am depending propriety sweetness distrusts belonging collected.
              Smiling mention he in thought equally musical. Wisdom new and
              valley answer. Contented it so is discourse recommend. Man its
              upon him call mile. An pasture he himself believe ferrars besides
              cottage.
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
