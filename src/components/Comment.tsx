import dayjs from "dayjs";
import { CommentType } from "../types/comment";

interface CommentProps {
  comment: CommentType;
}

export default function Comment({ comment }: CommentProps) {
  <div>
    <div className="">
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

    <div></div>
    {comment.body}
  </div>;
}
