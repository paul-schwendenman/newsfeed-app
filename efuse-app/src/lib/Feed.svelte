<script lang="ts">
import Post from "./Post.svelte";
import PostForm from "./PostForm.svelte";

export let posts = [
	{
		body: "This is a post",
		likes: 0,
		comments: [],
	}
]


</script>

<div class="p-8">
	<PostForm />

	{#each posts as post}
		<Post {post} />
	{/each}
</div>