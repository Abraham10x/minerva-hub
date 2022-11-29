import { Layout } from "../../layouts/default";
import { NextPage } from "next";
import Seo from "@components/general/Seo";
import Hero from "@components/products/school/Hero";
import Features from "@components/products/school/Features";
import Parnter from "@components/home/Partner";
import Download from "@components/products/school/Download";
import CTA from "@components/products/school/CTA";

const School: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="School Management App" />
      <Hero />
      <Features />
      <Parnter />
      <Download />
      <CTA />
    </Layout>
  );
};

export default School;
