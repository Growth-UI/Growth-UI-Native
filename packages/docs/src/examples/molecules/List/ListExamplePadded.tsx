import List from "@growth-ui/native/molecules/List";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import Typography from "@growth-ui/native/atoms/Typography";

const ListExamplePadded = () => (
  <>
    <Typography variant="h5">Without padding</Typography>
    <Spacer size={15} />
    <List>
      <List.Item text="Dog" />
      <List.Item text="Cat" />
      <List.Item text="Pig" />
    </List>
    <Spacer size={30} />
    <Typography variant="h5">With padding</Typography>
    <Spacer size={15} />
    <List padded>
      <List.Item text="Dog" />
      <List.Item text="Cat" />
      <List.Item text="Pig" />
    </List>
    <Spacer size={30} />
    <Typography variant="h5">With extra padding</Typography>
    <Spacer size={15} />
    <List relaxed>
      <List.Item text="Dog" />
      <List.Item text="Cat" />
      <List.Item text="Pig" />
    </List>
  </>
);

export default ListExamplePadded;
