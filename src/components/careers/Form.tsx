import { Button, SubmitButton } from "@components/general/Button";
import { FC } from "react";

const Form: FC = () => {
  return (
    <form>
      {/* Full Name */}
      <label
        htmlFor="input-label-with-helper-name"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        Full Name *
      </label>
      <input
        type="email"
        id="input-label-with-helper-name"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="e.g John Doe"
        aria-describedby="hs-input-helper-name"
      />

      {/* Email */}
      <label
        htmlFor="input-label-with-helper-email"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        Email Address *
      </label>
      <input
        type="email"
        id="input-label-with-helper-email"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="you@site.com"
        aria-describedby="hs-input-helper-email"
      />

      {/* Portfolio */}

      <label
        htmlFor="input-label-with-helper-portfolio"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        Porfolio
      </label>
      <input
        type="text"
        id="input-label-with-helper-portfolio"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="Enter Your Portfolio Link"
        aria-describedby="hs-input-helper-portfolio"
      />

      {/* Linkedln */}

      <label
        htmlFor="input-label-with-helper-linkedin"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        Linkedlin Profile *
      </label>
      <input
        type="text"
        id="input-label-with-helper-linkedin"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="Enter Your Linkedin Profile Link"
        aria-describedby="hs-input-helper-linkedin"
      />

      {/* CV/Resume Link */}

      <label
        htmlFor="input-label-with-helper-resume"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        CV / Resume *
      </label>
      <input
        type="text"
        id="input-label-with-helper-resume"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="Enter Your Link To Your CV"
        aria-describedby="hs-input-helper-resume"
      />

      {/* About yourself */}

      <label
        htmlFor="input-label-with-helper-info"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        About Yourself *
      </label>
      <textarea
        id="input-label-with-helper-info"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-700 dark:text-gray-600"
        rows={3}
      >
        About Yourself
      </textarea>

      {/* Button */}
      <SubmitButton
        type="sumbit"
        className="text-lg font-semibold text-white bg-secondary py-3 px-10 rounded-lg mt-9"
      >
        Apply Now
      </SubmitButton>
    </form>
  );
};

export default Form;
