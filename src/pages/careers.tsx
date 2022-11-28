import Beneficts from "@components/careers/Beneficts";
import Hero from "@components/careers/Hero";
import OpenPosition from "@components/careers/OpenPosition";
import Seo from "@components/general/Seo";
import { FC } from "react";

import { Layout } from "../layouts/default";

const career: FC = () => {
  return (
    <Layout>
      <Seo templateTitle="Careers" />
      <Hero />
      <Beneficts />
      <OpenPosition />
    </Layout>
  );
};

export default career;
