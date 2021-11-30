<script>
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime.js';
	import { createEventDispatcher } from 'svelte';
	import Image from "./Image.svelte";

	dayjs.extend(relativeTime);

	export let createdAt;
	export let text;
	export let author;
	export let likes;
	export let id;

	const dispatch = createEventDispatcher();

	function likeComment() {
		dispatch('likePostComment', {
			commentId: id
		})
	}

	function deleteComment() {
		dispatch('deletePostComment', {
			commentId: id
		})
	}
</script>

<div class="flex items-center my-4">
	<div class="mr-4">
		<Image src={author.imageUrl} alt={author.name} />
	</div>
	<div class="w-full p-4 bg-gray-300 rounded-lg text-gray-900">
		<div class="flex justify-between w-full mr-8">
			<span class="leading-8 font-medium">{author.name}</span>
			<span class="leading-8 text-gray-500">{dayjs(createdAt).fromNow()}</span>
		</div>
		<div>
			{text}
		</div>
		<div class="text-gray-500">
			<span class="mr-2">{likes} likes</span> |
			<button class="m-2" on:click={likeComment}><i class="fas fa-heart"></i> Like</button> |
			<button class="m-2"><i class="fas fa-pencil-alt"></i> Edit</button> |
			<button class="m-2" on:click={deleteComment}><i class="fas fa-trash"></i> Delete</button>
		</div>
	</div>
</div>