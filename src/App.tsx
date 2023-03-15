import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Feed from "./components/Feed";
import { PostType } from "./types/post";

function App() {
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: "6c9df76e-eed4-4b51-a9d3-77d3d17e7a9b",
      body: "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.",
      author: {
        name: "Nickmercs",
      },
      createdAt: "2023-03-15 11:50",
      likes: 0,
      shareCount: 12,
      viewCount: 100,
    },
  ]);

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
