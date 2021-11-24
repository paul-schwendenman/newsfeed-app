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
}