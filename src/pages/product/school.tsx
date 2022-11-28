import { Layout } from "../../layouts/default";
import { NextPage } from "next";
import Seo from "@components/general/Seo";
import Hero from "@components/products/school/Hero";

const School: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="School Management App" />
      <Hero />
    </Layout>
  );
};

export default School;
