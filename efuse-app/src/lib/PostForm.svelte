<script>
	import Card from "./Card.svelte";
</script>

<Card>
	<p>What is on your mind?</p>

	<div slot="footer" class="flex justify-between">
		<button class="bg-black rounded-full text-white text-xs px-4 py-2">Photo/Video</button>
		<button class="bg-blue-300 rounded text-white px-4 py-2">Post It</button>
	</div>
</Card>