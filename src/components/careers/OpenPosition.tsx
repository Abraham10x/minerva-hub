import { Button } from "@components/general/Button";
import { FC } from "react";
import { RiAddFill } from "react-icons/ri";

const OpenPosition: FC = () => {
  return (
    <div className="container sm:px-10 2xl:px-0 pt-10 lg:pt-10">
      <h2 className="font-bold text-4xl text-[#2E2F6E] text-center">
        Open Positions
      </h2>
      <div className=" my-24 flex flex-col px-20">
        <div className="flex flex-row justify-between px-10 sm:px-20 py-6 shadow-2xl cursor-pointer rounded-full">
          <div>
            <h4 className="font-bold text-lg">Frontend Engineer</h4>
            <p className="text-lg">Makurdi, Nigeria</p>
          </div>
          <Button className="">
            <RiAddFill
              size={25}
              className="text-secondary hover:text-secondary/70"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OpenPosition;
