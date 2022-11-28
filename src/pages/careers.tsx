import Hero from "@components/careers/Hero";
import Seo from "@components/general/Seo";
import { FC } from "react";

import { Layout } from "../layouts/default";

const career: FC = () => {
  return (
    <Layout>
      <Seo templateTitle="Careers" />
      <Hero />
    </Layout>
  );
};

export default career;
