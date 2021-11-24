<script>
	import Card from "./Card.svelte";

	export let author;
	export let addPost;

	let content = "";

	function post() {
		addPost({
			body: content,
			author: author.name,
			authorImageUrl: author.imageUrl
		});
		content = "";
	}
</script>

<Card>
	<div class="flex gap-4">
		<img src={author.imageUrl} alt={author.name} class="rounded-full w-16" />

		<input type="text" bind:value={content} placeholder="What is on your mind?" class="w-full leading-loose p-1" />
	</div>

	<div slot="footer" class="flex justify-between">
		<button class="bg-black rounded-full text-white text-xs px-4 py-2"><i class="fas fa-photo-video"></i>Photo/Video</button>

		<button class="bg-blue-400 rounded text-white px-4 py-2" on:click={post}>Post It</button>
	</div>
</Card>