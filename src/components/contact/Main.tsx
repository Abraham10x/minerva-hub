import { FC } from "react";
import Image from "next/image";
import Form from "./Form";

const Main: FC = () => {
  return (
    <div className="bg-grayBg">
      <div className="container sm:px-10 2xl:px-0 py-28">
        <div className="flex flex-col sm:flex-row gap-x-5 gap-y-12 ">
          <div className="h-96 md:h-full flex flex-col justify-between items-center md:items-center sm:w-full basis-1/3 gap-5">
            <div className="flex rounded-xl w-full md:w-80 p-4  bg-[#FFFFFF]">
              <div className="rounded-full bg-[#bbbbbb] w-14 h-14 flex">
                <Image
                  className="w-7/12 m-auto"
                  alt="logo"
                  src="/img/contact/phoneicon.svg"
                  width={10}
                  height={10}
                />
              </div>
              <div className="flex-col mx-3">
                <span className="text-xs text-[#868383]">
                  Call us on mobile
                </span>
                <p className="text-sm text-[#000000] font-bold">09033824052</p>
              </div>
            </div>
            <div className="flex rounded-xl w-full md:w-80 p-4  bg-[#FFFFFF]">
              <div className="rounded-full bg-[#bbbbbb] w-14 h-14 flex ">
                <Image
                  className="w-7/12 m-auto"
                  alt="logo"
                  src="/img/contact/mailicon.svg"
                  width={10}
                  height={10}
                />
              </div>
              <div className="flex-col mx-3">
                <span className="text-xs text-[#868383]">
                  You can also send an email to
                </span>
                <p className="text-sm text-[#000000] font-bold">
                  info@myminervahub.com
                </p>
              </div>
            </div>
            <div className="flex rounded-xl w-full md:w-80 p-4  bg-[#FFFFFF]">
              <div className="rounded-full bg-[#bbbbbb] w-14 h-14 flex ">
                <Image
                  className="w-7/12 m-auto"
                  alt="logo"
                  src="/img/contact/instagramicon.svg"
                  width={10}
                  height={10}
                />
              </div>
              <div className="flex-col mx-3">
                <span className="text-xs text-[#868383]">
                  Follow us on Instagram
                </span>
                <p className="text-sm text-[#000000] font-bold">
                  {" "}
                  @myminervahub
                </p>
              </div>
            </div>
            <div className="flex rounded-xl w-full md:w-80 p-4  bg-[#FFFFFF]">
              <div className="rounded-full bg-[#bbbbbb] w-14 h-14 flex">
                <Image
                  className="w-7/12 m-auto"
                  alt="logo"
                  src="/img/contact/twittericon.svg"
                  width={10}
                  height={10}
                />
              </div>
              <div className="flex-col mx-3">
                <span className="text-xs text-[#868383]">
                  Follow us on Twitter
                </span>
                <p className="text-sm text-[#000000] font-bold">
                  @myminervahub
                </p>
              </div>
            </div>
          </div>
          <div className="basis-3/5">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
