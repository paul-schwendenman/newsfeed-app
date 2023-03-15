import { AuthorType } from "./author";

export interface CommentType {
  id: string;
  body: string;
  author: AuthorType;
  createdAt: string;
  likes: number;
  shareCount?: number;
  replies?: CommentType[];
}
