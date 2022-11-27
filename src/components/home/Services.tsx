import { FC } from "react";
import Image from "next/image";

const serviceData = [
  {
    image: "/img/home/web-icon.svg",
    header: "Web Development",
    body: `Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.`,
  },
  {
    image: "/img/home/mobile-icon.svg",
    header: "Mobile Development",
    body: `Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.`,
  },
  {
    image: "/img/home/software.svg",
    header: "Software Development",
    body: `Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.`,
  },
];

const Servces: FC = () => {
  return (
    <div className="container gap-y-24 gap-x-14 pb-32 sm:px-10">
      <h2 className="font-bold text-5xl w-2/4 text-blue">
        We offer solutions for your business
      </h2>
      <div className="flex flex-col sm:flex-row mt-24 gap-10">
        {serviceData.map((data, index) => (
          <div className="basis-1/3" key={index}>
            <Image src={data.image} alt="web-icon" width={60} height={60} />
            <h5 className="font-bold text-base mt-6 mb-2">{data.header}</h5>
            <p className="text-sm text-gray-700 font-medium w-4/5">
              {data.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servces;
