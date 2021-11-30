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
		this.likes = this.likes + 1;
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
		this.likes = this.likes + 1;
	}

	addComment(author, text) {
		this.comments = [CommentModel.build({
			author: author.name,
			authorImageUrl: author.imageUrl,
			text
		}), ...this.comments];
	}
}