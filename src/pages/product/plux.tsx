import { Layout } from "../../layouts/default";
import { NextPage } from "next";
import Seo from "@components/general/Seo";
import Hero from "@components/products/plux/Hero";
import Features from "@components/products/plux/Features";
import Parnter from "@components/home/Partner";
import Download from "@components/products/plux/Download";
import CTA from "@components/products/plux/CTA";

const plux: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Plux" />
      <Hero />
      <Features />
      <Parnter />
      <Download />
      <CTA />
    </Layout>
  );
};

export default plux;
