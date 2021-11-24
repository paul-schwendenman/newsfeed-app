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
			currentValue.filter(item => item.id === postId).map(item => {item.like()});

			return currentValue;
		});

	}

	return {
		addPost,
		likePost,
		set,
		subscribe
	}
}
