import Button from "@growth-ui/native/atoms/Button";
import Collapse from "@growth-ui/native/atoms/Collapse";
import Icon from "@growth-ui/native/atoms/Icon";
import List from "@growth-ui/native/molecules/List";
import React, { useState } from "react";
import Row from "@growth-ui/native/atoms/Row";
import Typography from "@growth-ui/native/atoms/Typography";

const ListExampleCollapse = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <List divided relaxed verticalAlign="middle">
      <List.Item swipeable rightContent={<Icon color="yellow-400" name="star" />}>
        <Icon name="drafts" />
        <List.Content>
          <Typography>Swipe to the left</Typography>
        </List.Content>
      </List.Item>
      <List.Item
        swipeable
        leftContent={<Button color="red-400">Action!</Button>}
        onPress={() => setExpanded(!expanded)}
      >
        <Row horizontalAlign="space-between" verticalAlign="middle" style={{ flex: 1 }}>
          <Row>
            <Typography>Swipe to the right</Typography>
          </Row>
          <Icon name="chevron down" flipped={expanded} />
        </Row>
      </List.Item>
      <Collapse expanded={expanded}>
        <List relaxed verticalAlign="middle">
          <List.Item style={{ paddingLeft: 40 }}>
            <Icon name="star" />
            <List.Content>
              <Typography>Starred</Typography>
            </List.Content>
          </List.Item>
        </List>
      </Collapse>
    </List>
  );
};

export default ListExampleCollapse;
