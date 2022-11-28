import { FC, useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu, IoChevronDown } from "react-icons/io5";
import Image from "next/image";

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="shadow-md w-full xl:static lg:static md:static sm:fixed top-0 left-0 bg-white sm:px-10 z-40">
      <div className="md:flex items-center justify-between  py-7 lg:py-0 px-7 sm:px-0 xl:container">
        <Link legacyBehavior href="/">
          <figure>
            <Image
              className=" z-[999]"
              alt="logo"
              src="/img/brand-identity.png"
              width={200}
              height={200}
            />
          </figure>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[2] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[4.8rem] sm:top-[4.7rem]" : "top-[-1000px]"
          }`}
        >
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <Link legacyBehavior href="/">
              <a className="md:px-6 lg:px-3 hover:text-secondary/80 duration-500 text-base">
                Home
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <Link legacyBehavior href="/about">
              <a className="md:px-6 lg:px-3 hover:text-secondary/80 duration-500 text-base">
                About Us
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <div className="dropdown">
              <Link legacyBehavior href="">
                <a className="md:px-6 lg:px-3 hover:text-secondary/80 duration-500 text-base">
                  Products <IoChevronDown className="inline mb-1 ml-1" />
                </a>
              </Link>
              <div className="dropdown-content px-3 hover:text-secondary/80 duration-500 text-base">
                <Link
                  href="/guidelines/individual"
                  className="nav-color lg:py-2"
                >
                  Plux App
                </Link>
                <Link
                  href="/guidelines/service"
                  className="nav-color my-5 lg:my-0 lg:py-2 xl:my-0"
                >
                  Core Banking App
                </Link>
                <Link
                  href="/product/school"
                  className="nav-color mt-5 mb-3 lg:py-2 lg:my-0 xl:my-0"
                >
                  School Management App
                </Link>
              </div>
            </div>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 mb-7 mt-0 font-semibold font-sans">
            <Link legacyBehavior href="/faqs">
              <a className="md:px-6 lg:px-3 hover:text-secondary/80 duration-500 text-base">
                FAQs
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <Link legacyBehavior href="/careers">
              <a className="md:px-6 lg:px-3 hover:text-secondary/80 duration-500 text-base">
                Careers
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <Link legacyBehavior href="/contact" className="xl:mx-8 xl:ml-36">
              <a className="pointer md:ml-5 xl:ml-14 text-center text-white font-semibold rounded-lg focus:outline-none bg-blue border-2 border-green py-3 px-6 shadow-xl hover:bg-blue/80 ">
                Contact Us
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
