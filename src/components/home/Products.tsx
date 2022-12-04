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
          <div className="container sm:px-10 flex flex-col lg:flex-row gap-y-10">
            <div className=" basis-[45%] mt-32">
              <h3 className="font-bold text-[2.8rem] leading-tight capitalize">
                Core Banking Application (OZI)
              </h3>
              <p className="my-5 text-lg">
                Our Core Banking Application is an improved Banking platform As
                A Service (BAAS), for Microfinance Banks and Institutions,
                Thrift operators, Cooperative Societies, Fintech, Savings and
                Loans, Micro-Credit etc
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
                    Unlimited accounts opening for all customers/member
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
                    Automated cashflow management and tracking
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
                    Savings and Loan Management
                  </p>
                </div>
              </div>
              <LinkButton
                link="/product/corebanking"
                className="rounded-lg mt-5 px-10 py-3 font-bold text-base text-white bg-blue hover:bg-blue/70"
              >
                Get Started
              </LinkButton>
            </div>
            <div className="basis-[55%] mt-10 lg:mt-0">
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
          <div className="container sm:px-10 flex flex-col lg:flex-row-reverse gap-y-10">
            <div className=" basis-[45%] mt-32">
              <h3 className="font-bold text-[2.8rem] leading-10 capitalize">
                Plux
              </h3>
              <p className="my-5 text-lg">
                An electricity bill payment mobile app for both prepaid and
                postpaid customers.
              </p>
              <div className="my-4">
                <div className="flex gap-5">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">Zero commission charge</p>
                </div>
                <div className="flex gap-5 my-3">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">
                    Can be used to make payments for both prepaid and postpaid
                  </p>
                </div>
                <div className="flex gap-5">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">Easy payment tracking</p>
                </div>
              </div>
              <LinkButton
                link="/product/plux"
                className="rounded-lg mt-5 px-10 py-3 font-bold text-base text-white bg-blue hover:bg-blue/70"
              >
                Get Started
              </LinkButton>
            </div>
            <div className="basis-[55%] mt-10 lg:mt-0">
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
          <div className="container sm:px-10 flex flex-col lg:flex-row gap-x-32 gap-y-10">
            <div className=" basis-[45%] mt-32">
              <h3 className="font-bold text-[2.8rem] leading-tight capitalize">
                School Management System
              </h3>
              <p className="my-5 text-lg">
                It helps schools achieve great efficiency in all functions. The
                best solution for managing daily school operations. It allows
                school to manage registration, admissions, academic calendar,
                attendance, and more.
              </p>
              <div className="my-4">
                <div className="flex gap-5">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">Free Sign up and usage</p>
                </div>
                <div className="flex gap-5 my-3">
                  <Image
                    src="/img/home/check.svg"
                    alt="check-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-lg font-medium">
                    Generate school fees payment receipts and invoices
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
                    Monitor fees payments accordingly
                  </p>
                </div>
              </div>
              <LinkButton
                link="/product/school"
                className="rounded-lg mt-5 px-10 py-3 font-bold text-base text-white bg-blue hover:bg-blue/70"
              >
                Get Started
              </LinkButton>
            </div>
            <div className="basis-[55%] mt-10 lg:mt-0">
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
