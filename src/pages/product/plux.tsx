import { Layout } from "../../layouts/default";
import { NextPage } from "next";
import Seo from "@components/general/Seo";
import Hero from "@components/products/plux/Hero";

const plux: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Plux" />
      <Hero />
    </Layout>
  )
}

export default plux