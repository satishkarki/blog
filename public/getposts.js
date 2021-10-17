const path =require("path")
const fs=require("fs")
const { type } = require("os")

const dirPath=path.join(__dirname, "../src/markdown")
let postlist=[]
// console.log(dirPath)
const getPosts=async()=>{
    await fs.readdir(dirPath,(err, files)=>{
        if(err){
            return console.log("Failed to list contents of directory: " + err)
        }
        // console.log(files)
        files.forEach((file,i)=>{
            let obj={}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8",(err,contents)=>{
                // console.log(contents)
                // console.log(typeof(contents))
                const getMetadataIndices=(acc, elem,i)=>{
                    if(/^---/.test(elem)){
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata=({lines, metadataIndices})=>{
                    if(metadataIndices.length>0){
                        let metadata=lines.slice(metadataIndices[0]+1, metadataIndices[1])
                        metadata.forEach(line=>{
                            obj[line.split(": ")[0]]=line.split(": ")[1]
                        })
                        // console.log(obj)
                        return obj
                    }
                }
                const parseContent=({lines, metadataIndices})=>{
                    if (metadataIndices.length>0){
                        lines=lines.slice(metadataIndices[1]+1,lines.length)
                    }
                    // console.log(lines.join("\n"))
                    return lines.join("\n")
                }

                const lines=contents.split("\n")
                // console.log(lines)
                const metadataIndices=lines.reduce(getMetadataIndices,[])
                // console.log(metadataIndices)
                const metadata=parseMetadata({lines, metadataIndices})
                const content=parseContent({lines, metadataIndices})
                post={
                    id:i+1,
                    title:metadata.title ? metadata.title : "No Title Given",
                    author:metadata.author ? metadata.author : "No Author Given",
                    date:metadata.date ? metadata.date : "No Date Given",
                    content:content ? content : "No Content Given"
                }
                postlist.push(post)
            })

        })
    })
    setTimeout(()=>{
        console.log(postlist)
    }, 500)
}
getPosts()