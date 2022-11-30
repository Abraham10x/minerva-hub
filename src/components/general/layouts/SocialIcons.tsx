import Link from "next/link";
import { FC } from "react";
import {
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiMessage2Fill,
  RiInstagramFill,
} from "react-icons/ri";

const SocialIcons: FC = () => {
  return (
    <div className="flex flex-row space-x-3 text-blue-blue-700 justify-center sm:justify-start mt-5">
      <Link href="#">
        <RiTwitterFill size={22} />
      </Link>
      <Link href="#">
        <RiFacebookCircleFill size={22} />
      </Link>
      <Link href="#">
        <RiLinkedinBoxFill size={22} />
      </Link>
      <Link href="#">
        <RiMessage2Fill size={22} />
      </Link>
      <Link href="#">
        <RiInstagramFill size={22} />
      </Link>
    </div>
  );
};

export default SocialIcons;
