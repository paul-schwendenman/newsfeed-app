<script lang="ts">
	import type { ReduxStore } from '$lib/stores';
	import type { PostModel } from './models';

	import Post from './Post.svelte';
	import PostForm from './PostForm.svelte';

	export let posts: ReduxStore<PostModel[]>;
</script>

<div class="p-8">
	<PostForm on:postAction />

	{#each $posts as post}
		<Post {post} on:postAction />
	{/each}
</div>
