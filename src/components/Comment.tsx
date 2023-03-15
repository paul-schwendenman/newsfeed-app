import dayjs from "dayjs";
import { CommentType } from "../types/comment";

interface CommentProps {
  comment: CommentType;
}

export default function Comment({ comment }: CommentProps) {
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
      <div className="flex gap-4 mt-4">
        <div>
          <span className="font-bold pr-1">{comment.likes}</span>
          <span className="text-gray-500">Hypes</span>
        </div>
        <div>
          <span className="font-bold pr-1">{comment.replies?.length || 0}</span>{" "}
          <span className="text-gray-500">Replies</span>
        </div>
        <div>
          <span className="font-bold pr-1">{comment.shareCount || 0}</span>
          <span className="text-gray-500">Shares</span>
        </div>
      </div>
    </div>
  );
}
