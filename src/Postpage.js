import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Postpage = ({ post , handleDelete}) => {
  const {id} = useParams();
  const data = post.find((item)=>{return item.id.toString() === id});
  console.log(data)
  return (
    <main className='PostPage'>
      <article className='post'>
        {post && <>
          <h2>{data?.title || "Not Found"} </h2>
          <p className='postDate'>{data?.datatime || "없음"}</p>
          <p className='postBody'>{data?.body || "없음"}</p>
          {data === undefined ? <p><Link to="/">Back to Home</Link></p> : ""}
          <button onClick={e=>handleDelete(data.id)}>Delete post</button>
        </> 
        }
      
      </article>
    </main>
  )
}

export default Postpage