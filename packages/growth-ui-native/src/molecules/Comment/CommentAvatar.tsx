import Image from "../../atoms/Image";
import React, { FC } from "react";

const CommentAvatar: FC<CommentAvatarProps> = (props) => {
  const { circular = true, rounded = false, size = 33, src, ...rest } = props;

  return (
    <Image {...rest} circular={circular} rounded={rounded} src={src} width={size} height={size} />
  );
};

// ======================================================
export interface CommentAvatarProps extends StrictCommentAvatarProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentAvatarProps {
  /** An avatar may appear circular. */
  circular?: boolean;

  /** An avatar may appear rounded. */
  rounded?: boolean;

  /** An avatar may have different size. */
  size?: number;

  /** Specifies the URL of the avatar. */
  src: string;
}

export default CommentAvatar;
