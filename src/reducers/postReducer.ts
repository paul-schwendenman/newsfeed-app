import { AppStateType } from "../types/appState";
import { CommentType } from "../types/comment";
import { PostType } from "../types/post";

export enum PostAction {
  AddPost = "addPost",
  AddPostComment = "addPostComment",
}

export interface PostEvent {
  type: PostAction;
  postId?: string;
  post?: PostType;
  comment?: CommentType;
}

function addPost(state: AppStateType, action: PostEvent) {
  const { post } = action;
  const posts = [post, ...state.posts];

  return { ...state, posts };
}

function addPostComment(state: AppStateType, action: PostEvent) {
  const { postId, comment } = action;

  const posts = state.posts.map((post) => {
    if (post.id === postId && comment) {
      post.comments = [comment, ...(post.comments || [])];
    }

    return post;
  });

  return { ...state, posts };
}

function postReducer(state: AppStateType, action: PostEvent) {
  switch (action.type) {
    case PostAction.AddPost:
      return addPost(state, action);
    case PostAction.AddPostComment:
      return addPostComment(state, action);
    default:
      console.log(`Unknown type: ${action.type}`);

      return state;
  }
}

export default postReducer;
