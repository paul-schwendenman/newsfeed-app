<script lang="ts">
import CommentList from "./CommentList.svelte";
import Post from "./Post.svelte";
import PostForm from "./PostForm.svelte";

const posts = [
	{
		body: "This is a comment",
		likes: 0,
		comments: [],
	}
]


</script>

<div class="w-96 mx-auto p-8">
	<PostForm />

	{#each posts as post}
		<Post {post} />
	{/each}
</div>