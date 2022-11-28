import { FC } from "react";

const Beneficts: FC = () => {
  return (
    <div className="container sm:px-10 2xl:px-0">
      <div className="my-28 px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#FFFFFF] border border-[#DFDFD] shadow-2xl m-auto rounded-lg">
        <div>
          <h2 className="text-3xl font-bold">Preference connect astonished</h2>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <div className="bg-[#E9ECF2] w-16 h-16 mr-3"></div>
            <span className="text-[#64607D] font-bold text-lg w-3/5">
              Remove Enjoyed Explain
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#E9ECF2] w-16 h-16 mr-3"></div>
          <span className="text-[#64607D] font-bold text-lg w-3/5">
            Supported Allowance
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#E9ECF2] w-16 h-16 mr-3"></div>
          <span className="text-[#64607D] font-bold text-lg w-10/12">
            Stable work & Lightweight
          </span>
        </div>
      </div>
      <div className="px-10 py-12 bg-[#F8F9FD] rounded-lg flex flex-col sm:flex-row gap-y-3 m-auto justify-between">
        <div>
          <h2 className="text-3xl font-bold w-2/3">
            Track your crytpo portfolio on the best way possible
          </h2>
        </div>
        <button className="bg-[#4F46BA] rounded-lg px-2 py-0 w-44 h-14 text-white">
          Check It Out
        </button>
      </div>
    </div>
  );
};

export default Beneficts;
