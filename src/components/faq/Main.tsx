import Link from "next/link";
import React, { FC } from "react";
import FaqList from "./FaqList";
import QuestionData from "./QuestionData";

const Main: FC = () => {
  return (
    <div className="bg-grayBg bg-faq bg-no-repeat bg-right py-14">
      <div className="container sm:px-10 2xl:px-0 flex flex-col align-middle justify-center pb-20">
        <div className="flex flex-col sm:flex-row bg-white rounded-xl justify-between shadow-md w-full lg:w-4/5 py-7 my-8 px-6 gap-y-4 text-center sm:text-left sm:px-10 mx-auto">
          <div className="w-full sm:w-2/5">
            <h3 className="text-lg text-gray-900 font-semibold">
              Have a Question
            </h3>
            <p className="text-base text-gray-500">
              Still have question in mind? Please get in touch with our support
              team or write us an email.
            </p>
          </div>
          <Link legacyBehavior href="/contact" className="xl:mx-8 xl:ml-36">
            <a className="pointer text-center text-gray-900 font-semibold rounded focus:outline-none border border-[#D1D5DB] py-2 px-10 hover:bg-gray-200 h-11 my-auto">
              Ask Your Question
            </a>
          </Link>
        </div>

        <div className="2xl:px-0 flex flex-col align-middle justify-center">
          <div className="hs-accordion-group">
            {QuestionData.map((item) => (
              <FaqList
                key={item.id}
                id={item.id}
                panel={item.panel}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
