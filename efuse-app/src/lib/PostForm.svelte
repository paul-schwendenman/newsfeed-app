<script>
	import { getContext } from "svelte";
	import Card from "./Card.svelte";
	import Image from "./Image.svelte";

	export let author;

	let content = "";
	const posts = getContext('posts');

	function post() {
		posts.addPost({
			body: content,
			author: author.name,
			authorImageUrl: author.imageUrl
		});
		content = "";
	}
</script>

<Card>
	<div class="flex gap-4">
		<Image src={author.imageUrl} alt={author.name} />

		<input type="text" bind:value={content} placeholder="What is on your mind?" class="w-full leading-loose p-1 focus:outline-none" />
	</div>

	<div slot="footer" class="flex justify-between">
		<button class="bg-black rounded-full text-white text-xs px-4 py-2"><i class="fas fa-photo-video"></i>Photo/Video</button>

		<button class="bg-blue-400 rounded text-white px-4 py-2" on:click={post} disabled={content === ""}>Post It</button>
	</div>
</Card>