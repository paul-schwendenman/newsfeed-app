import React, { useReducer } from "react";
// import logo from './logo.svg';
import "./App.css";
import Feed from "./components/Feed";
import postReducer, { PostReducerType } from "./reducers/postReducer";
import initialState from "./initialState";
import { UserContext } from "./contexts/user";

function App() {
  const [state, dispatch] = useReducer<PostReducerType>(
    postReducer,
    initialState
  );

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
    <UserContext.Provider value={state.user}>
      <div id="app" className="h-full max-w-screen-md mx-auto">
        <Feed posts={state.posts} dispatch={dispatch}></Feed>
      </div>
    </UserContext.Provider>
  );
}

export default App;
