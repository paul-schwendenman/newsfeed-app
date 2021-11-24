import { v4 as uuidv4 } from 'uuid';

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
}