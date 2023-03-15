import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Feed from "./components/Feed";
import { PostType } from "./types/post";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);

  function addPost(post: PostType) {
    setPosts([post, ...posts]);
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
      <Feed posts={posts} addPost={addPost}></Feed>
    </div>
  );
}

export default App;
