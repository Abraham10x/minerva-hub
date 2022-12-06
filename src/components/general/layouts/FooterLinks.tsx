import { FC } from "react";
import Link from "next/link";

interface LinkInfo {
  url: any;
  linkText: any;
}

interface IProps {
  header: any;
  data: LinkInfo[];
}

const FooterLinks: FC<IProps> = ({ header, data }: IProps) => {
  return (
    <div className="basis-full sm:basis-[40%] lg:basis-2/12">
      <h4 className="mb-4 font-bold text-2xl font-sans">{header}</h4>
      <ul>
        {data.map((items, index) => (
          <li className="mb-2" key={index}>
            <Link legacyBehavior href={items.url}>
              <a className="hover:text-blue-light duration-500 text-base text-gray-900 font-medium">
                {items.linkText}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
