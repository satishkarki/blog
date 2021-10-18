import React from "react";
import {Redirect} from "react-router-dom"
import postlist from "../MarkdownJson/posts.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import "../style/SinglePost.css";
import Footer from "./Footer";


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
            fetchedPost.tags=post.tags? post.tags:"No Tags"
            postExists=true
        }
    })
    // console.log(fetchedPost)
    // console.log(postExists)
    if (postExists===false){
        return <Redirect to="/404"/>
    }
    return(
        <section className="SinglePage">
        <div className="SinglePageContainer">
            <div className="SinglePostTitle">
                <h1>{fetchedPost.title}</h1>
                <h2>{fetchedPost.author}</h2>
                <h3>{fetchedPost.date}</h3>
                <h4>{fetchedPost.tags}</h4>
                <hr/>  
            </div>
            <div className="SinglePostContent">
                <ReactMarkdown children={fetchedPost.content} remarkPlugins={[remarkGfm]}  />
            </div>
        </div>
        <Footer/>    
        </section>
      
    )
}
export default SinglePost;
// skipHtml={false}