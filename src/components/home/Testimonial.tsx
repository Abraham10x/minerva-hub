import Image from "next/image";
import { FC } from "react";

const testimonial = [
  {
    id: 1,
    body: `              
        “ School Management with Minervahub is on point as we have 
        reduced our cost to the barest minimum and increased the 
        value we give to our students through impacting of education 
        as the application runs our activities for us seamlessly ”
    `,
    image: "/img/home/user-photo.png",
    name: "Janet Nana Jacobs",
    company: "(Proprietor) Little Gifts Academy",
  },
  {
    id: 2,
    body: `              
        “ We are already opening branches in less than a month we 
        started using MinervaHub’s Core Banking Application ”
    `,
    image: "/img/home/user-photo.png",
    name: "Uchenna Ojukwu",
    company: "(MD) Royal Marshal Cooperative",
  },
  {
    id: 3,
    body: `              
      “ Minervahub has been a blessing in disguise since we start 
      partnering with them we have been growing ”
    `,
    image: "/img/home/user-photo.png",
    name: "Jacob Asobo",
    company: "(General Manager) Desal-mcs",
  },
];

const Testimonial: FC = () => {
  return (
    <div className="relative">
      <div className="my-20 container sm:px-10 mt-44">
        <p className="font-bold text-base text-blue-blue-600">Testimonials</p>
        <h3 className="font-bold text-4xl my-4 lg:w-2/6">
          Check what our clients are saying
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-16 h-[52rem] sm:h-[34rem] lg:h-72 ">
          {testimonial.map((data, index) => (
            <div
              key={index}
              className="basis-2/6 border-2 relative rounded-2xl px-5 py-6"
            >
              <p className="font-light text-base italic pb-5">{data.body}</p>
              <div className="flex flex-row mt-7 gap-6 absolute bottom-5 w-[90%] border-t text-gray-500 pt-3">
                <div className="rounded-full">
                  {" "}
                  <Image
                    className="rounded-full object-cover"
                    src={data.image}
                    alt="taylor"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col gap-1">
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
