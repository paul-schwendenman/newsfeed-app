import { writable } from "svelte/store"
import { PostModel } from "./models";


function addPost(state, action) {
	const { post } = action;

	return [PostModel.build(post), ...state];
}


function likePost(state, action) {
	const { postId } = action;

	return state.map((post) => {
		if(post.id === postId) {
			return post.like();
		} else {
			return post;
		}
	});
}

function likePostComment(state, action) {
	const { postId, commentId } = action;

	return state.map((post) => {
		if(post.id === postId) {
			return post.likeComment(commentId);
		}
		return post;
	});
}

function addPostComment(state, action) {
	const { postId, comment, author } = action;

	return state.map(post => {
		if (post.id === postId) {
			return post.addComment(author, comment);
		} else {
			return post;
		}
	});
}

function postReducer(state, action) {
	switch(action.type) {
		case "addPost":
			return addPost(state, action);
		case "likePost":
			return likePost(state, action);
		case "addPostComment":
			return addPostComment(state, action);
		case "likePostComment":
			return likePostComment(state, action);
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