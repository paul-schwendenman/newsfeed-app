import { PostType } from "./post";
import { UserType } from "./user";

export interface AppStateType {
  posts: PostType[];
  user: UserType;
}
