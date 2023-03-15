import React from "react";
import type { PostType } from "../types/post";
import Card from "./Card";

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <div className="post">
      <Card>
        <span className="post-body">{post.body}</span>
      </Card>
    </div>
  );
}

export default Post;
