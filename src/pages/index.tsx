import { Layout } from "../layouts/default";
import { NextPage } from "next";
// import styles from "../styles/Home.module.css";
import Seo from "@components/general/Seo";
import Hero from "@components/home/Hero";
import Servces from "@components/home/Services";
import Product from "@components/home/Products";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Home" />
      <Hero />
      <Servces />
      <Product />
    </Layout>
  );
};

export default Home;