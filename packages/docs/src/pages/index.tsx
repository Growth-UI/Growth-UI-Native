import Router from "next/router";
import { NextPageContext } from "next";

const IndexPage = () => null;

IndexPage.getInitialProps = (ctx: NextPageContext) => {
  const { res } = ctx;

  if (res) {
    res.writeHead(303, { Location: "/getting-started/introduction" });
    res.end();
  } else {
    Router.replace("/getting-started/introduction");
  }
};

export default IndexPage;
