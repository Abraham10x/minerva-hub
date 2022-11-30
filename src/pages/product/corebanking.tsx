import { Layout } from "../../layouts/default";
import { NextPage } from "next";
import Seo from "@components/general/Seo";
import Hero from "@components/products/corebanking/Hero";
import Features from "@components/products/corebanking/Features";
import Parnter from "@components/home/Partner";
import Download from "@components/products/corebanking/Download";
import CTA from "@components/products/corebanking/CTA";

const corebanking: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Core Banking" />
      <Hero />
      <Features />
      <Parnter />
      <Download />
      <CTA />
    </Layout>
  );
};

export default corebanking;
