import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";

export default function App() {
  return (
    <div>
      <Header />
      <div className="max-w-3xl flex justify-center m-auto px-4">
        <Post />
      </div>
    </div>
  );
}
