<script lang="ts">
	import Card from "./Card.svelte";
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	export let post;

</script>

<Card>
	<div class="header flex my-4">
		<div class="header-image w-16 rounded-full mx-4">
			<img alt="{post.author}" src={post.authorImageUrl} class="rounded-full" />
		</div>
		<div class="flex flex-col header-details">
			<span class="text text-gray-900">{post.author}</span>
			<span class="text-sm text-blue-700"><i class="fas fa-map-marker-alt"></i>{post.location}</span>
			<span class="text-sm text-gray-900">{dayjs(post.createdAt).fromNow()}</span>
		</div>
	</div>
	<div class="content mx-4">
		<div class="post text-lg my-6">
			{post.body}
		</div>

		<div class="summary text-gray-500">
			<span>{post.likes} Likes</span>
			<span class="mx-2">•</span>
			<span>{post.comments?.length} Comments</span>
		</div>
	</div>

	<svelte:fragment slot="footer">
		<button class="mr-4"><i class="fas fa-heart"></i>Like</button>
		<button><i class="fas fa-comment-dots"></i>Comment</button>
	</svelte:fragment>
</Card>
