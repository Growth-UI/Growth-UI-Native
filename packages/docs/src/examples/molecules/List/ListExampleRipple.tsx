import faker from "faker";
import List from "@growth-ui/native/molecules/List";
import React from "react";

const ListExampleRipple = () => (
  <>
    <List relaxed>
      <List.Item>
        <List.Image src="http://placeimg.com/28/28/people" width={28} />
        <List.Content>
          <List.Heading>Ripple</List.Heading>
          <List.Description>Click me for the ripple effect</List.Description>
        </List.Content>
      </List.Item>
    </List>

    <List relaxed ripple={false}>
      <List.Item>
        <List.Image src="http://placeimg.com/28/28/people" width={28} />
        <List.Content>
          <List.Heading>No ripple</List.Heading>
          <List.Description>{faker.lorem.sentence()}</List.Description>
        </List.Content>
      </List.Item>
    </List>

    <List relaxed rippleColor="#d1fae5">
      <List.Item>
        <List.Image src="http://placeimg.com/28/28/people" width={28} />
        <List.Content>
          <List.Heading>Ripple with #d1fae5</List.Heading>
          <List.Description>{faker.lorem.sentence()}</List.Description>
        </List.Content>
      </List.Item>
    </List>

    <List relaxed rippleColor="#fca5a5">
      <List.Item>
        <List.Image src="http://placeimg.com/28/28/people" width={28} />
        <List.Content>
          <List.Heading>Ripple with #d1fae5</List.Heading>
          <List.Description>{faker.lorem.sentence()}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  </>
);

export default ListExampleRipple;
