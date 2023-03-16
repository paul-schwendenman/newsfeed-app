import { CommentType } from "../types/comment";
import { PostType } from "../types/post";

export enum PostAction {
  AddPost = "addPost",
  AddPostComment = "addPostComment",
}

interface Event {
  type: PostAction;
  postId?: string;
  post?: PostType;
  comment?: CommentType;
}

type State = PostType[];

function addPost(state: State, action: Event) {
  const { post } = action;

  return [post, ...state];
}

function addPostComment(state: State, action: Event) {
  const { postId, comment } = action;

  return state.map((post) => {
    if (post.id == postId && comment) {
      post.comments = [comment, ...(post.comments || [])];
    }

    return post;
  });
}

function postReducer(state: State, action: Event) {
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
