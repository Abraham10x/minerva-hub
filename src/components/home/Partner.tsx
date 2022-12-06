import Image from "next/image";
import { FC } from "react";

const parnters = [
  "/img/home/partner/meta.svg",
  "/img/home/partner/flutterwave.svg",
  "/img/home/partner/paystack.svg",
  "/img/home/partner/mastercard.svg",
  "/img/home/partner/buypower.svg",
];

const Parnter: FC = () => {
  return (
    <div className="mb-24 text-center container sm:px-10">
      <h3 className="text-center font-bold text-4xl">Our Trusted Parnters</h3>
      <div className="flex flex-wrap gap-6 mt-6 justify-center">
        {parnters.map((data, index) => (
          <Image
            data-aos="flip-down"
            src={data}
            className="w-auto h-[10%]"
            alt="parnters lcon"
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
