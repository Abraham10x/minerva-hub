import { FC, useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu, IoChevronDown } from "react-icons/io5";
import Image from "next/image";

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="shadow-md w-full xl:static lg:static md:static sm:fixed top-0 left-0 bg-white sm:px-10 z-40">
      <div className="md:flex items-center justify-between  py-4 px-7 sm:px-0 xl:container">
        <Link legacyBehavior href="/">
          <figure>
            <Image 
              className="w-1/2 md:w-full z-[999]" 
              alt='logo'  
              src="/img/brand-identity.png"
              width={500}
              height={500}
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
              <a className="md:px-6 lg:px-3 hover:text-green duration-500 text-base">
                Home
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <div className="dropdown">
              <Link legacyBehavior href="">
                <a className="md:px-6 lg:px-3 hover:text-green duration-500 text-base">
                  Guidelines <IoChevronDown className="inline mb-1 ml-1" />
                </a>
              </Link>
              <div className="dropdown-content px-3 hover:text-green duration-500 text-base">
                <Link href="/guidelines/individual" className="nav-color lg:py-2">
                  Individual
                </Link>
                <Link
                  href="/guidelines/service"
                  className="nav-color my-5 lg:my-0 lg:py-2 xl:my-0"
                >
                  Service Companies
                </Link>
                <Link href="/guidelines/support" className="nav-color lg:py-2">
                  Support
                </Link>
                <Link
                  href="/guidelines/operators"
                  className="nav-color mt-5 mb-3 lg:py-2 lg:my-0 xl:my-0"
                >
                  Operators
                </Link>
              </div>
            </div>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 mb-7 mt-0 font-semibold font-sans">
            <Link legacyBehavior href="/faqs">
              <a className="md:px-6 lg:px-3 hover:text-green duration-500 text-base">
                FAQs
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <Link legacyBehavior href="/nciFund">
              <a className="md:px-6 lg:px-3 hover:text-green duration-500 text-base">
                NCI Fund
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <Link legacyBehavior href="/whistleBlower">
              <a className="md:px-6 lg:px-3 hover:text-green duration-500 text-base">
                Whistle Blower
              </a>
            </Link>
          </li>
          <li className="lg:ml-0 xl:ml-8 text-xl md:my-8 sm:my-0 my-7 font-semibold font-sans">
            <Link
              legacyBehavior
              href="/auth/login"
              className="xl:mx-8 xl:ml-36"
            >
              <a className="pointer md:ml-5 xl:ml-14 text-center text-white font-semibold rounded focus:outline-none bg-green border-2 border-green py-2 px-10 shadow-lg hover:bg-green/80 hover:border-green/80 ">
                Login
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
