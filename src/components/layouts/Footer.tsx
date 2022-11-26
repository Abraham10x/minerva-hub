import Image from "next/image";
import { FC } from "react";
// import FooterContact from "./FooterContact";

const Footer: FC = () => {
  return (
    <footer className="bg-black border-t-8 border-green ">
      <div className="container pt-12 pb-8 sm:px-10 2xl:px-0">
        <div className="flex flex-col sm:flex-row justify-between pb-10 text-center sm:text-left gap-y-10">
          <div>
            <figure>
              <div className="relative h-28 mx-auto sm:mx-0 sm:h-20 w-full">
                <Image
                  src="/img/home/brand-identity.png"
                  alt="company logo"
                  width={300}
                  height={300}
                />
              </div>
            </figure>
            <p className="text-gray-400 font-semibold text-base mt-8 ">
              © 2022. NCDMB. All Right Reserved.{" "}
            </p>
          </div>
          <div>
            {/* <FooterContact /> */}
          </div>
        </div>
      </div>
      <div className="py-5 border-t border-gray-500 flex flex-row justify-center items-center">
        <hr className="bg-white" />
        <p className="font-normal mr-2 text-neutral">
          Powered by{" "}
          <span className="font-bold underline text-green">
            VASCON Solutions
          </span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
