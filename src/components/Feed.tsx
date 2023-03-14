import React from 'react';
import { PostType } from '../types/post';
import Post from './Post';
import PostForm from './PostForm';

interface FeedProps {
	addPost: (post: PostType) => void;
	posts?: PostType[];
}

function Feed({ addPost, posts }: FeedProps) {
	return (
		<div>
			<PostForm addPost={addPost}></PostForm>
			{ posts?.map(post => (
				<div key={post.id}>
					<Post post={post}></Post>
				</div>
			))}
		</div>
	)

}

export default Feed;
