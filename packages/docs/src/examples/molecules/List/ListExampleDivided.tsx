import faker from "faker";
import List from "@growth-ui/native/molecules/List";
import React from "react";

const ListExampleDivided = () => (
  <List divided padded verticalAlign="top">
    <List.Item>
      <List.Image src="http://placeimg.com/28/28/people" width={28} />
      <List.Content>
        <List.Heading>{faker.animal.bird()}</List.Heading>
        <List.Description>{faker.lorem.sentence()}</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Image src="http://placeimg.com/28/28/animals" width={28} />
      <List.Content>
        <List.Heading>{faker.animal.cetacean()}</List.Heading>
        <List.Description>{faker.lorem.sentence()}</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default ListExampleDivided;
