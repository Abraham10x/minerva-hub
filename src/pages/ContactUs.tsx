import { Layout } from "../layouts/default";
import Image from "next/image";

const ContactUs = () => {
  return (
    <Layout>
      <div className="relative m-0 w-full flex justify-center items-center  h-44 bg-[#021145]">
        <h1 className=" text-white text-5xl font-bold">Contact Us</h1>
        <Image
              className="absolute right-0 bottom-0"
              alt="logo"
              src="/img/decorator.svg"
              width={100}
              height={100}
            />
      </div>
      <div className="bg-[#F9F9F9]  p-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-96 md:h-full flex flex-col justify-between items-center md:items-end">
            <div className="flex rounded-xl w-full md:w-80 p-4  bg-[#FFFFFF]" >
                <div className="rounded-full bg-[#bbbbbb] w-14 h-14 flex ">
                  <Image
                    className="w-7/12 m-auto"
                    alt="logo"
                    src="/img/phoneicon.svg"
                    width={10}
                    height={10}
                   />
                </div>
                <div className="flex-col mx-3">
                  <span className="text-xs text-[#868383]">Call us on mobile</span>
                  <p className="text-sm text-[#000000] font-bold">090226767898</p>
                </div>
            </div>
            <div className="flex rounded-xl w-full md:w-80 p-4  bg-[#FFFFFF]">
                <div className="rounded-full bg-[#bbbbbb] w-14 h-14 flex ">
                  <Image
                    className="w-7/12 m-auto"
                    alt="logo"
                    src="/img/mailicon.svg"
                    width={10}
                    height={10}
                   />
                </div>
                <div className="flex-col mx-3">
                  <span className="text-xs text-[#868383]">You can also send an email to</span>
                  <p className="text-sm text-[#000000] font-bold">help@minerva.com</p>
                </div>
            </div>
            <div className="flex rounded-xl w-full md:w-80 p-4  bg-[#FFFFFF]">
                <div className="rounded-full bg-[#bbbbbb] w-14 h-14 flex ">
                  <Image
                    className="w-7/12 m-auto"
                    alt="logo"
                    src="/img/twittericon.svg"
                    width={10}
                    height={10}
                   />
                </div>
                <div className="flex-col mx-3">
                  <span className="text-xs text-[#868383]">Follow us on Instagram</span>
                  <p className="text-sm text-[#000000] font-bold"> @minervahub</p>
                </div>
            </div>
            <div className="flex rounded-xl w-full md:w-80 p-4  bg-[#FFFFFF]">
                <div className="rounded-full bg-[#bbbbbb] w-14 h-14 flex">
                  <Image
                    className="w-7/12 m-auto"
                    alt="logo"
                    src="/img/instagramicon.svg"
                    width={10}
                    height={10}
                   />
                </div>
                <div className="flex-col mx-3">
                  <span className="text-xs text-[#868383]">Follow us on Twitter</span>
                  <p className="text-sm text-[#000000] font-bold">@minervahub</p>
                </div>
            </div>
        </div>
        <div>
          <form className="h-full bg-[#FFFFFF] p-5 rounded-xl">
            <h2 className="text-3xl font-bold">Send Message</h2>
            <p className="text-xs text-[#868383] mt-2">Feel free to send a message  directly to us , our team are on standby to  assist you as soon as possible.</p>
            <div className="py-5 grid grid-cols-1  gap-3">
              <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
                <input className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3"  type="text" placeholder="Your name" />
                <input className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3" type="email" placeholder="Email address" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
                <input className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3"  type="tel" placeholder="Phone number" />
                <input className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3" type="text" placeholder="Subject" />
              </div>
              <div>
                <textarea className="w-full rounded-xl border px-4 py-3" placeholder="Message"></textarea>
              </div>
            </div>
            <div>
                <button className="py-2 px-5 rounded-xl bg-[#021145] text-white text-m" >Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs