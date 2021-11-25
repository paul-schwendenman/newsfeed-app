<script>
	import Comment from "./Comment.svelte";

	export let comments = [];
</script>

{#each comments as comment }
	<Comment {...comment} />
{/each}