import CodeSnippet from "../../components/CodeSnippet";
import Context from "../../components/Context";
import Head from "next/head";
import Layout from "../../components/PageLayout";
import React, { useContext } from "react";
import TheSXPropsMD from "../../md/the-sx-prop";
import { Padding } from "@growth-ui/react";

const TheSXPropPage = () => {
  const { darkMode } = useContext(Context);

  return (
    <Layout>
      <Head>
        <title>The sx prop - Growth UI Native</title>
      </Head>
      <Padding horizontal={3}>
        <CodeSnippet
          markdown={TheSXPropsMD}
          css={`
            color: ${darkMode ? "white" : "black"};

            code {
              background-color: rgba(102, 178, 255, 0.15);
              padding: 2px 7px;
              border-radius: 4px;
            }

            table {
              display: block;
              width: 100%;
              overflow: auto;
              border-spacing: 0;
            }

            table tr {
              border-top: 1px solid #c6cbd1;
            }

            table td,
            table th {
              border-bottom: 1px solid ${darkMode ? "rgba(194, 224, 255, 0.08)" : "#e7ebf0"};
              padding: 10px 13px;
            }

            p {
              opacity: 0.7;
            }

            pre code {
              background-color: transparent;
              color: #fff;
            }

            .hljs-title.hljs-class,
            .hljs-name {
              color: #e6db74 !important;
              font-weight: 900;
            }

            .hljs-attr {
              color: rgb(252, 146, 158);
            }

            .hljs-number {
              color: #b78eff;
            }
          `}
        />
      </Padding>
    </Layout>
  );
};

export default TheSXPropPage;
