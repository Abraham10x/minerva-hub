import Image from "next/image";
import { FC } from "react";
import { FaLightbulb } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

const Values: FC = () => {
  return (
    <div className="relative" id="core-values">
      <div className="container sm:px-10 2xl:px-0 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-30 gap-10 m-auto mb-36">
          <div
            data-aos="flip-right"
            className="px-8 py-16 rounded-lg border border-[#DFDFD]"
          >
            <FaLightbulb size={32} color="#4F46BA" className="mb-5" />
            <h2 className="text-2xl font-bold mb-3 mt-2">Creativity</h2>
            <span className="text-base text-[#64607D]">
              We inspire, drive ourselves to provide products and help clients
              find innovative solutions and create opportunities out of
              problems.
            </span>
          </div>
          <div
            data-aos="flip-right"
            className="px-8 py-16 rounded-lg border border-[#DFDFD] shadow-2xl"
          >
            <FaHandshake size={32} color="#4F46BA" className="mb-5" />
            <h2 className="text-2xl font-bold mb-3 mt-2">Integrity</h2>
            <span className="text-base text-[#64607D]">
              We keep our word. We conduct our businesses ethically and with
              best business practices.
            </span>
          </div>
          <div
            data-aos="flip-right"
            className="px-8 py-16 rounded-lg border border-[#DFDFD]"
          >
            <FaTools size={32} color="#4F46BA" className="mb-5" />
            <h2 className="text-2xl font-bold mb-3 mt-2">Innovation</h2>
            <span className="text-base text-[#64607D]">
              We initiate new processes, services and products to affect
              positive changes.
            </span>
          </div>
        </div>
        <Image
          className="absolute right-0 top-40 -z-10"
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
