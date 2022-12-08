import { Button, SubmitButton } from "@components/general/Button";
import { FC, useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form: FC = () => {
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
    <form ref={form} onSubmit={handleSubmit}>
      <ToastContainer />
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <p className="text-[green] font-bold">Application Sent</p>
      ) : (
        ""
      )}
      {/* Full Name */}
      <label
        htmlFor="input-label-with-helper-name"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        Full Name *
      </label>
      <input
        name="fullname"
        type="text"
        id="input-label-with-helper-name"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="e.g John Doe"
        aria-describedby="hs-input-helper-name"
        value={formValues.fullname}
        onChange={handleChange}
      />
      <p className="text-[red]">{formErrors.fullname}</p>
      {/* Email */}
      <label
        htmlFor="input-label-with-helper-email"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        Email Address *
      </label>
      <input
        name="email"
        type="email"
        id="input-label-with-helper-email"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="you@site.com"
        aria-describedby="hs-input-helper-email"
        value={formValues.email}
        onChange={handleChange}
      />
      <p className="text-[red]">{formErrors.email}</p>
      {/* Portfolio */}
      <label
        htmlFor="input-label-with-helper-portfolio"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        Porfolio
      </label>
      <input
        name="portfolio"
        type="text"
        id="input-label-with-helper-portfolio"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="Enter Your Portfolio Link"
        aria-describedby="hs-input-helper-portfolio"
        value={formValues.portfolio}
        onChange={handleChange}
      />
      <p className="text-[red]">{formErrors.portfolio}</p>
      {/* Linkedln */}
      <label
        htmlFor="input-label-with-helper-linkedin"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        Linkedlin Profile *
      </label>
      <input
        name="linkedinlink"
        type="text"
        id="input-label-with-helper-linkedin"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="Enter Your Linkedin Profile Link"
        aria-describedby="hs-input-helper-linkedin"
        value={formValues.linkedinlink}
        onChange={handleChange}
      />
      <p className="text-[red]">{formErrors.linkedinlink}</p>
      {/* CV/Resume Link */}
      <label
        htmlFor="input-label-with-helper-resume"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        CV / Resume *
      </label>
      <input
        name="cvlink"
        type="text"
        id="input-label-with-helper-resume"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-400 dark:text-gray-600"
        placeholder="Enter Your Link To Your CV"
        aria-describedby="hs-input-helper-resume"
        value={formValues.cvlink}
        onChange={handleChange}
      />
      <p className="text-[red]">{formErrors.cvlink}</p>
      {/* About yourself */}
      <label
        htmlFor="input-label-with-helper-info"
        className="block text-base font-medium mb-2 mt-8 dark:text-white"
      >
        About Yourself *
      </label>
      <textarea
        name="message"
        id="input-label-with-helper-info"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-blue-500 focus:ring-blue-blue-500 dark:bg-white dark:border-blue-blue-700 dark:text-gray-600"
        rows={3}
        placeholder="About Yourself"
        value={formValues.message}
        onChange={handleChange}
      ></textarea>
      <p className="text-[red]">{formErrors.message}</p>
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
