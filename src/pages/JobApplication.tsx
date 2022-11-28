import Seo from "@components/general/Seo";
import { Layout } from "../layouts/default";
import { NextPage } from "next";
import Hero from "@components/application/Hero";
import Main from "@components/application/Main";

const JobApplication: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Job Application Form" />
      <Hero />
      <Main />
    </Layout>
  );
};

export default JobApplication;
