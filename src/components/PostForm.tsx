import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  useContext,
  useState,
} from "react";
import { UserContext } from "../contexts/user";
import { PostAction, PostEvent } from "../reducers/postReducer";
import { buildPost } from "../types/post";
import Card from "./Card";

interface PostFormProps {
  dispatch: Dispatch<PostEvent>;
}

function PostForm({ dispatch }: PostFormProps) {
  const [body, setBody] = useState("");
  const user = useContext(UserContext);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setBody(event.target.value);
  }

  function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (body) {
      dispatch({
        type: PostAction.AddPost,
        post: buildPost({
          body,
          author: user,
        }),
      });
      setBody("");
    }
  }

  return (
    <Card>
      <form className="flex flex-col gap-8">
        <input
          className="w-full leading-loose p-1 focus:outline-none border rounded p-2"
          type="text"
          placeholder="What's on your mind?"
          value={body}
          required={true}
          onChange={handleChange}
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-gray-500">
            <span className="cursor-pointer">
              <CameraIcon className="h-6 w-6 inline pr-1" />
              Add media
            </span>
            <span className="cursor-pointer">
              <VideoCameraIcon className="h-6 w-6 inline pr-1" />
              Go live
            </span>
          </div>
          <button
            className="bg-blue-700 rounded text-white px-4 py-2"
            type="submit"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </form>
    </Card>
  );
}

export default PostForm;
