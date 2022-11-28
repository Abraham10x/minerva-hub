import { Button, SubmitButton } from "@components/general/Button";
import { FC } from "react";

const Form: FC = () => {
  return (
    <form>
      {/* Email */}
      <label
        htmlFor="input-label-with-helper-text"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        Email Address
      </label>
      <input
        type="email"
        id="input-label-with-helper-text"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="you@site.com"
        aria-describedby="hs-input-helper-text"
      />

      {/* Portfolio */}

      <label
        htmlFor="input-label-with-helper-text"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        Porfolio
      </label>
      <input
        type="text"
        id="input-label-with-helper-text"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="Enter Your Portfolio Link"
        aria-describedby="hs-input-helper-text"
      />

      {/* Linkedln */}

      <label
        htmlFor="input-label-with-helper-text"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        Linkedlin Profile
      </label>
      <input
        type="text"
        id="input-label-with-helper-text"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="Enter Your Linkedin Profile Link"
        aria-describedby="hs-input-helper-text"
      />

      {/* About yourself */}

      <label
        htmlFor="input-label-with-helper-text"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        About Yourself
      </label>
      <textarea
        id="input-label-with-helper-text"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-gray-700 dark:text-gray-400"
        rows={3}
      >
        About Yourself
      </textarea>
      <div className="flex flex-row gap-x-9 mt-6 align-middle">
        <label
          htmlFor="input-label-with-helper-text"
          className="block text-base font-medium mb-2 mt-8 dark:text-white"
        >
          CV / Resume *
        </label>
        <div className="my-5">
          <Button className=" text-base font-semibold text-white bg-secondary">
            <input type="file" className="hidden" />
            Upload your CV
          </Button>
        </div>
      </div>

      {/* Button */}
      <SubmitButton
        type="sumbit"
        className="text-2xl font-semibold text-white bg-secondary py-3 px-10 rounded-lg mt-9"
      >
        Apply Now
      </SubmitButton>
    </form>
  );
};

export default Form;
