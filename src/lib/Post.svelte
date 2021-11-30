<script lang="ts">
	import Card from './Card.svelte';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime.js';
	import { createEventDispatcher, setContext } from 'svelte';
	import CommentList from './CommentList.svelte';
	import Image from './Image.svelte';
	import CommentForm from './CommentForm.svelte';

	dayjs.extend(relativeTime);

	export let post;

	const dispatch = createEventDispatcher();
	let showComments = post.comments.length > 0;

	function action(type) {
		return (event) => dispatch('postAction', { ...event.detail, type, postId: post.id });
	}

	function toggleShowComments() {
		showComments = !showComments;
	}

	setContext('postId', post.id);
</script>

<Card>
	<div class="header flex my-4">
		<div class="header-image mx-4">
			<Image alt={post.author.name} src={post.author.imageUrl} />
		</div>
		<div class="flex flex-col header-details">
			<span class="text text-gray-900 font-medium">{post.author.name}</span>
			<span class="text-sm text-blue-700"><i class="fas fa-map-marker-alt" />{post.location}</span>
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
		<button on:click={action('likePost')} class="mr-4"><i class="fas fa-heart" />Like</button>
		<button on:click={toggleShowComments}><i class="fas fa-comment-dots" />Comment</button>

		{#if showComments}
			<div class="mt-4">
				<CommentForm postId={post.id} on:addComment={action('addPostComment')} />
				<CommentList
					comments={post.comments}
					on:likePostComment={action('likePostComment')}
					on:deletePostComment={action('deletePostComment')}
				/>
			</div>
		{/if}
	</svelte:fragment>
</Card>
