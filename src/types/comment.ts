import dayjs from "dayjs";
import { AuthorType } from "./author";
import { WithOptional } from "./withOptional";

export interface CommentType {
  id: string;
  body: string;
  author: AuthorType;
  createdAt: string;
  likes: number;
  shareCount?: number;
  replies?: CommentType[];
}

type OptionalComment = WithOptional<
  CommentType,
  "id" | "createdAt" | "likes" | "shareCount"
>;

export function buildComment(partial: OptionalComment): CommentType {
  return {
    id: crypto.randomUUID(),
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    likes: 0,
    shareCount: 0,
    ...partial,
  };
}
