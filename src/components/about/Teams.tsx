import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiTwitterFill,
} from "react-icons/ri";
import team from "../../components/about/TeamData";

const Team: FC = () => {
  return (
    <div className="container sm:px-10 2xl:px-0 mt-36">
      <h2 className="text-5xl text-center font-bold my-7">Our Core Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
        {team.map((item) => (
          <div className="text-center mt-6">
            <div className="">
              <Image
                className="w-10/12 m-auto  rounded-lg"
                alt={item.imagealt}
                src={item.image}
                width={500}
                height={500}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl text-[#2E2F6E] font-bold font-sans">
                {item.name}
              </h3>
              <span className="text-base font-medium">{item.role}</span>
              <div className="mt-5 flex justify-center items-center text-[#2E2F6E] gap-3">
                <Link className="mr-3" href="#">
                  <RiFacebookCircleFill size={25} />
                </Link>
                <Link className="mr-3" href="#">
                  <RiTwitterFill size={25} />
                </Link>
                <Link className="mr-3" href="#">
                  <RiLinkedinBoxFill size={25} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
