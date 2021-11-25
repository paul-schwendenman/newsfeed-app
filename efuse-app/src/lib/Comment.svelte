<script>
	import Image from "./Image.svelte";

	export let createdAt;
	export let text;
	export let author;
	export let authorImageUrl;
	export let likes;
</script>

<div class="flex">
	<div>
		<Image src={authorImageUrl} alt={author} />
	</div>
	<div>
		{text}
	</div>
</div>