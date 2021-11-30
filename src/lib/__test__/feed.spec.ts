import { render } from '@testing-library/svelte';
import { readable } from 'svelte/store';
import Feed from '../Feed.svelte';
import { AuthorModel, PostModel } from '../models';

test.skip('should render', () => {
	const postAuthor = AuthorModel.build({
		name: 'Gyasi Zardes',
		imageUrl: '/headshots/zardes_gyasi.png'
	});

	const posts = readable([
		PostModel.build({
			author: postAuthor,
			body: 'This is a post',
			createdAt: new Date('2021-11-22 17:50')
		})
	]);

	const author = {
		name: 'Harrison Afful',
		imageUrl: '/headshots/afful_harrison.png'
	};

	const results = render(Feed, { props: { posts }, context: { user: author } });

	expect(() => results.getByText('This is a post')).not.toThrow();
});
