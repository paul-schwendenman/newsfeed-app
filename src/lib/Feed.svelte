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

function doPostAction(event) {
	const {
		detail
	} = event;

	posts.dispatch({
		...detail
	})
}

</script>

<div class="p-8">
	<PostForm on:addPost={addPost} />

	{#each $posts as post}
		<Post {post} on:postAction={doPostAction} />
	{/each}
</div>