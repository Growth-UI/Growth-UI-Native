import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import styled from "styled-components";

const Highligher = styled.div<Props>`
  width: 100%;

  pre {
    overflow-x: auto;
    border-radius: 6px;
    background: #2d2d2d;
    padding: ${({ padded }) => (padded ? "3rem" : "1em")};
  }

  code[class*="language-"] {
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 12px;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
  }

  /* Shared */
  color: #ccc;

  /* BASH */
  .language-bash .hljs-comment {
    color: #7ec699;
  }

  /* JSX */
  .language-jsx .hljs-keyword {
    color: #cc99cd;
  }

  .language-jsx .hljs-string {
    color: #7ec699;
  }

  .language-jsx .hljs-function,
  .language-jsx .hljs-tag .hljs-name {
    color: #f8c555;
  }

  .language-jsx .hljs-tag .hljs-attr {
    color: #e2777a;
  }
`;

interface Props extends StrictProps {
  [k: string]: any;
}

interface StrictProps {
  markdown: string;
  padded?: boolean;
}

const CodeSnippet = ({ markdown, ...rest }: Props) => {
  return (
    <Highligher {...rest}>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{markdown}</ReactMarkdown>
    </Highligher>
  );
};

export default CodeSnippet;
