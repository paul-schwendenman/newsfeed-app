<script>
	import { createEventDispatcher, getContext } from "svelte";

	import Image from "./Image.svelte";

	export let postId;

	const dispatch = createEventDispatcher();
	let author = getContext('user');
	let content = "";

	function addComment() {
		dispatch('addComment', {
			author,
			content,
			postId
		});
		content = "";
	}

	function handleKeydown(event) {
		if(event.keyCode == 13) {
			addComment()
		}
	}
</script>

<div class="flex gap-4">
	<Image src={author.imageUrl} alt={author.name} />

	<input type="text" bind:value={content} placeholder="Add a comment" class="w-full leading-2 rounded-full px-8 py-0.5 focus:outline-none border border-black" on:keydown={handleKeydown} />
</div>