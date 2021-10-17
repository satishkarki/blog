import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { Link } from "react-router-dom";

import postlist from "../MarkdownJson/posts.json";
import "../style/Blog.css"

const BlogList=()=>{
    // console.log(postlist);
    const excerptList=postlist.map(post=>{
        return post.content.split(" ").slice(0,30).join(" ")
    })
    console.log(excerptList)
    return(
        <div className="ListofAllPost">
            {postlist.length && postlist.map((post,i)=>{
                return(
                    <div className="post-card" key={post.id}>
                        <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                        <h3>{post.author}</h3>
                        <h3>{post.date}</h3>
                        <hr/>
                        <ReactMarkdown children={excerptList[i]}remarkPlugins={[remarkGfm]} skipHtml={false} />
                        <small><Link to={`/post/${post.id}`}>Read More...</Link></small>
                       
                    </div>
                )
            })}
        </div>
    )
};
export default BlogList;