<script lang="ts">
import Post from "./Post.svelte";
import PostForm from "./PostForm.svelte";

export let posts;
export let author;

</script>

<div class="p-8">
	<PostForm addPost={posts.addPost} {author} />

	{#each $posts as post}
		<Post {post} />
	{/each}
</div>