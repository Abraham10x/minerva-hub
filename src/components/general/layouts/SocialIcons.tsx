import Link from "next/link";
import { FC } from "react";
import {
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiInstagramFill,
  RiMailAddFill,
  RiPhoneFill,
  RiWhatsappFill,
} from "react-icons/ri";

const SocialIcons: FC = () => {
  return (
    <div className="flex flex-row space-x-3 text-blue-blue-700 justify-center sm:justify-start mt-5">
      <Link href="https://twitter.com/myminervahub" target="_blank">
        <RiTwitterFill size={22} />
      </Link>
      <Link href="https://www.facebook.com/myminervahub" target="_blank">
        <RiFacebookCircleFill size={22} />
      </Link>
      {/* <Link href="#" target="_blank">
        <RiLinkedinBoxFill size={22} />
      </Link> */}
      <Link href="https://wa.me/+2349033824052" target="_blank">
        <RiWhatsappFill size={22} />
      </Link>
      <Link href="https://www.instagram.com/myminervahub/" target="_blank">
        <RiInstagramFill size={22} />
      </Link>
      <Link href="mailto:info@myminervahub.com" target="_blank">
        <RiMailAddFill size={22} />
      </Link>
      <Link href="tel:09033824052" target="_blank">
        <RiPhoneFill size={22} />
      </Link>
    </div>
  );
};

export default SocialIcons;
