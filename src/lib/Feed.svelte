<script lang="ts">
import Post from "./Post.svelte";
import PostForm from "./PostForm.svelte";

export let posts;

function addPost(event) {
	const {
		detail: {
			author: {
				name,
				imageUrl
			},
			content
		}
	} = event;

	posts.dispatch({
		type: "addPost",
		post: {
			body: content,
			author: name,
			authorImageUrl: imageUrl
		}
	});
}

function addComment(event) {
	const {
		detail: {
			author,
			content: comment,
			postId
		}
	} = event;

	posts.dispatch({
		type: "addPostComment",
		postId,
		author,
		comment
	});
}

function likePost(event) {
	const {
		detail: {
			postId
		}
	} = event;

	posts.dispatch({
		type: "likePost",
		postId
	})
}

function likePostComment(event) {
	const {
		detail: {
			postId,
			id: commentId
		}
	} = event;

	posts.dispatch({
		type: 'likePostComment',
		postId,
		commentId
	});
}
</script>

<div class="p-8">
	<PostForm on:addPost={addPost} />

	{#each $posts as post}
		<Post {post} on:addComment={addComment} on:likePost={likePost} on:likePostComment={likePostComment} />
	{/each}
</div>