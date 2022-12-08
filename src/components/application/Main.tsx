import { Button, SubmitButton } from "@components/general/Button";
import { FC, useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main: FC = () => {
  const notify = () => toast("Application Submitted");
  const form: any = useRef();
  const initialValues = {
    fullname: "",
    email: "",
    portfolio: "",
    linkedinlink: "",
    cvlink: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(formValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues(initialValues);
      notify();
    }
    setIsSubmit(true);

    emailjs
      .sendForm(
        "service_mjfbz2n",
        "template_1sjji7i",
        form.current,
        "dpFtHk2iL6h6Y8FE4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const validate = (values: any) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Full Name is required";
    } else if (values.fullname.length < 2) {
      errors.fullname = "Enter Full Name";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.portfolio) {
      errors.portfolio = "Protfolio Link is required";
    }
    if (!values.linkedinlink) {
      errors.linkedinlink = "Linkedin Profile is required";
    }
    if (!values.cvlink) {
      errors.cvlink = "CV Link is required";
    }
    if (!values.message) {
      errors.message = "About is required";
    }
    return errors;
  };

  return (
    <div className="bg-product bg-no-repeat bg-cover bg-top bg-grayBg">
      <ToastContainer />
      <div className="container sm:px-10 2xl:px-0 flex flex-row align-middle justify-center py-36">
        <div className="bg-white px-10 py-9 rounded-2xl w-full sm:w-2/3">
          <h2 className="font-bold text-3xl text-[#021145]">Apply Now</h2>
          <p className="text-[#868383] text-sm my-4">
            Send your application and we will get back to you shortly.
          </p>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <p className="text-[green] font-bold">Application Sent</p>
          ) : (
            ""
          )}

          <form ref={form} onSubmit={handleSubmit} className="w-full">
            {/* Full Name */}
            <label
              htmlFor="input-name"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              Full Name
            </label>
            <input
              name="fullname"
              type="text"
              id="input-name"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-600"
              placeholder="eg John Smith"
              aria-describedby="input-name"
              value={formValues.fullname}
              onChange={handleChange}
            />
            <p className="text-[red]">{formErrors.fullname}</p>

            {/* Email */}
            <label
              htmlFor="input-email"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              Email Address
            </label>
            <input
              name="email"
              type="email"
              id="input-email"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-600"
              placeholder="you@site.com"
              aria-describedby="input-email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="text-[red]">{formErrors.email}</p>

            {/* Portfolio */}

            <label
              htmlFor="input-portfolio"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              Portfolio
            </label>
            <input
              name="portfolio"
              type="text"
              id="input-portfolio"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-600"
              placeholder="Enter Your Portfolio Link"
              aria-describedby="hs-input-helper-text"
              value={formValues.portfolio}
              onChange={handleChange}
            />
            <p className="text-[red]">{formErrors.portfolio}</p>

            {/* Linkedln */}

            <label
              htmlFor="input-linkedin"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              Linkedlin Profile
            </label>
            <input
              name="linkedinlink"
              type="text"
              id="input-label-linkedin"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400"
              placeholder="Enter Your Linkedin Profile Link"
              aria-describedby="hs-input-helper-text"
              value={formValues.linkedinlink}
              onChange={handleChange}
            />
            <p className="text-[red]">{formErrors.linkedinlink}</p>

            {/* File  */}
            <label
              htmlFor="input-file"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              CV/Resume
            </label>
            <input
              name="cvlink"
              type="text"
              id="input-file"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-600"
              placeholder="Enter Your Link To Your CV"
              aria-describedby="input-name"
              value={formValues.cvlink}
              onChange={handleChange}
            />
            <p className="text-[red]">{formErrors.cvlink}</p>

            {/* About yourself */}

            <label
              htmlFor="input-info"
              className="block text-base font-medium mb-2 mt-8 dark:text-[#021145]"
            >
              About Yourself
            </label>
            <textarea
              name="message"
              id="input-info"
              className="mb-0 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400"
              rows={3}
              value={formValues.message}
              onChange={handleChange}
              placeholder="About Yourself"
            ></textarea>
            <p className="text-[red]">{formErrors.message}</p>

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
