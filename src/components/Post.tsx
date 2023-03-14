import React from "react";
import type { PostType } from "../types/post";
import Card from "./Card";

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <Card>
      <span>{post.body}</span>
    </Card>
  );
}

export default Post;
