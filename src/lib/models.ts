import { v4 as uuidv4 } from 'uuid';

interface Author {
	name: string;
	imageUrl: string;
}

interface Comment {
	id?: string;
	text: string;
	author: Author;
	likes?: number;
	createdAt?: Date;
}

interface Post {
	id?: string;
	author: Author;
	body: string;
	location?: string;
	createdAt?: Date;
	likes?: number;
	comments?: Comment[];
}

export class AuthorModel implements Author {
	name: string;
	imageUrl: string;

	constructor({ name = null, imageUrl = null } = {}) {
		this.name = name;
		this.imageUrl = imageUrl;
	}

	static build(data: Author): AuthorModel {
		return Object.assign(new AuthorModel(), { ...data });
	}
}

export class CommentModel implements Comment {
	id: string;
	text: string;
	author: AuthorModel;
	likes: number;
	createdAt: Date;

	constructor({ text = null, author = null, likes = 0, createdAt = new Date() } = {}) {
		this.id = uuidv4();
		this.text = text;
		this.author = author;
		this.likes = likes;
		this.createdAt = createdAt;
	}

	static build(data: Comment): CommentModel {
		return Object.assign(new CommentModel(), { ...data, author: AuthorModel.build(data.author) });
	}

	like(): CommentModel {
		return CommentModel.build({
			...this,
			likes: this.likes + 1
		});
	}
}

export class PostModel implements Post {
	id: string;
	author: AuthorModel;
	body: string;
	location: string;
	createdAt: Date;
	likes: number;
	comments: CommentModel[];

	constructor({
		author = null,
		body = null,
		location = 'Ohio',
		createdAt = new Date(),
		likes = 0,
		comments = []
	} = {}) {
		this.id = uuidv4();
		this.author = author;
		this.body = body;
		this.location = location;
		this.createdAt = createdAt;
		this.likes = likes;
		this.comments = comments;
	}

	static build(data: Post): PostModel {
		return Object.assign(new PostModel(), { ...data, author: AuthorModel.build(data.author) });
	}

	like(): PostModel {
		return PostModel.build({
			...this,
			likes: this.likes + 1
		});
	}

	addComment(author: Author, text: string): PostModel {
		return PostModel.build({
			...this,
			comments: [
				CommentModel.build({
					author: author,
					text
				}),
				...this.comments
			]
		});
	}

	likeComment(commentId: string): PostModel {
		const comments = this.comments.map((comment) => {
			if (commentId === comment.id) {
				return comment.like();
			} else {
				return comment;
			}
		});

		return PostModel.build({
			...this,
			comments
		});
	}

	removeComment(commentId: string): PostModel {
		return PostModel.build({
			...this,
			comments: this.comments.filter((comment) => commentId !== comment.id)
		});
	}
}
