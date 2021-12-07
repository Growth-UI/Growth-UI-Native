import ComponentCode from "./ComponentCode";
import React from "react";
import { Grid, Paragraph, Spacer } from "growth-ui-react";

type Props = {
  func?: {
    title: string;
    params: {
      name: string;
      description?: string;
    }[];
  };
};

const ComponentPropFunc = ({ func }: Props) => {
  if (!func) return null;

  return (
    <>
      <Spacer size={10} />
      <Paragraph fontSize="sm" style={{ opacity: 0.8 }}>
        <strong>{func.title}</strong>
      </Paragraph>
      <Spacer size={10} />
      {func.params.map((param) => (
        <Grid.Row key={param.name} verticalAlign="middle">
          <div style={{ minWidth: "130px" }}>
            <ComponentCode>{param.name}</ComponentCode>
          </div>
          <span>{param.description}</span>
        </Grid.Row>
      ))}
    </>
  );
};

export default ComponentPropFunc;
