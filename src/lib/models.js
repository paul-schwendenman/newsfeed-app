import { v4 as uuidv4 } from 'uuid';


export class CommentModel {
	constructor({
		text = null,
		author = null,
		authorImageUrl = null,
		likes = 0,
		createdAt = new Date()
	} = {}) {
		this.id = uuidv4();
		this.text = text;
		this.author = author;
		this.authorImageUrl = authorImageUrl;
		this.likes = likes;
		this.createdAt = createdAt;
	}

	static build(data) {
		return Object.assign(new CommentModel(), { ...data });
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
		authorImageUrl = null,
		body = null,
		location = "Ohio",
		createdAt = new Date(),
		likes = 0,
		comments = []
	} = {}) {
		this.id = uuidv4();
		this.author = author;
		this.authorImageUrl = authorImageUrl;
		this.body = body;
		this.location = location;
		this.createdAt = createdAt;
		this.likes = likes;
		this.comments = comments;
	}

	static build(data) {
		return Object.assign(new PostModel(), { ...data });
	}

	like() {
		return PostModel.build({
			...this,
			likes: this.likes + 1
		})
	}

	addComment(author, text) {
		return PostModel.build({
			...this,
			comments: [
				CommentModel.build({
					author: author.name,
					authorImageUrl: author.imageUrl,
					text
				}),
				...this.comments
			]
		});
	}

	likeComment(commentId) {
		const comments = this.comments.map(comment => {
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
}