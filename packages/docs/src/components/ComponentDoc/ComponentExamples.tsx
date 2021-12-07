import dynamic from "next/dynamic";
import React, { FC } from "react";
import { capitalize } from "../../utils";

type Props = {
  heading: string;
  type: string;
};

const renderExamples = (type: string, component: string) =>
  dynamic(() => import(`../../examples/${type}/${capitalize(component)}`));

const ComponentExamples: FC<Props> = ({ heading, type }) => {
  const Examples = renderExamples(type, heading);

  return <Examples />;
};

export default ComponentExamples;
