import Hero from "@components/faq/Hero";
import Main from "@components/faq/Main";
import Seo from "@components/general/Seo";
import type { NextPage } from "next";
import { Layout } from "../layouts/default";

const faqs: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="FAQs" />
      <Hero />
      <Main />
    </Layout>
  );
};

export default faqs;
