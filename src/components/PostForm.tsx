import React, { ChangeEvent, useState } from "react";
import { PostType } from "../types/post";

interface PostFormProps {
	addPost: (post: PostType) => void;
}

function PostForm({ addPost }: PostFormProps) {
	const [body, setBody] = useState("");

	function handleChange(event: ChangeEvent<HTMLInputElement>): void {
		setBody(event.target.value);
	}

	function handleSubmit() {
		addPost({
			id: crypto.randomUUID(),
			body
		});
		setBody("");
	}

	return  (
		<>
		<div className="flex gap-8">
			<input
				className="w-full leading-loose p-1 focus:outline-none"
				type="text"
				placeholder="What's on your mind?"
				value={body}
				onChange={handleChange} />
		</div>
		<div className="flex justify-between">
			<button
				className="bg-blue-400 rounded text-white px-4 py-2"
				onClick={handleSubmit}>
					Post
				</button>
		</div>
		</>
	)

}

export default PostForm;
