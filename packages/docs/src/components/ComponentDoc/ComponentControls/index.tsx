import ComponentControlsCopyLink from "./ComponentControlsCopyLink";
import ComponentControlsCopySource from "./ComponentControlsCopySource";
import React from "react";
import { Grid, Icon, Spacer } from "@growth-ui/react";

type Props = {
  onShowCode: () => void;
  showCode: boolean;
};

const ComponentControls = (props: Props) => {
  const { onShowCode, showCode } = props;

  return (
    <Grid>
      <Grid.Row reversed verticalAlign="middle">
        <ComponentControlsCopyLink />
        <Spacer size={17} />
        <ComponentControlsCopySource />
        <Spacer size={17} />
        <Grid.Col horizontalAlignment="center" onClick={onShowCode}>
          <Icon color={showCode ? "green-600" : undefined} cursor="pointer" name="code slash" />
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};

export default ComponentControls;
