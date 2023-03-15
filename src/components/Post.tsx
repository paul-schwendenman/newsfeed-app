import React from "react";
import type { PostType } from "../types/post";
import Card from "./Card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(relativeTime);

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <div className="post">
      <Card
        footer={
          <div className="flex gap-4">
            <div>
              <span className="font-bold">{post.likes}</span> Hypes
            </div>
            <div>
              <span className="font-bold">{post.comments?.length || 0}</span>{" "}
              Comments
            </div>
            <div>
              <span className="font-bold">{post.shareCount || 0}</span> Shares
            </div>
            <div>
              <span className="font-bold">{post.viewCount || 0}</span> Views
            </div>
          </div>
        }
      >
        <div className="flex my-4 gap-4">
          <div className="">
            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-red-600"></div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text text-lg text-gray-900 font-medium">
              {post.author.name}
            </div>
            <div className="text-xs text-gray-900">
              {dayjs(post.createdAt).fromNow()}
            </div>
          </div>
        </div>
        <span className="post-body">{post.body}</span>
      </Card>
    </div>
  );
}

export default Post;
