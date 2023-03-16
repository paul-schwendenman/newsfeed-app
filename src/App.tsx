import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Feed from "./components/Feed";
import useReducer from "./hooks/useReducer";
import postReducer, { PostAction, PostEvent } from "./reducers/postReducer";
import { AppStateType } from "./types/appState";
import { CommentType } from "./types/comment";
import { PostType } from "./types/post";
import initialState from "./initialState";

function App() {
  const [state, dispatch] = useReducer<AppStateType, PostEvent>(
    postReducer,
    initialState
  );

  function addPost(post: PostType) {
    dispatch({ type: PostAction.AddPost, post });
  }

  function addCommentToPost(comment: CommentType, postId: string) {
    dispatch({ type: PostAction.AddPostComment, comment, postId });
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div id="app" className="h-full max-w-screen-md mx-auto">
      <Feed
        posts={state.posts}
        addPost={addPost}
        addCommentToPost={addCommentToPost}
      ></Feed>
    </div>
  );
}

export default App;
