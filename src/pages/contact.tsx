import { Layout } from "../layouts/default";
import Hero from "@components/contact/Hero";
import Main from "@components/contact/Main";
import Seo from "@components/general/Seo";

const ContactUs = () => {
  return (
    <Layout>
      <Seo templateTitle="Contact Us" />
      <Hero />
      <Main />
    </Layout>
  );
};

export default ContactUs;
