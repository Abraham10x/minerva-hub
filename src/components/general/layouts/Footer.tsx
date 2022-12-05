import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocialIcons";
// import FooterContact from "./FooterContact";

const Footer: FC = () => {
  return (
    <footer className="bg-white">
      <div className="container pt-12 pb-8 2xl:px-0">
        <div className="flex flex-col sm:flex-row justify-center flex-wrap pb-10 text-center sm:text-left gap-y-10 sm:gap-20 lg:gap-10">
          <div className="basis-full sm:basis-[40%] lg:basis-[35%]">
            <Link href="/">
              <figure>
                <div className="relative mx-auto sm:mx-0 mb-5 w-full">
                  <Image
                    className="mx-auto sm:mx-0"
                    src="/img/brand-identity.png"
                    alt="company logo"
                    width={240}
                    height={240}
                  />
                </div>
              </figure>
            </Link>
            <p className="text-gray-900 font-medium text-base ">
              We provide software products and services to corporate entities as
              well as individuals.
            </p>
            <div>
              <SocialIcons />
            </div>
          </div>
          <FooterLinks
            header="Company"
            data={[
              { url: "/about", linkText: "About Us" },
              { url: "/careers", linkText: "Careers" },
              { url: "/faqs", linkText: "FAQs" },
              { url: "/contact", linkText: "Contact Us" },
            ]}
          />
          <FooterLinks
            header="Resources"
            data={[
              { url: "/about/#core-values", linkText: "Our Values" },
              { url: "/about/#core-team", linkText: "Core Team" },
              { url: "/#our-products", linkText: "Products" },
              { url: "/careers/#open-postions", linkText: "Open Postions" },
            ]}
          />
          <FooterLinks
            header="Products"
            data={[
              { url: "/product/school", linkText: "School Managment Web App" },
              {
                url: "/product/corebanking",
                linkText: "Core Banking Mobile App",
              },
              { url: "/product/plux", linkText: "Plux Mobile App" },
            ]}
          />
        </div>
      </div>
      <div className="py-5 border-t border-gray-500 flex flex-row justify-center items-center container">
        <hr className="bg-white" />
        <p className="font-normal mr-2 text-gray-900 text-center">
          Copyright @ Minerva Hub 2022. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
