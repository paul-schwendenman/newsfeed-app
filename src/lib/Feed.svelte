<script lang="ts">
import { createEventDispatcher } from "svelte";

import Post from "./Post.svelte";
import PostForm from "./PostForm.svelte";

export let posts;

const dispatch = createEventDispatcher();

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

	dispatch('postAction', {
		type: "addPost",
		post: {
			body: content,
			author: name,
			authorImageUrl: imageUrl
		}
	});
}

</script>

<div class="p-8">
	<PostForm on:addPost={addPost} />

	{#each $posts as post}
		<Post {post} on:postAction />
	{/each}
</div>