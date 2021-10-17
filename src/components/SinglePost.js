import React from "react";
import {Redirect} from "react-router-dom"
import postlist from "../MarkdownJson/posts.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import "../style/SinglePost.css";


const SinglePost=(props)=>{
    // console.log(postlist)
    // console.log(props.match.params.id)
    const validId=parseInt(props.match.params.id)
    // console.log(validId)
    if(!validId){
        return <Redirect to="/404"/>
    }
    const fetchedPost={}
    let postExists=false
    postlist.forEach((post,i)=>{
        if(validId===post.id){
            fetchedPost.title=post.title? post.title:"No Title"
            fetchedPost.author=post.author? post.author:"No Author"
            fetchedPost.date=post.date? post.date:"No Date"
            fetchedPost.content=post.content? post.content:"No Content"
            postExists=true
        }
    })
    // console.log(fetchedPost)
    // console.log(postExists)
    if (postExists===false){
        return <Redirect to="/404"/>
    }
    return(
        <div className="singlePost">
            <h2>{fetchedPost.title}</h2>
            <h3>{fetchedPost.author}</h3>
            <h3>{fetchedPost.date}</h3>
            <hr/>
            <ReactMarkdown children={fetchedPost.content} remarkPlugins={[remarkGfm]} skipHtml={false} />
        </div>
    )
}
export default SinglePost;