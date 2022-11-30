import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocialIcons";
// import FooterContact from "./FooterContact";

const Footer: FC = () => {
  return (
    <footer className="bg-white">
      <div className="container pt-12 pb-8 sm:px-10 2xl:px-0">
        <div className="flex flex-col sm:flex-row justify-center pb-10 text-center sm:text-left gap-10">
          <div className="basis-[35%]">
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
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence.
            </p>
            <div>
              <SocialIcons />
            </div>
          </div>
          <FooterLinks
            header="Company"
            data={[
              { url: "/", linkText: "About Us" },
              { url: "/", linkText: "Careers" },
              { url: "/", linkText: "FAQs" },
              { url: "/", linkText: "Contact Us" },
            ]}
          />
          <FooterLinks
            header="Resources"
            data={[
              { url: "/", linkText: "Contract" },
              { url: "/", linkText: "Proposal Template" },
              { url: "/", linkText: "Tuturoial" },
              { url: "/", linkText: "Invoice Template" },
            ]}
          />
          <FooterLinks
            header="Products"
            data={[
              { url: "/", linkText: "School Managment Web App" },
              { url: "/", linkText: "Core Banking Mobile App" },
              { url: "/", linkText: "Plux Mobile App" },
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
