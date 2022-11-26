import Link from "next/link";
import { FC } from "react";
import {
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiTwitterFill,
} from "react-icons/ri";

const SocialIcons: FC = () => {
  return (
    <div className="flex flex-row space-x-3 text-white justify-start">
      <Link href="#">
        <RiTwitterFill size={22} />
      </Link>
      <Link href="#">
        <RiFacebookCircleFill size={22} />
      </Link>
      <Link href="#">
        <RiLinkedinBoxFill size={22} />
      </Link>
    </div>
  );
};

export default SocialIcons;
