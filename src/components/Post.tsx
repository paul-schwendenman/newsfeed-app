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
    <Card>
      <div className="post flex flex-col">
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
        <div className="flex gap-4 mt-4">
          <div>
            <span className="font-bold pr-1">{post.likes}</span>
            <span className="text-gray-500">Hypes</span>
          </div>
          <div>
            <span className="font-bold pr-1">{post.comments?.length || 0}</span>{" "}
            <span className="text-gray-500">Comments</span>
          </div>
          <div>
            <span className="font-bold pr-1">{post.shareCount || 0}</span>
            <span className="text-gray-500">Shares</span>
          </div>
          <div>
            <span className="font-bold pr-1">{post.viewCount || 0}</span>
            <span className="text-gray-500">Views</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Post;
