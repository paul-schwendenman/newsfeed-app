<script lang="ts">
	import dayjs from 'dayjs';
	import Feed from '$lib/Feed.svelte';
	import { CommentModel, PostModel } from '$lib/models';
	import { postStore } from '$lib/stores';
	import { setContext } from 'svelte';

	let posts = postStore([
		PostModel.build({
			author: {
				name: 'Gyasi Zardes',
				imageUrl: '/headshots/zardes_gyasi.png'
			},
			body: 'This is a post',
			createdAt: '2021-11-22 17:50'
		}),
		PostModel.build({
			author: {
				name: 'Gyasi Zardes',
				imageUrl: '/headshots/zardes_gyasi.png'
			},
			body: 'This is another post',
			createdAt: '2021-11-22 17:50',
			comments: [
				CommentModel.build({
					author: {
						name: 'Gyasi Zardes',
						imageUrl: '/headshots/zardes_gyasi.png'
					},
					text: 'This is a comment',
					createdAt: dayjs().subtract(11, 'minutes')
				})
			]
		})
	]);

	setContext('posts', posts);

	let author = {
		name: 'Harrison Afful',
		imageUrl: '/headshots/afful_harrison.png'
	};

	function doPostAction(event) {
		const { detail } = event;

		posts.dispatch({
			...detail
		});
	}

	setContext('user', author);
</script>

<div class="h-full max-w-screen-md mx-auto bg-gray-300">
	<Feed {posts} on:postAction={doPostAction} />
</div>
