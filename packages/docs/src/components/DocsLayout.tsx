import ComponentDoc from "./ComponentDoc/ComponentDoc";
import Head from "next/head";
import Layout from "./PageLayout";
import React, { FC } from "react";
import useTranslation from "next-translate/useTranslation";

type Props = {
  component: string;
};

const DocsLayout: FC<Props> = ({ component }) => {
  const { t } = useTranslation("examples");

  return (
    <Layout>
      <Head>
        <title>{t(`${component}.heading`)} - Growth UI React</title>
      </Head>
      <ComponentDoc
        subheading={t(`${component}.subheading`)}
        heading={t(`${component}.heading`)}
        type={t(`${component}.type`)}
      />
    </Layout>
  );
};

export default DocsLayout;
