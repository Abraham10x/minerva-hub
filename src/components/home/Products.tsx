import { LinkButton } from "@components/general/Button";
import Image from "next/image";
import { FC } from "react";

const Product: FC = () => {
  return (
    <div className="">
      <h2 className="font-bold text-5xl text-blue container sm:px-10">
        Products
      </h2>
      <div className="mt-10">
        {/* first product */}
        <div className="bg-product bg-top bg-no-repeat bg-cover">
          <div className="container sm:px-10 flex flex-col sm:flex-row gap-y-10">
            <div className=" basis-[45%] mt-32">
              <h3 className="font-bold text-[2.8rem] leading-10">
                All payments are linked to your Financy account
              </h3>
              <p className="my-5 text-lg">
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.{" "}
              </p>
              <div className="my-4">
                <div className="flex gap-5">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">
                    Get Overview at a glance
                  </p>
                </div>
                <div className="flex gap-5 my-3">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">
                    Deoposit funds easily, securlity
                  </p>
                </div>
                <div className="flex gap-5">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">
                    Get Overview at a glance
                  </p>
                </div>
              </div>
              <LinkButton
                link="/"
                className="rounded-lg mt-5 px-10 py-3 font-bold text-base text-white bg-blue"
              >
                Get Started
              </LinkButton>
            </div>
            <div data-aos="zoom-out-up" className="basis-[55%]">
              <Image
                src="/img/home/Banking.png"
                alt="Banking App"
                width={2000}
                height={2000}
              />
            </div>
          </div>
        </div>

        {/* second products */}

        <div className="bg-product bg-top bg-no-repeat bg-cover">
          <div className="container sm:px-10 flex flex-col sm:flex-row-reverse gap-y-10">
            <div className=" basis-[45%] mt-32">
              <h3 className="font-bold text-[2.8rem] leading-10">
                All payments are linked to your Financy account
              </h3>
              <p className="my-5 text-lg">
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.{" "}
              </p>
              <div className="my-4">
                <div className="flex gap-5">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">
                    Get Overview at a glance
                  </p>
                </div>
                <div className="flex gap-5 my-3">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">
                    Deoposit funds easily, securlity
                  </p>
                </div>
                <div className="flex gap-5">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">
                    Get Overview at a glance
                  </p>
                </div>
              </div>
              <LinkButton
                link="/"
                className="rounded-lg mt-5 px-10 py-3 font-bold text-base text-white bg-blue"
              >
                Get Started
              </LinkButton>
            </div>
            <div data-aos="zoom-out-up" className="basis-[55%]">
              <Image
                src="/img/home/plux.png"
                alt="Banking App"
                width={2000}
                height={2000}
              />
            </div>
          </div>
        </div>

        {/* third Product */}
        <div className="bg-product bg-top bg-no-repeat bg-cover">
          <div className="container sm:px-10 flex flex-col sm:flex-row gap-x-32 gap-y-10">
            <div className=" basis-[45%] mt-32">
              <h3 className="font-bold text-[2.8rem] leading-10">
                All payments are linked to your Financy account
              </h3>
              <p className="my-5 text-lg">
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.{" "}
              </p>
              <div className="my-4">
                <div className="flex gap-5">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">
                    Get Overview at a glance
                  </p>
                </div>
                <div className="flex gap-5 my-3">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">
                    Deoposit funds easily, securlity
                  </p>
                </div>
                <div className="flex gap-5">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">
                    Get Overview at a glance
                  </p>
                </div>
              </div>
              <LinkButton
                link="/"
                className="rounded-lg mt-5 px-10 py-3 font-bold text-base text-white bg-blue"
              >
                Get Started
              </LinkButton>
            </div>
            <div data-aos="zoom-out-up" className="basis-[55%]">
              <Image
                src="/img/home/school.png"
                alt="Banking App"
                width={2000}
                height={2000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
