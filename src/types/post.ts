import dayjs from "dayjs";
import { AuthorType } from "./author";
import { CommentType } from "./comment";
import { WithOptional } from "./withOptional";

export interface PostType {
  id: string;
  author: AuthorType;
  body: string;
  createdAt: string;
  likes: number;
  comments?: CommentType[];
  shareCount?: number;
  viewCount?: number;
  likedByUser: boolean;
}

type OptionalPost = WithOptional<
  PostType,
  | "id"
  | "createdAt"
  | "likes"
  | "shareCount"
  | "viewCount"
  | "comments"
  | "likedByUser"
>;

export function buildPost(partial: OptionalPost): PostType {
  return {
    id: crypto.randomUUID(),
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    likes: 0,
    comments: [],
    shareCount: 0,
    viewCount: 0,
    likedByUser: false,
    ...partial,
  };
}
