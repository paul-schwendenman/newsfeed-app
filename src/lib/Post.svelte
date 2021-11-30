<script lang="ts">
	import Card from "./Card.svelte";
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime.js';
	import { getContext } from "svelte";
	import CommentList from "./CommentList.svelte";
	import Image from "./Image.svelte";
	import CommentForm from "./CommentForm.svelte";

	dayjs.extend(relativeTime);

	export let post;

	let showComments = post.comments.length > 0;

	const posts = getContext('posts');

	function like() {
		posts.likePost(post.id);
	}

	function toggleShowComments() {
		showComments = !showComments;
	}
</script>

<Card>
	<div class="header flex my-4">
		<div class="header-image mx-4">
			<Image alt="{post.author}" src={post.authorImageUrl} />
		</div>
		<div class="flex flex-col header-details">
			<span class="text text-gray-900 font-medium">{post.author}</span>
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
		<button on:click={like} class="mr-4"><i class="fas fa-heart"></i>Like</button>
		<button on:click={toggleShowComments}><i class="fas fa-comment-dots"></i>Comment</button>

		{#if showComments}
			<div class="mt-4">
				<CommentForm postId={post.id} on:addComment />
				<CommentList comments={post.comments} />
			</div>
		{/if}
	</svelte:fragment>
</Card>
