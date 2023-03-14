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
	}

	return  (
		<div>
			<input type="text" placeholder="Post" value={body} onChange={handleChange} />
			<button onClick={handleSubmit}>Post</button>
		</div>
	)

}

export default PostForm;
