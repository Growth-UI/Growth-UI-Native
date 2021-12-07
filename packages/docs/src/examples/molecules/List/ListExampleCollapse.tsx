import Collapse from "@growth-ui/native/atoms/Collapse";
import Icon from "@growth-ui/native/atoms/Icon";
import List from "@growth-ui/native/molecules/List";
import React, { useState } from "react";
import Row from "@growth-ui/native/atoms/Row";
import Spacer from "@growth-ui/native/atoms/Spacer";
import Typography from "@growth-ui/native/atoms/Typography";

const ListExampleCollapse = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <List divided relaxed verticalAlign="middle">
      <List.Item>
        <Icon name="drafts" />
        <List.Content>
          <Typography>Drafts</Typography>
        </List.Content>
      </List.Item>
      <List.Item onPress={() => setExpanded(!expanded)}>
        <Row horizontalAlign="space-between" verticalAlign="middle" style={{ flex: 1 }}>
          <Row>
            <Icon name="inbox" />
            <Spacer inline axis="horizontal" size={8} />
            <Typography>Inbox</Typography>
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
