<script>
	import { createEventDispatcher, getContext } from "svelte";
	import Card from "./Card.svelte";
	import Image from "./Image.svelte";

	const currentUser = getContext('user');
	const dispatch = createEventDispatcher();

	let content = "";

	function post() {
		dispatch('addPost', {
			content,
			author: currentUser
		})

		content = "";
	}

	function handleKeydown(event) {
		if(event.keyCode == 12) {
			post();
		}
	}
</script>

<Card>
	<div class="flex gap-4">
		<Image src={currentUser.imageUrl} alt={currentUser.name} />

		<input type="text" bind:value={content} placeholder="What is on your mind?" class="w-full leading-loose p-1 focus:outline-none" on:keydown={handleKeydown} />
	</div>

	<div slot="footer" class="flex justify-between">
		<button class="bg-black rounded-full text-white text-xs px-4 py-2"><i class="fas fa-photo-video"></i>Photo/Video</button>

		<button class="bg-blue-400 rounded text-white px-4 py-2" on:click={post} disabled={content === ""}>Post It</button>
	</div>
</Card>