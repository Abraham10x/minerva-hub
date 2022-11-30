import Image from "next/image";
import { FC } from "react";

const testimonial = [
  {
    id: 1,
    body: `              
      Is be upon sang fond must shew. Really boy law county she unable
      her sister. Feet you off its like like six. Among sex are leave
      law built now. In built table in an rapid blush. Merits behind on
      afraid or warmly. Believing neglected so so allowance existence
      departure in. In design active temper be uneasy.
    `,
    image: "/img/home/taylor.png",
    name: "Angela Taylor",
    company: "CEO GetNextDesign",
  },
  {
    id: 2,
    body: `              
      Is be upon sang fond must shew. Really boy law county she unable
      her sister. Feet you off its like like six. Among sex are leave
      law built now. In built table in an rapid blush. Merits behind on
      afraid or warmly. Believing neglected so so allowance existence
      departure in. In design active temper be uneasy.
    `,
    image: "/img/home/taylor.png",
    name: "Angela Taylor",
    company: "CEO GetNextDesign",
  },
  {
    id: 3,
    body: `              
      Is be upon sang fond must shew. Really boy law county she unable
      her sister. Feet you off its like like six. Among sex are leave
      law built now. In built table in an rapid blush. Merits behind on
      afraid or warmly. Believing neglected so so allowance existence
      departure in. In design active temper be uneasy.
    `,
    image: "/img/home/taylor.png",
    name: "Angela Taylor",
    company: "CEO GetNextDesign",
  },
];

const Testimonial: FC = () => {
  return (
    <div className="relative">
      <div className="my-20 container sm:px-10 mt-44">
        <p className="font-bold text-base text-blue-blue-600">Testimonials</p>
        <h3 className="font-bold text-4xl my-4 sm:w-2/6">
          Check what our clients are saying
        </h3>
        <div className="flex flex-col sm:flex-row gap-10 my-16">
          {testimonial.map((data, index) => (
            <div
              key={index}
              className="basis-2/6 border-2 rounded-2xl px-5 py-6"
            >
              <p className="font-light text-base italic pb-5 border-b text-gray-500">
                {data.body}
              </p>
              <div className="flex flex-row mt-7 gap-8">
                <div className="rounded-full  bg-blue">
                  {" "}
                  <Image
                    className="rounded-full object-cover"
                    src={data.image}
                    alt="taylor"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="font-bold text-base">{data.name}</h5>
                  <p className="italic text-gray-500 text-sm">{data.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        className="absolute -bottom-10 right-0"
        src="/img/products/product-curve.svg"
        alt="Icon"
        width={150}
        height={150}
      />
    </div>
  );
};

export default Testimonial;
