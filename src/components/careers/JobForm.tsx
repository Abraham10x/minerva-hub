import { FC } from "react";
import Form from "./Form";

const JobForm: FC = () => {
  return (
    <div className="bg-careerForm bg-no-repeat bg-cover my-20">
      <div className="container sm:px-10 2xl:px-0 pt-10 lg:pt-24 text-white">
        <div className="text-center">
          <h3 className="text-5xl font-bold">
            Couldn't find a suitable cape for you?
          </h3>
          <p className="w-full sm:w-3/4 lg:w-2/4 mx-auto text-lg my-5">
            Think you can bring magic to the team that is and can't find a
            suitable role for you, kindly fill the form below
          </p>
        </div>
        <div className="w-full sm:w-3/6 mx-auto pt-2 pb-24">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default JobForm;
