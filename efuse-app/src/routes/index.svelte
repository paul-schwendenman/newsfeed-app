<script lang="ts">
	import Feed from "$lib/Feed.svelte";
	import { PostModel } from "$lib/models";
	import { postStore } from "$lib/stores";
	import { setContext } from "svelte";

	let posts = postStore([
		PostModel.build({
			author: "Gyasi Zardes",
			authorImageUrl: "/headshots/zardes_gyasi.png",
			body: "This is a post",
			createdAt: "2021-11-22 17:50",
		})
	]);

	setContext('posts', posts);

	let author = {
		name: "Harrison Afful",
		imageUrl: "/headshots/afful_harrison.png"
	};
</script>

<div class="h-full max-w-screen-md mx-auto bg-gray-300">
	<Feed {posts} {author}></Feed>
</div>