<script lang="ts">
import Post from "./Post.svelte";
import PostForm from "./PostForm.svelte";

export let posts;
export let author;


function addPost(event) {
	console.log(event)
	const {
		detail: {
			author: {
				name,
				imageUrl
			},
			content
		}
	} = event;

	console.log({content, name, imageUrl})

	posts.addPost({
		body: content,
		author: name,
		authorImageUrl: imageUrl
	});
}
</script>

<div class="p-8">
	<PostForm {author} on:addPost={addPost}/>

	{#each $posts as post}
		<Post {post} />
	{/each}
</div>