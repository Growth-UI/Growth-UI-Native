import React, { FC } from "react";
import { Grid, Heading, Spacer } from "growth-ui-react";

type Props = {
  title: string;
};

const ExampleSection: FC<Props> = (props) => {
  const { children, title } = props;

  return (
    <Grid>
      <Grid.Col width={16}>
        <Spacer size={30} />
        <Heading as="h2" textAlign="center">
          {title}
        </Heading>
        {children}
      </Grid.Col>
    </Grid>
  );
};

export default ExampleSection;
