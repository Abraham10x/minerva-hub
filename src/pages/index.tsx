import { Layout } from "../layouts/default";
import { NextPage } from "next";
// import styles from "../styles/Home.module.css";
import Seo from "@components/general/Seo";
import Hero from "@components/home/Hero";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Home" />
      <Hero />
    </Layout>
  );
};

export default Home;
