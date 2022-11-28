import { FC } from "react";

interface Props {
  id?: any;
  panel?: any;
  title?: any;
  description?: any;
}

const FaqList: FC<Props> = ({ id, panel, title, description }: Props) => {
  return (
    <>
      <div className="flex flex-col bg-white rounded-xl justify-between shadow-md w-full lg:w-4/5 py-1 my-8 px-6 gap-y-4 text-center sm:text-left sm:px-10 mx-auto">
        <div
          className={`hs-accordion ${id === 1 ? "active" : ""}`}
          id={`hs-basic-with-title-and-arrow-stretched-heading-${panel}`}
        >
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-xl text-left transition"
            aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${panel}`}
          >
            {title}
            <svg
              className="hs-accordion-active:hidden hs-accordion-active:text-green hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-secondary group-hover:text-secondary/70"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-green hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-secondary group-hover:text-secondary/70"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            id={`hs-basic-with-title-and-arrow-stretched-collapse-${panel}`}
            className={`hs-accordion-content ${
              id > 1 ? "hidden" : ""
            } w-full overflow-hidden transition-[height] duration-300`}
            aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${panel}`}
          >
            <p className="text-lg text-gray-400 my-6 text-justify">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqList;
