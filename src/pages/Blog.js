import React from "react";
import BlogList from "../components/BlogList";
import "../style/Blog.css"
function Blog() {
  return (
    <section className="BlogPost">
      <div className="BlogTopTitle">
        <h2>All Post</h2>
      </div>
      <BlogList/>
    </section>
  );
}

export default Blog;