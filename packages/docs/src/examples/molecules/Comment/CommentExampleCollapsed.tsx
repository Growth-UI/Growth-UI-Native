import Comment from "@growth-ui/native/molecules/Comment";
import faker from "faker";
import React from "react";
import Row from "@growth-ui/native/atoms/Row";
import Typography from "@growth-ui/native/atoms/Typography";

const CommentExampleCollapsed = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar src={faker.image.animals()} />
      <Comment.Content>
        <Row>
          <Comment.Author text={faker.animal.bear()} />
          <Comment.Metadata>4d</Comment.Metadata>
        </Row>
        <Comment.Text text={faker.lorem.words()} />
        <Comment.Actions>
          <Comment.Action>
            <Typography color="gray-500" size={12}>
              Reply
            </Typography>
          </Comment.Action>
        </Comment.Actions>
        <Comment.Expander defaultExpanded text="View replies">
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={faker.image.technics()} />
              <Comment.Content>
                <Comment.Author text="americano" />
                <Comment.Text text="Morning coffee~" />
                <Comment.Actions>
                  <Comment.Action>
                    <Typography color="gray-500" size={12}>
                      Reply
                    </Typography>
                  </Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
            <Comment>
              <Comment.Avatar src={faker.image.transport()} />
              <Comment.Content>
                <Comment.Author text="Tom" />
                <Comment.Text text="Let us read books!" />
                <Comment.Actions>
                  <Comment.Action>
                    <Typography color="gray-500" size={12}>
                      Reply
                    </Typography>
                  </Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment.Expander>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src={faker.image.fashion()} />
      <Comment.Content>
        <Row>
          <Comment.Author text={faker.animal.rabbit()} />
          <Comment.Metadata>4d</Comment.Metadata>
        </Row>
        <Comment.Text text="😍 🥰" />
        <Comment.Actions>
          <Comment.Action>
            <Typography color="gray-500" size={12}>
              Reply
            </Typography>
          </Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);

export default CommentExampleCollapsed;
