import React from "react";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import "../style/Blog.css"
function Blog() {
  return (
    <section className="BlogPost">
      <div className="BlogTopTitle">
        <h2>All Post</h2>
      </div>
      <BlogList/>
      <Footer/>
    </section>
  );
}

export default Blog;