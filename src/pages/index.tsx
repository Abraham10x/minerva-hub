import { Layout } from "../layouts/default";
import { NextPage } from "next";
// import styles from "../styles/Home.module.css";
import Seo from "@components/general/Seo";
import Hero from "@components/home/Hero";
import Servces from "@components/home/Services";
import Product from "@components/home/Products";
import Parnter from "@components/home/Partner";
import CTA from "@components/home/CTA";
import Testimonial from "@components/home/Testimonial";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Home" />
      <Hero />
      <Servces />
      <Product />
      <Parnter />
      <Testimonial />
      <CTA />
    </Layout>
  );
};

export default Home;
