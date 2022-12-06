import { SubmitButton } from "@components/general/Button";
import { FC } from "react";

const Form: FC = () => {
  return (
    <div>
      <form className="h-full bg-[#FFFFFF] py-8 px-10 rounded-xl">
        <h2 className="text-3xl font-bold">Send Message</h2>
        <p className="text-xs text-[#868383] mt-2">
          Feel free to send a message directly to us , our team are on standby
          to assist you as soon as possible.
        </p>
        <div className="py-5 grid grid-cols-1  gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
            <input
              className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3"
              type="text"
              placeholder="Your name"
            />
            <input
              className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
            <input
              className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3"
              type="tel"
              placeholder="Phone number"
            />
            <input
              className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div>
            <textarea
              className="w-full rounded-xl border px-4 py-3"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        {/* Button */}
        <SubmitButton
          type="sumbit"
          className="text-base font-semibold text-white bg-blue hover:bg-blue/80 py-3 px-10 rounded-lg"
        >
          Apply Now
        </SubmitButton>
      </form>
    </div>
  );
};

export default Form;
