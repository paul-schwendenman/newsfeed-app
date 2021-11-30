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

	posts.addPost({
		body: content,
		author: name,
		authorImageUrl: imageUrl
	});
}
</script>

<div class="p-8">
	<PostForm on:addPost={addPost}/>

	{#each $posts as post}
		<Post {post} />
	{/each}
</div>