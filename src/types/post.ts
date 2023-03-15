import { AuthorType } from "./author";

export interface PostType {
  id: string;
  author: AuthorType;
  body: string;
  // location?: string;
  createdAt: string;
  // likes?: number;
  // comments?: Comment[];
}
