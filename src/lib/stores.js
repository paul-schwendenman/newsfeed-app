import { writable } from "svelte/store"
import { PostModel } from "./models";


function addPost(state, action) {
	const { post } = action;

	return [PostModel.build(post), ...state];
}


function likePost(state, action) {
	const { postId } = action;

	state.filter(post => post.id === postId).map((post) => post.like());

	return state
}

function addPostComment(state, action) {
	const { postId, comment, author } = action;

	state.filter(post => post.id === postId)[0].addComment(author, comment);

	return state;
}

function postReducer(state, action) {
	switch(action.type) {
		case "addPost":
			return addPost(state, action);
		case "likePost":
			return likePost(state, action);
		case "addPostComment":
			return addPostComment(state, action);
		default:
			console.log(`Unknown type: ${action.type}`);

			return state;

	}
}

function reducible(state, reducer) {
	const { update, subscribe } = writable(state);

	function dispatch(action) {
		update(state => reducer(state, action));
	}

	return {
		dispatch,
		subscribe
	};
}

export function postStore(init = []) {
	return reducible(init, postReducer);
}