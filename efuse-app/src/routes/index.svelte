<script lang="ts">
	import Feed from "$lib/Feed.svelte";
	import { postStore } from "$lib/stores";

	let posts = postStore([
		{
			author: "Gyasi Zardes",
			authorImageUrl: "/static/headshots/zardes_gyasi.png",
			body: "This is a post",
			location: "Ohio",
			createdAt: "2021-11-22 17:50",
			likes: 0,
			comments: [],
		}
	]);

	let author = {
		name: "Harrison Afful",
		imageUrl: "/static/headshots/afful_harrison.png"
	};
</script>

<div class="h-full max-w-screen-md mx-auto bg-gray-300">
	<Feed {posts} {author}></Feed>
</div>