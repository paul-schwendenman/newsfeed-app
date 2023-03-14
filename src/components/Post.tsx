import React from "react";
import type { PostType } from "../types/post";

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <div>
      <span>{post.body}</span>
    </div>
  );
}

export default Post;
