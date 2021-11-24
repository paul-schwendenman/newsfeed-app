import { writable } from "svelte/store"
import { PostModel } from "./models";


export function postStore(defaultValue = []) {
	const { subscribe, set, update} = writable(defaultValue);

	const addPost = (post) => {
		console.log({post})
		update((currentValue) => [PostModel.build(post), ...currentValue])
	}

	return {
		addPost,
		set,
		subscribe
	}
}
