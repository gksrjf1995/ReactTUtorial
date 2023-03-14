import React from 'react'

const Newpost = ({ setpostTitle,
  setpostBody,
  postTitle,
  postBody,
  handlesubmit,
 }) => {

 
  return (
    <main className='NewPost'>
       <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handlesubmit}>
          <label htmlFor='title' >TItle:</label>
          <input id="title"type={"text"} onChange={e=>setpostTitle(e.target.value)} value={postTitle}/>  
          <label htmlFor='body' >body</label>
          <input id="body"type={"text"} onChange={e=>setpostBody(e.target.value)} value={postBody}/>  
          <button type={"submit"} value="제출">제출</button>
        </form>
       
    </main>
  )
}

export default Newpost