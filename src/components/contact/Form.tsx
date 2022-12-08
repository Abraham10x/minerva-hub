import { SubmitButton } from "@components/general/Button";
import { FC, useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Values from "@components/about/Values";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form: FC = () => {
  const notify = () => toast("Application Submitted");
  const form: any = useRef();
  const initialValues = {
    fullname: "",
    email: "",
    phonenumber: "",
    subject: "",
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
        "template_vmx9g5t",
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
    if (!values.phonenumber) {
      errors.phonenumber = "Phone Number is required";
    }
    if (!values.subject) {
      errors.subject = "Subject Profile is required";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <div>
      <ToastContainer />
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="h-full bg-[#FFFFFF] py-8 px-10 rounded-xl"
      >
        <h2 className="text-3xl font-bold">Send Message</h2>
        <p className="text-xs text-[#868383] mt-2">
          Feel free to send a message directly to us , our team are on standby
          to assist you as soon as possible.
        </p>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <p className="text-[green] font-bold">Message Sent</p>
        ) : (
          ""
        )}
        <div className="py-5 grid grid-cols-1  gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
            <div>
              <input
                name="fullname"
                className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3"
                type="text"
                placeholder="Full name"
                value={formValues.fullname}
                onChange={handleChange}
              />
              <p className="text-[red]">{formErrors.fullname}</p>
            </div>
            <div>
              <input
                name="email"
                className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3"
                type="email"
                placeholder="Email address"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="text-[red]">{formErrors.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
            <div>
              <input
                name="phonenumber"
                className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3"
                type="tel"
                placeholder="Phone number"
                value={formValues.phonenumber}
                onChange={handleChange}
              />
              <p className="text-[red]">{formErrors.phonenumber}</p>
            </div>
            <div>
              <input
                name="subject"
                className="w-full bg-[#FFFFFF] rounded-xl border px-4 py-3"
                type="text"
                placeholder="Subject"
                value={formValues.subject}
                onChange={handleChange}
              />
              <p className="text-[red]">{formErrors.subject}</p>
            </div>
          </div>
          <div>
            <textarea
              name="message"
              className="w-full rounded-xl border px-4 py-3"
              placeholder="Message"
              rows={3}
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
            <p className="text-[red]">{formErrors.message}</p>
          </div>
        </div>
        {/* Button */}
        <SubmitButton
          type="sumbit"
          className="text-base font-semibold text-white bg-blue hover:bg-blue/80 py-3 px-10 rounded-lg"
        >
          Send
        </SubmitButton>
      </form>
    </div>
  );
};

export default Form;
