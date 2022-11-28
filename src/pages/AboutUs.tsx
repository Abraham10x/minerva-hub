import { Layout } from "../layouts/default";
import Image from "next/image";
import Link from "next/link";
import {
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiTwitterFill,
} from "react-icons/ri";
import team from "../components/database/team";
const AboutUs = () => {
  return (
    <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full p-20 bg-no-repeat bg-center bg-[url(/img/aboutuswave.svg)]">
          <div className="flex flex-col text-left items-left justify-center mx-4">
            <h1 className="text-5xl font-bold">About Us</h1>
            <span className="text-[#64607D]">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</span>
          </div>
          <div>
          <Image
              className=""
              alt="logo"
              src="/img/aboutushero.svg"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-auto p-40">
            <div className="px-8 py-16 rounded-lg border border-[#DFDFD]">
              <h2 className="text-l font-bold mb-3">Do believing oh disposing to supported</h2>
              <span className="text-sm text-[#64607D]">Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</span>  
            </div>  
            <div className="px-8 py-16 rounded-lg border border-[#DFDFD]">
              <h2 className="text-l font-bold mb-3">Do believing oh disposing to supported</h2>
              <span className="text-sm text-[#64607D]">Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</span>  
            </div> 
            <div className="px-8 py-16 rounded-lg border border-[#DFDFD]">
              <h2 className="text-l font-bold mb-3">Do believing oh disposing to supported</h2>
              <span className="text-sm text-[#64607D]">Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</span>  
            </div> 
          </div>
          <Image
              className="absolute right-0 top-52"
              alt="logo"
              src="/img/aboutpolygon.svg"
              width={100}
              height={100}
            />
        </div>
        <div className="relative py-16 flex flex-col items-center bg-[#F3F7FA] w-9/12 m-auto rounded-lg">
        <Image
              className="absolute left-9 top-[-30px]"
              alt="logo"
              src="/img/46.svg"
              width={100}
              height={100}
            />
          <span className="font-bold text-[#3734A9] text-sm">WHY MINERVAHUB</span>
          <h2 className="mt-3 text-4xl font-medium">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-20 pt-20">
            <div className="flex flex-row bg-white py-10 px-6 rounded-lg">
                <div className="w-32 h-14 mr-6  flex rounded-full bg-[#F7ECFD]">
                <Image
                    className="w-7/12 m-auto"
                    alt="logo"
                    src="/img/instagramicon.svg"
                    width={10}
                    height={10}
                   />
                </div>
                <div>
                    <h3 className="text-l font-bold mb-3">No Extra Fee</h3>
                    <span className="text-sm text-[#64607D]">Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</span>  
                </div>
            </div>
            <div className="flex flex-row bg-white py-10 px-6 rounded-lg">
                <div className="w-32 h-14 mr-6  flex rounded-full bg-[#D8F5F1]">
                <Image
                    className="w-7/12 m-auto"
                    alt="logo"
                    src="/img/instagramicon.svg"
                    width={10}
                    height={10}
                   />
                </div>
                <div>
                    <h3 className="text-l font-bold mb-3">No Extra Fee</h3>
                    <span className="text-sm text-[#64607D]">Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</span>  
                </div>
            </div>
            <div className="flex flex-row bg-white py-10 px-6 rounded-lg">
                <div className="w-32 h-14 mr-6  flex rounded-full bg-[#D9F1FD]">
                <Image
                    className="w-7/12 m-auto"
                    alt="logo"
                    src="/img/instagramicon.svg"
                    width={10}
                    height={10}
                   />
                </div>
                <div>
                    <h3 className="text-l font-bold mb-3">No Extra Fee</h3>
                    <span className="text-sm text-[#64607D]">Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</span>  
                </div>
            </div>
            <div className="flex flex-row bg-white py-10 px-6 rounded-lg">
                <div className="w-32 h-14 mr-6  flex rounded-full bg-[#FFE4E3]">
                <Image
                    className="w-7/12 m-auto"
                    alt="logo"
                    src="/img/instagramicon.svg"
                    width={10}
                    height={10}
                   />
                </div>
                <div>
                    <h3 className="text-l font-bold mb-3">No Extra Fee</h3>
                    <span className="text-sm text-[#64607D]">Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</span>  
                </div>
            </div>
        </div>
        </div>
        <div className="my-28 px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#FFFFFF] border border-[#DFDFD] shadow-2xl w-10/12 m-auto rounded-lg">
            <div><h2 className="text-2xl font-bold">Preference connect astonished</h2></div>
            <div>
                <div className="flex justify-center items-center">
                    <div className="bg-[#E9ECF2] w-16 h-16 mr-3"></div>
                    <span className="text-[#64607D] font-bold">Remove Enjoyed Explain</span>
                </div>
            </div>
                <div className="flex justify-center items-center">
                    <div className="bg-[#E9ECF2] w-16 h-16 mr-3"></div>
                    <span className="text-[#64607D] font-bold">Supported Allowance</span>
                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-[#E9ECF2] w-16 h-16 mr-3"></div>
                    <span className="text-[#64607D] font-bold">Stable work & Lightweight</span>
                </div>
        </div>
        <div className="px-10 py-12 bg-[#F8F9FD] w-8/12 rounded-lg flex m-auto">
          <div><h2 className="text-3xl font-bold">Track your crytpo portfolio on the best way possible</h2></div>
          <button className="bg-[#4F46BA] rounded-lg px-2 py-0 w-44 h-14 text-white">Check It Out</button>
        </div>
        
        <div className="p-20">
          <h2 className="text-5xl text-center font-bold">Our Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-20">
            {team.map(item =>(
            <div className="text-center mt-6">
              <div className="">
              <Image
                    className="w-10/12 m-auto  rounded-lg"
                    alt={item.imagealt}
                    src={item.image}
                    width={500}
                    height={500}
                   />
              </div>
               <div className="mt-4">
               <h3 className="text-xl text-[#2E2F6E] font-bold">{item.name}</h3>
                <span className="text-sm font-medium">{item.role}</span>
                <div className="mt-5 flex justify-center items-center">
                  <Link className="mr-3"  href="#">
                    <RiFacebookCircleFill size={22} />
                  </Link>
                  <Link className="mr-3" href="#">
                    <RiTwitterFill size={22} />
                  </Link>
                  <Link className="mr-3" href="#">
                    <RiLinkedinBoxFill size={22} />
                  </Link>
                </div>
              </div>
            </div>))}
          </div>
        </div>
    </Layout>
  )
}

export default AboutUs