import Image from "next/image";
import { FC } from "react";

const Values: FC = () => {
  return (
    <div className="relative">
      <div className="container sm:px-10 2xl:px-0 pt-10 lg:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-auto mb-36 mt-10">
          <div className="px-8 py-16 rounded-lg border border-[#DFDFD]">
            <h2 className="text-2xl font-bold mb-3 mt-2">
              Do believing oh disposing to supported
            </h2>
            <span className="text-base text-[#64607D]">
              Among sex are leave law built now. In built table in an rapid
              blush. Merits behind on afraid or warmly.
            </span>
          </div>
          <div className="px-8 py-16 rounded-lg border border-[#DFDFD] shadow-2xl">
            <h2 className="text-2xl font-bold mb-3 mt-2">
              Do believing oh disposing to supported
            </h2>
            <span className="text-base text-[#64607D]">
              Among sex are leave law built now. In built table in an rapid
              blush. Merits behind on afraid or warmly.
            </span>
          </div>
          <div className="px-8 py-16 rounded-lg border border-[#DFDFD]">
            <h2 className="text-2xl font-bold mb-3 mt-2">
              Do believing oh disposing to supported
            </h2>
            <span className="text-base text-[#64607D]">
              Among sex are leave law built now. In built table in an rapid
              blush. Merits behind on afraid or warmly.
            </span>
          </div>
        </div>
        <Image
          className="absolute right-0 top-40"
          alt="logo"
          src="/img/about/aboutpolygon.svg"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Values;
