import React, { ChangeEvent, MouseEvent, useState } from "react";
import { PostType } from "../types/post";
import Card from "./Card";

interface PostFormProps {
  addPost: (post: PostType) => void;
}

function PostForm({ addPost }: PostFormProps) {
  const [body, setBody] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setBody(event.target.value);
  }

  function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (body) {
      addPost({
        id: crypto.randomUUID(),
        body,
      });
      setBody("");
    }
  }

  return (
    <form>
      <Card
        footer={
          <div className="flex justify-between">
            <button
              className="bg-blue-400 rounded text-white px-4 py-2"
              type="submit"
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        }
      >
        <div className="flex gap-8">
          <input
            className="w-full leading-loose p-1 focus:outline-none"
            type="text"
            placeholder="What's on your mind?"
            value={body}
            required={true}
            onChange={handleChange}
          />
        </div>
      </Card>
    </form>
  );
}

export default PostForm;
