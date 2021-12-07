import Comment from "@growth-ui/native/molecules/Comment";
import faker from "faker";
import Icon from "@growth-ui/native/atoms/Icon";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import Typography from "@growth-ui/native/atoms/Typography";

const CommentExampleComment = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar src={faker.image.animals()} />
      <Comment.Content>
        <Comment.Author text={faker.animal.bear()} />
        <Comment.Metadata>Today at 1:42PM</Comment.Metadata>
        <Comment.Text text="가나다라마바사 아자차 카 파 타하" />
        <Comment.Actions>
          <Comment.Action>
            <Icon name="thumbs up" size={15} />
            <Spacer size={5} />
            <Typography>1.6k</Typography>
          </Comment.Action>
          <Comment.Action>
            <Icon name="thumbs down" size={15} />
            <Spacer size={5} />
            <Typography>10</Typography>
          </Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src={faker.image.fashion()} />
      <Comment.Content>
        <Comment.Author text={faker.animal.cat()} />
        <Comment.Metadata>Today at 2:42PM</Comment.Metadata>
        <Comment.Text text="😍 🥰" />
        <Comment.Actions>
          <Comment.Action>
            <Icon name="thumbs up" size={15} />
            <Spacer size={5} />
            <Typography>1k</Typography>
          </Comment.Action>
          <Comment.Action>
            <Icon name="thumbs down" size={15} />
            <Spacer size={5} />
            <Typography>3</Typography>
          </Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);

export default CommentExampleComment;
