<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import Card from './Card.svelte';
	import Image from './Image.svelte';
	import type { AuthorModel } from './models';
	import { Action } from './stores';

	const currentUser: AuthorModel = getContext('user');
	const dispatch = createEventDispatcher();

	let content = '';

	function post() {
		dispatch('postAction', {
			type: Action.AddPost,
			post: {
				body: content,
				author: currentUser
			}
		});

		content = '';
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.code === 'Enter') {
			post();
		}
	}
</script>

<Card>
	<div class="flex gap-4">
		<Image src={currentUser.imageUrl} alt={currentUser.name} />

		<input
			type="text"
			bind:value={content}
			placeholder="What is on your mind?"
			class="w-full leading-loose p-1 focus:outline-none"
			on:keydown={handleKeydown}
		/>
	</div>

	<div slot="footer" class="flex justify-between">
		<button class="bg-black rounded-full text-white text-xs px-4 py-2"
			><i class="fas fa-photo-video" />Photo/Video</button
		>

		<button
			class="bg-blue-400 rounded text-white px-4 py-2"
			on:click={post}
			disabled={content === ''}>Post It</button
		>
	</div>
</Card>
