import { Layout } from "../layouts/default";
import Hero from "@components/about/Hero";
import Values from "@components/about/Values";
import Choose from "@components/about/Choose";
import Beneficts from "@components/about/Beneficts";
import Team from "@components/about/Teams";
import Seo from "@components/general/Seo";
const About = () => {
  return (
    <Layout>
      <Seo templateTitle="About Us" />
      <Hero />
      <Values />
      <Choose />
      <Beneficts />
      <Team />
    </Layout>
  );
};

export default About;
