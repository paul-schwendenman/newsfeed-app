<script lang="ts">
import Post from "./Post.svelte";
import PostForm from "./PostForm.svelte";

export let posts = [
	{
		author: "Gyasi Zardes",
		authorImageUrl: "/static/headshots/zardes_gyasi.png",
		body: "This is a post",
		location: "Ohio",
		createdAt: "2021-11-22 17:50",
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