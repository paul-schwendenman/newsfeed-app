import React from "react";
import { CommentType } from "../types/comment";
import { PostType } from "../types/post";
import Post from "./Post";
import PostForm from "./PostForm";

interface FeedProps {
  addPost: (post: PostType) => void;
  addCommentToPost: (comment: CommentType, postId: string) => void;
  posts?: PostType[];
}

function Feed({ addPost, addCommentToPost, posts }: FeedProps) {
  return (
    <div className="p-2 md:p-8">
      <PostForm addPost={addPost}></PostForm>
      {posts?.map((post) => (
        <div key={post.id}>
          <Post addCommentToPost={addCommentToPost} post={post}></Post>
        </div>
      ))}
    </div>
  );
}

export default Feed;
