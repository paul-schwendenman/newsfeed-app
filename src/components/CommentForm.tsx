import {
  ChatBubbleLeftIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import { ChangeEvent, MouseEvent, useState } from "react";
import { CommentType } from "../types/comment";

interface CommentFormProps {
  addComment: (comment: CommentType) => void;
}

function CommentForm({ addComment }: CommentFormProps) {
  const [body, setBody] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setBody(event.target.value);
  }

  function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (body) {
      addComment({
        id: crypto.randomUUID(),
        body,
        author: {
          name: "Tim",
        },
        createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        likes: 0,
      });
      setBody("");
    }
  }

  return (
    <form className="flex justify-between bg-gray-300 rounded-full p-2 mt-4">
      <ChatBubbleLeftIcon className="h-6 w-6 inline" />

      <input
        className="focus:outline-none bg-inherit grow placeholder:text-gray-700 ml-4"
        placeholder="Add comment"
        type="text"
        value={body}
        onChange={handleChange}
      />
      <button
        className="px-1 text-gray-700"
        type="submit"
        onClick={handleSubmit}
      >
        <PlusCircleIcon className="w-6 h-6" />
      </button>
    </form>
  );
}

export default CommentForm;
