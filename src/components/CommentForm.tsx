import {
  ChatBubbleLeftIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { ChangeEvent, Dispatch, MouseEvent, useState } from "react";
import { PostAction, PostEvent } from "../reducers/postReducer";
import { buildComment } from "../types/comment";

interface CommentFormProps {
  dispatch: Dispatch<PostEvent>;
  postId: string;
}

function CommentForm({ dispatch, postId }: CommentFormProps) {
  const [body, setBody] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setBody(event.target.value);
  }

  function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (body) {
      const comment = buildComment({
        author: {
          name: "Tim",
        },
        body,
      });
      dispatch({
        type: PostAction.AddPostComment,
        postId,
        comment,
      });
      setBody("");
    }
  }

  return (
    <form className="flex justify-between bg-gray-300 rounded-full p-2 mt-4">
      <ChatBubbleLeftIcon className="h-6 w-6 inline text-gray-700" />

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
