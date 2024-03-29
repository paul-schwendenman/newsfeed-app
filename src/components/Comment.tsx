import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { CommentType } from "../types/comment";
import {
  ChatBubbleLeftIcon,
  FireIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { Dispatch } from "react";
import { PostAction, PostEvent } from "../reducers/postReducer";

dayjs.extend(relativeTime);

interface CommentProps {
  dispatch: Dispatch<PostEvent>;
  postId: string;
  comment: CommentType;
}

export default function Comment({ dispatch, postId, comment }: CommentProps) {
  function handleLikeComment() {
    dispatch({
      type: PostAction.LikePostComment,
      postId,
      commentId: comment.id,
    });
  }

  return (
    <div className="py-4">
      <div className="flex gap-4">
        <div>
          <div className="w-16 h-16 rounded-full flex justify-center items-center bg-red-600"></div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text text-lg text-gray-900 font-medium">
            {comment.author.name}
          </div>
          <div className="text-xs text-gray-900">
            {dayjs(comment.createdAt).fromNow()}
          </div>
        </div>
      </div>

      <div className="pt-4">{comment.body}</div>
      <div className="flex gap-4 mt-4 justify-around md:justify-start">
        <div>
          <FireIcon
            className={`h-4 w-4 inline cursor-pointer ${
              comment.likedByUser && "text-orange-600"
            }`}
            onClick={handleLikeComment}
          />
          <span className="text-xs font-bold p-1">{comment.likes}</span>
          <span className="text-2xs text-gray-500">Hypes</span>
        </div>
        <div>
          <ChatBubbleLeftIcon className="h-4 w-4 inline" />
          <span className="text-xs font-bold p-1">
            {comment.replies?.length || 0}
          </span>{" "}
          <span className="text-2xs text-gray-500">Replies</span>
        </div>
        <div>
          <ShareIcon className="h-4 w-4 inline" />
          <span className="text-xs font-bold p-1">
            {comment.shareCount || 0}
          </span>
          <span className="text-2xs text-gray-500">Shares</span>
        </div>
      </div>
    </div>
  );
}
