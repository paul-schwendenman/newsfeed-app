import { AppStateType } from "../types/appState";
import { CommentType } from "../types/comment";
import { PostType } from "../types/post";

export enum PostAction {
  AddPost = "addPost",
  LikePost = "likePost",
  AddPostComment = "addPostComment",
}

export interface BasePostEvent {
  type: PostAction;
}

interface AddPostEvent extends BasePostEvent {
  type: PostAction.AddPost;
  post: PostType;
}

interface LikePostEvent extends BasePostEvent {
  type: PostAction.LikePost;
  postId: string;
}

interface AddPostCommentEvent extends BasePostEvent {
  type: PostAction.AddPostComment;
  postId: string;
  comment: CommentType;
}

export type PostEvent = AddPostEvent | LikePostEvent | AddPostCommentEvent;

function addPost(state: AppStateType, action: AddPostEvent) {
  const { post } = action;
  let posts = state.posts;
  if (post) {
    posts = [post, ...posts];
  }

  return { ...state, posts };
}

function addPostComment(state: AppStateType, action: AddPostCommentEvent) {
  const { postId, comment } = action;

  const posts = state.posts.map((post) => {
    let comments = post.comments || [];
    if (post.id === postId && comment) {
      comments = [comment, ...comments];
    }

    return { ...post, comments };
  });

  return { ...state, posts };
}

function likePost(state: AppStateType, action: LikePostEvent) {
  const { postId } = action;

  const posts = state.posts.map((post) => {
    let likes = post.likes;
    let likedByUser = post.likedByUser;

    if (post.id === postId) {
      if (likedByUser) {
        likes--;
      } else {
        likes++;
      }
      likedByUser = !likedByUser;
    }

    return { ...post, likes, likedByUser };
  });

  return { ...state, posts };
}

function postReducer(state: AppStateType, action: PostEvent): AppStateType {
  switch (action.type) {
    case PostAction.AddPost:
      return addPost(state, action);
    case PostAction.AddPostComment:
      return addPostComment(state, action);
    case PostAction.LikePost:
      return likePost(state, action);
  }
}

export type PostReducerType = (
  state: AppStateType,
  action: PostEvent
) => AppStateType;

export default postReducer;
