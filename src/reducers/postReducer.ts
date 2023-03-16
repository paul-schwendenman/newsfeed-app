import { AppStateType } from "../types/appState";
import { CommentType } from "../types/comment";
import { PostType } from "../types/post";

export enum PostAction {
  AddPost = "addPost",
  LikePost = "likePost",
  AddPostComment = "addPostComment",
  LikePostComment = "likePostComment",
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

interface LikePostCommentEvent extends BasePostEvent {
  type: PostAction.LikePostComment;
  postId: string;
  commentId: string;
}

export type PostEvent =
  | AddPostEvent
  | LikePostEvent
  | AddPostCommentEvent
  | LikePostCommentEvent;

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

function likePostComment(state: AppStateType, action: LikePostCommentEvent) {
  const { postId, commentId } = action;

  const posts = state.posts.map((post) => {
    let comments = post.comments;

    if (post.id === postId) {
      comments = post.comments?.map((comment) => {
        let likes = comment.likes;
        let likedByUser = comment.likedByUser;

        if (comment.id === commentId) {
          if (likedByUser) {
            likes--;
          } else {
            likes++;
          }
          likedByUser = !likedByUser;
        }

        return { ...comment, likes, likedByUser };
      });
    }

    return { ...post, comments };
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
    case PostAction.LikePostComment:
      return likePostComment(state, action);
  }
}

export type PostReducerType = (
  state: AppStateType,
  action: PostEvent
) => AppStateType;

export default postReducer;
