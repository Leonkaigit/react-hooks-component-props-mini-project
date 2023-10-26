import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  const {name,about,image,posts} = blogData;
  
  return (
    <div className="App">
     <Header name="Overreact" />
     <About image={image} about={about}/>
     <ArticleList posts={posts} />
    </div>
  );
}

export default App;
