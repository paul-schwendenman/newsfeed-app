<script>
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import Image from "./Image.svelte";

	dayjs.extend(relativeTime);

	export let createdAt;
	export let text;
	export let author;
	export let authorImageUrl;
	export let likes;
</script>

<div class="flex items-center my-4">
	<div class="mr-4">
		<Image src={authorImageUrl} alt={author} />
	</div>
	<div class="w-full p-4 bg-gray-300 rounded-lg text-gray-900">
		<div class="flex justify-between w-full mr-8">
			<span class="leading-8">{author}</span>
			<span class="leading-8 text-gray-500">{dayjs(createdAt).fromNow()}</span>
		</div>
		<div>
			{text}
		</div>
		<div class="text-gray-500">
			<span class="mr-2">{likes} likes</span> |
			<button class="m-2"><i class="fas fa-heart"></i> Like</button> |
			<button class="m-2"><i class="fas fa-pencil-alt"></i> Edit</button> |
			<button class="m-2"><i class="fas fa-trash"></i> Delete</button>
		</div>
	</div>
</div>