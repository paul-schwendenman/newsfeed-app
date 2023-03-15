import { AuthorType } from "./author";
import { CommentType } from "./comment";

export interface PostType {
  id: string;
  author: AuthorType;
  body: string;
  // location?: string;
  createdAt: string;
  likes: number;
  comments?: CommentType[];
  shareCount?: number;
  viewCount?: number;
}
