<script lang="ts">
	import Card from "./Card.svelte";

	export let post;

</script>

<Card>
	<div>
		<!-- <span class="text-sm">{post.authorImg}</span> -->
		<span class="text-sm">{post.author}</span>
		<span class="text-xs">{post.time}</span>
	</div>
	{post.body}

	<div class="summary">
		<span>{post.likes} Likes</span>
		<span>{post.comments?.length} Comments</span>
	</div>
	<svelte:fragment slot="footer">
		<button>Like</button>
		<button>Comment</button>
	</svelte:fragment>
</Card>
