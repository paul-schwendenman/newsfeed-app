import { time_ranges_to_array } from "svelte/internal";
import { writable } from "svelte/store"
import { PostModel } from "./models";


export function postStore(defaultValue = []) {
	const { subscribe, set, update} = writable(defaultValue);

	const addPost = (post) => {
		update((currentValue) => [PostModel.build(post), ...currentValue])
	}

	const likePost = (postId) => {
		update((currentValue) => {
			currentValue.filter(post => post.id === postId).map(post => {post.like()});

			return currentValue;
		});

	}

	const addPostComment = (postId, comment) => {
		const { author, content } = comment;

		update((currentValue) => {
			currentValue.filter(post => post.id === postId)[0].addComment(author, content);

			return currentValue;
		});
	}

	return {
		addPost,
		likePost,
		addPostComment,
		set,
		subscribe
	}
}
