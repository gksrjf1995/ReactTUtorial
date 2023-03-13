import React from 'react'
import Post from './Post'

const Feed = ({post}) => {
  return (
    <>
        {post.map((item)=>{
            return <Post key={item.id} post={item}/>
        })}
    </>
  )
}

export default Feed