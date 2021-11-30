<script lang="ts">
	import Post from "./Post.svelte";
	import PostForm from "./PostForm.svelte";

	export let posts;
</script>

<div class="p-8">
	<PostForm on:postAction />

	{#each $posts as post}
		<Post {post} on:postAction />
	{/each}
</div>