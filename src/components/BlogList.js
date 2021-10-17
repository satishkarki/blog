import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
// import reactDom from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import postlist from "../MarkdownJson/posts.json";
import "../style/Blog.css"

const BlogList=()=>{
    // console.log(postlist);
    return(
        <div className="ListofAllPost">
            {postlist.length && postlist.map((post,i)=>{
                return(
                    <div className="post-card" key={post.id}>
                        <h2>{post.title}</h2>
                        <h3>{post.author}</h3>
                        <h3>{post.date}</h3>
                        <hr/>
                        <ReactMarkdown children={post.content}remarkPlugins={[remarkGfm]} skipHtml={false} />
                       
                    </div>
                )
            })}
        </div>
    )
};
export default BlogList;