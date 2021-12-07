import DocsLayout from "../../components/DocsLayout";
import React from "react";
import { components } from "../../utils/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  component: string;
}

type Props = {
  component: string;
};

const ExamplesPage = ({ component }: Props) => {
  return <DocsLayout component={component?.toLowerCase()} />;
};

export const getStaticPaths: GetStaticPaths = ({ locales = [] }) => {
  const paths = components.flatMap((component) =>
    locales.map((locale) => ({ params: { component }, locale }))
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const { component } = ctx.params as Params;

  return {
    props: {
      component,
    },
  };
};

export default ExamplesPage;
