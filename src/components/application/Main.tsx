import { Button, SubmitButton } from "@components/general/Button";
import { FC } from "react";

const Main: FC = () => {
  return (
    <div className="bg-product bg-no-repeat bg-cover bg-top bg-grayBg">
      <div className="container sm:px-10 2xl:px-0 flex flex-row align-middle justify-center py-36">
        <div className="bg-white px-10 py-9 rounded-2xl w-full sm:w-2/3">
          <h2 className="font-bold text-3xl text-[#021145]">Apply Now</h2>
          <p className="text-[#868383] text-sm my-4">
            Send your application and we will get back to you shortly.
          </p>
          <form className="w-full">
            {/* Full Name */}
            <label
              htmlFor="input-name"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              Email Address
            </label>
            <input
              type="text"
              id="input-name"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-600"
              placeholder="eg John Smith"
              aria-describedby="input-name"
            />

            {/* Email */}
            <label
              htmlFor="input-email"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="input-email"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-600"
              placeholder="you@site.com"
              aria-describedby="input-email"
            />

            {/* Portfolio */}

            <label
              htmlFor="input-portfolio"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              Portfolio
            </label>
            <input
              type="text"
              id="input-portfolio"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-600"
              placeholder="Enter Your Portfolio Link"
              aria-describedby="hs-input-helper-text"
            />

            {/* Linkedln */}

            <label
              htmlFor="input-linkedin"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              Linkedlin Profile
            </label>
            <input
              type="text"
              id="input-label-linkedin"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400"
              placeholder="Enter Your Linkedin Profile Link"
              aria-describedby="hs-input-helper-text"
            />

            {/* File  */}
            <label
              htmlFor="input-file"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              CV/Resume
            </label>
            <input
              type="text"
              id="input-file"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-600"
              placeholder="Enter Your Link To Your CV"
              aria-describedby="input-name"
            />

            {/* About yourself */}

            <label
              htmlFor="input-info"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              About Yourself
            </label>
            <textarea
              id="input-info"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400"
              rows={3}
            >
              About Yourself
            </textarea>

            {/* Button */}
            <SubmitButton
              type="sumbit"
              className="text-lg font-semibold text-white bg-secondary py-2 px-8 rounded-lg mt-9"
            >
              Apply Now
            </SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
