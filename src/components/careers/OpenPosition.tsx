import { Button, LinkButton } from "@components/general/Button";
import PositionsData from "./PositionsData";
import { FC } from "react";
import { RiAddFill } from "react-icons/ri";

const OpenPosition: FC = () => {
  return (
    <div
      className="container sm:px-10 2xl:px-0 pt-10 lg:pt-10"
      id="open-postions"
    >
      <h2 className="font-bold text-4xl text-[#2E2F6E] text-center">
        Open Positions
      </h2>
      <div className=" my-24 flex flex-col  px-0 sm:px-20">
        {PositionsData.map((data, index) => (
          <>
            <div
              className="flex flex-row justify-between px-9 sm:px-20 py-6 shadow-2xl cursor-pointer rounded-3xl sm:rounded-full my-11"
              data-hs-overlay={`#${data.modal}`}
              key={index}
            >
              <div>
                <h4 className="font-bold text-lg">{data.role}</h4>
                <p className="text-lg">{data.location}</p>
              </div>
              <Button className="">
                <RiAddFill
                  size={25}
                  className="text-secondary hover:text-secondary/70"
                />
              </Button>
            </div>
            <div
              id={data.modal}
              className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
            >
              <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-3xl sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl ]">
                  <div className="flex justify-between items-center py-7 px-10 border-b">
                    <h3 className="font-bold text-3xl text-blue">
                      {data.role}
                    </h3>
                    <button
                      type="button"
                      className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                      data-hs-overlay={`#${data.modal}`}
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="w-3.5 h-3.5"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4 px-10 overflow-y-auto">
                    <div className="space-y-10">
                      <div className="flex flex-col sm:flex-row mt-5 mb-7 gap-7">
                        <div>
                          <h4 className="font-bold text-xl text-blue">
                            Experience
                          </h4>
                          <p className="text-lg mt-3">{data.experience}</p>
                        </div>
                        {data.seniorityLevel && (
                          <div>
                            <h4 className="font-bold text-xl text-blue">
                              Seniority Level
                            </h4>
                            <p className="text-lg mt-3">
                              {data.seniorityLevel}
                            </p>
                          </div>
                        )}
                        <div>
                          <h4 className="font-bold text-xl text-blue">
                            Employment Type
                          </h4>
                          <p className="text-lg mt-3">{data.employmentType}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue">
                          Role Overview
                        </h3>
                        <p className="mt-1 text-gray-800 text-lg">
                          {data.roleOverview}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-blue">
                          Duties and Responsibilities
                        </h3>
                        <ul className="mt-1 text-lg text-gray-800 list-disc ml-5">
                          {data.duties.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-blue">
                          Skills And Qualifications
                        </h3>
                        <ul className="mt-1 text-lg text-gray-800 list-disc ml-5">
                          {data.skils.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hs-dropdown-toggle flex justify-start mt-5 items-center gap-x-2 py-5 px-10 border-t border-gray-300"
                    data-hs-overlay={`#${data.modal}`}
                  >
                    <LinkButton
                      className="py-3 px-8 inline-flex justify-center items-center gap-2 rounded-lg border border-transparent font-semibold bg-blue text-white hover:bg-blue/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base "
                      link="/JobApplication"
                    >
                      Apply Now
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default OpenPosition;
