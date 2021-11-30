import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { PostModel } from './models';

export enum Action {
	AddPost = 'addPost',
	LikePost = 'likePost',
	AddPostComment = 'addPostComment',
	LikePostComment = 'likePostComment',
	DeletePostComment = 'deletePostComment'
}

interface ActionEvent {
	type: string;
}

export interface ReduxStore<Type> {
	subscribe: () => Writable<Type>['subscribe'];

	dispatch: (arg0: ActionEvent) => void;
}

function addPost(state, action) {
	const { post } = action;

	return [PostModel.build(post), ...state];
}

function likePost(state, action) {
	const { postId } = action;

	return state.map((post) => {
		if (post.id === postId) {
			return post.like();
		} else {
			return post;
		}
	});
}

function likePostComment(state, action) {
	const { postId, commentId } = action;

	return state.map((post) => {
		if (post.id === postId) {
			return post.likeComment(commentId);
		}
		return post;
	});
}

function deletePostComment(state, action) {
	const { postId, commentId } = action;

	return state.map((post) => {
		if (post.id === postId) {
			return post.removeComment(commentId);
		}
		return post;
	});
}

function addPostComment(state, action) {
	const { postId, comment, author } = action;

	return state.map((post) => {
		if (post.id === postId) {
			return post.addComment(author, comment);
		} else {
			return post;
		}
	});
}

function postReducer(state, action) {
	switch (action.type) {
		case Action.AddPost:
			return addPost(state, action);
		case Action.LikePost:
			return likePost(state, action);
		case Action.AddPostComment:
			return addPostComment(state, action);
		case Action.LikePostComment:
			return likePostComment(state, action);
		case Action.DeletePostComment:
			return deletePostComment(state, action);
		default:
			console.log(`Unknown type: ${action.type}`);

			return state;
	}
}

function reducible<Type>(state, reducer): ReduxStore<Type> {
	const { update, subscribe } = writable(state);

	function dispatch(action) {
		update((state) => reducer(state, action));
	}

	return {
		dispatch,
		subscribe
	};
}

export function postStore(init: PostModel[] = []): ReduxStore<PostModel[]> {
	return reducible<PostModel[]>(init, postReducer);
}
