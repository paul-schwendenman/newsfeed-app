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
			<span class="text">{post.author}</span>
			<span class="text-sm text-blue-700">{post.location}</span>
			<span class="text-sm">{dayjs(post.createdAt).fromNow()}</span>
		</div>
	</div>
	<div class="content mx-4">
		<div class="post text-lg my-6">
			{post.body}
		</div>

		<div class="summary">
			<span>{post.likes} Likes</span>
			<span>{post.comments?.length} Comments</span>
		</div>
	</div>

	<svelte:fragment slot="footer">
		<button>Like</button>
		<button>Comment</button>
	</svelte:fragment>
</Card>
