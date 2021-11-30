import { v4 as uuidv4 } from 'uuid';

export class AuthorModel {
	constructor({ name = null, imageUrl = null } = {}) {
		this.name = name;
		this.imageUrl = imageUrl;
	}

	static build(data) {
		return Object.assign(new AuthorModel(), { ...data });
	}
}

export class CommentModel {
	constructor({ text = null, author = null, likes = 0, createdAt = new Date() } = {}) {
		this.id = uuidv4();
		this.text = text;
		this.author = author;
		this.likes = likes;
		this.createdAt = createdAt;
	}

	static build(data) {
		return Object.assign(new CommentModel(), { ...data, author: AuthorModel.build(data.author) });
	}

	like() {
		return CommentModel.build({
			...this,
			likes: this.likes + 1
		});
	}
}

export class PostModel {
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

	static build(data) {
		return Object.assign(new PostModel(), { ...data, author: AuthorModel.build(data.author) });
	}

	like() {
		return PostModel.build({
			...this,
			likes: this.likes + 1
		});
	}

	addComment(author, text) {
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

	likeComment(commentId) {
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

	removeComment(commentId) {
		return PostModel.build({
			...this,
			comments: this.comments.filter((comment) => commentId !== comment.id)
		});
	}
}
