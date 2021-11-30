<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';

	import Image from './Image.svelte';
	import type { AuthorModel } from './models';

	export let postId: string;

	const dispatch = createEventDispatcher();
	let author: AuthorModel = getContext('user');
	let content = '';

	function addComment() {
		dispatch('addComment', {
			author,
			comment: content,
			postId
		});
		content = '';
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.code === 'Enter') {
			addComment();
		}
	}
</script>

<div class="flex gap-4">
	<Image src={author.imageUrl} alt={author.name} />

	<input
		type="text"
		bind:value={content}
		placeholder="Add a comment"
		class="w-full leading-2 rounded-full px-8 py-0.5 focus:outline-none border border-black"
		on:keydown={handleKeydown}
	/>
</div>
