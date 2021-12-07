import List from "@growth-ui/native/molecules/List";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";

const ListExampleVerticalAlign = () => (
  <>
    <List divided padded verticalAlign="top">
      <List.Item>
        <List.Image src="http://placeimg.com/28/28/people" width={28} />
        <List.Content>
          <List.Heading>Top</List.Heading>
        </List.Content>
      </List.Item>
    </List>

    <Spacer size={40} />

    <List divided padded verticalAlign="middle">
      <List.Item>
        <List.Image src="http://placeimg.com/28/28/people" width={28} />
        <List.Content>
          <List.Heading>Middle</List.Heading>
        </List.Content>
      </List.Item>
    </List>

    <Spacer size={40} />

    <List divided padded verticalAlign="bottom">
      <List.Item>
        <List.Image src="http://placeimg.com/28/28/people" width={28} />
        <List.Content>
          <List.Heading>Bottom</List.Heading>
        </List.Content>
      </List.Item>
    </List>
  </>
);

export default ListExampleVerticalAlign;
