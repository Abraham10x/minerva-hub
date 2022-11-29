import { FC } from "react";
import Image from "next/image";

const BenefictsData = [
  {
    image: "/img/contact/instagramicon.svg",
    header: "No Extra Fee",
    body: `
        Among sex are leave law built now. In built table in an rapid
        blush. Merits behind on afraid or warmly.`,
  },
  {
    image: "/img/contact/instagramicon.svg",
    header: "No Extra Fee",
    body: `
        Among sex are leave law built now. In built table in an rapid
        blush. Merits behind on afraid or warmly.`,
  },
  {
    image: "/img/contact/instagramicon.svg",
    header: "No Extra Fee",
    body: `
        Among sex are leave law built now. In built table in an rapid
        blush. Merits behind on afraid or warmly.`,
  },
  {
    image: "/img/contact/instagramicon.svg",
    header: "No Extra Fee",
    body: `
        Among sex are leave law built now. In built table in an rapid
        blush. Merits behind on afraid or warmly.`,
  },
];

const Choose: FC = () => {
  return (
    <div className="container sm:px-10 2xl:px-0 pt-8">
      <div className="relative py-16 flex flex-col items-center bg-[#F3F7FA] m-auto rounded-lg">
        <Image
          className="absolute left-9 top-[-30px]"
          alt="logo"
          src="/img/about/46.svg"
          width={100}
          height={100}
        />
        <span className="font-bold text-[#3734A9] text-lg">WHY MINERVAHUB</span>
        <h2 className="mt-3 text-5xl font-bold">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 lg:px-20 pt-20">
          {BenefictsData.map((data, index) => (
            <div
              className="flex flex-row bg-white py-10 px-6 rounded-lg"
              key={index}
            >
              <div className="w-32 h-14 mr-6  flex rounded-full bg-[#F7ECFD]">
                <Image
                  className="w-7/12 m-auto"
                  alt="logo"
                  src={data.image}
                  width={10}
                  height={10}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{data.header}</h3>
                <span className="text-lg text-[#757095]">{data.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
