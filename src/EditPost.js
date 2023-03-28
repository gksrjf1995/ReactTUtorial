import React, { useEffect } from 'react'
import { useParams , Link } from 'react-router-dom'


const EditPost = ({seteditBody,
    editBody,
    editTitle,
    seteditTitle,
    handleEdit,
    post}) => {

  const {id} = useParams();
  const posts = post?.find((item)=>{return item?.id?.toString() === id});
  console.log(posts)
        
  useEffect(()=>{
    if(posts){
        seteditTitle(posts.title);
        seteditBody(posts.body);
       
    }
  },[posts , seteditBody , seteditTitle]);
  return (
    <main className='NewPost'>
        {editBody && <>
            <h2>New Post</h2>
                <form className='newPostForm' onSubmit={e=>e.preventDefault()}>
                <label htmlFor='title' >TItle:</label>
                <input id="title"type={"text"} onChange={e=>seteditTitle(e.target.value)} value={editTitle}/> 
                <label htmlFor='body' >Body:</label> 
                <input id="body"type={"text"} onChange={e=>seteditBody(e.target.value)} value={editBody}/>  
                <button type={"button"} value="제출" onClick={e=>handleEdit(posts.id)}>제출</button>
            </form>
        </>}
        {!editBody && <p>페이지 없음</p>}
    </main>
  )
}

export default EditPost