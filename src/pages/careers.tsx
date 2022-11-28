import Beneficts from "@components/careers/Beneficts";
import Hero from "@components/careers/Hero";
import JobForm from "@components/careers/JobForm";
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
      <JobForm />
    </Layout>
  );
};

export default career;
