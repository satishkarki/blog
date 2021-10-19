import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { Link } from "react-router-dom";

import postlist from "../MarkdownJson/posts.json";
import "../style/Blog.css"
import * as Fa from "react-icons/fa";

const BlogList=()=>{
    // console.log(postlist);
    const excerptList=postlist.map(post=>{
        return post.content.split(" ").slice(0,40).join(" ")
    })
    // console.log(excerptList)
    return(
        <div className="ListofAllPost">
            {postlist.length && postlist.map((post,i)=>{
                return(
                    <div className="post-card" key={post.id}>
                        <h2 className="post-title"><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                        <h3 className="post-author">{post.author}</h3>
                        <h3 className="post-date">{post.date}</h3>

                        <div className="post-tag">
                            <div className="post-taglogo">
                                <Fa.FaTags/>
                            </div>
                            <div className="post-taghead">
                                <h3 className="post-tags">{post.tags}</h3>
                            </div>
                        </div>




                        {/* <h3 className="post-tags">{post.tags}</h3> */}
                        <hr/>
                        <ReactMarkdown  className="ArticleSnip" children={excerptList[i]}remarkPlugins={[remarkGfm]} skipHtml={false} />
                        <h3 className="Readmore"><Link to={`/post/${post.id}`}>Read More...</Link></h3>
                       
                    </div>
                )
            })}
        </div>
    )
};
export default BlogList;