import Image from "next/image";
import { FC } from "react";

const parnters = [
  "/img/home/partner/oracle.svg",
  "/img/home/partner/morpheus.svg",
  "/img/home/partner/samsung.svg",
  "/img/home/partner/monday.svg",
  "/img/home/partner/segment.svg",
];

const Parnter: FC = () => {
  return (
    <div className="mb-24 mt-44 text-center container sm:px-10">
      <h3 className="text-center font-bold text-xl">
        Trusted By Over 100+ Startups and freelance business
      </h3>
      <div className="flex flex-wrap gap-6 mt-6 justify-center">
        {parnters.map((data, index) => (
          <Image
            data-aos="flip-down"
            src={data}
            alt="oracle"
            width={150}
            height={150}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Parnter;
