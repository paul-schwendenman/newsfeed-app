import React, { Dispatch } from "react";
import { PostEvent } from "../reducers/postReducer";
import { PostType } from "../types/post";
import Post from "./Post";
import PostForm from "./PostForm";

interface FeedProps {
  dispatch: Dispatch<PostEvent>;
  posts?: PostType[];
}

function Feed({ dispatch, posts }: FeedProps) {
  return (
    <div className="p-2 md:p-8">
      <PostForm dispatch={dispatch}></PostForm>
      {posts?.map((post) => (
        <div key={post.id}>
          <Post dispatch={dispatch} post={post}></Post>
        </div>
      ))}
    </div>
  );
}

export default Feed;
