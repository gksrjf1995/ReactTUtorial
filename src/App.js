import Header from "./Header";
import Nav from "./Nav"
import Footer from "./Footer";
import Newpost from "./Newpost";
import About from "./About";
import Missing from "./Missing";
import Postpage from "./Postpage";
import Home from "./Home"
import { Route, Routes , useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { format } from 'date-fns'
import api from "./api/posts";
import EditPost from "./EditPost";
import useWindowSize from "./api/hooks/useWindowSize";
import useAxiosFetch from "./api/hooks/useAxiosFetch";



function App() {
  
  const history = useNavigate();
  const [search , setSearch] = useState('');
  const [searchResults , setSearchResults] = useState([]);
  const [postTitle , setpostTitle] = useState();
  const [postBody , setpostBody] = useState();
  const [post , setPost] = useState([]);
  const [editBody , seteditBody] = useState('')
  const [editTitle , seteditTitle] = useState('')
  const { width } = useWindowSize();
  const {data , fetchError , isLoading} = useAxiosFetch(`http://localhost:3500/posts`);
   
 
  useEffect(()=>{
    console.log(data);
    setPost(data);
  },[data]);


  const handleDelete = async(id) => {
    const postList = post.filter((item)=>{return item.id !== id});
    try{
      await api.delete(`/posts/${id}`);
      setPost(postList);
      history("/");
    }catch(err){
      console.log(err)
    }
    
  }
  
  const handleEdit = async(id) => {
    const datetime = format(new Date(), "MMMM dd , yyyy pp");
    const updatePost = {id , datetime , title : editTitle , body : editBody}
    try{
      const res = await api.put(`/posts/${id}`, updatePost);
      console.log(res.data);
      setPost(post.map((item)=>item.id === id ? {...res.data} : item))
      
      seteditBody("")
      seteditTitle("")
      history("/");
    }catch(err){
      console.log(err);
    }
  }



  const handlesubmit = async(e) => {
    e.preventDefault();
     
    const id = post.length ? post[post.length - 1].id + 1 : 1  
    const datetime = format(new Date(), "MMMM dd , yyyy pp");
    const newpost = {id , datetime , title : postTitle , body : postBody}
    const allPost = [...post , newpost]
    try{
      await api.post(('/posts'),newpost);
      setPost(allPost);
      setpostTitle("");
      setpostBody("");
      history("/");
    }catch(err){
      console.log(err)
    }
    
    
    
  }
  
 


  useEffect(()=>{
    console.log(post);
    const result = post?.filter((item)=>{
      return item?.body?.toLowerCase()?.includes((search?.toLowerCase())) || 
      item?.title?.toLowerCase()?.includes((search?.toLowerCase())) 
    });
    setSearchResults(result.reverse());
    
  },[search,post])
   
  return (
    <div className="App">
      <Header title={"React Js Blog"} width={width}/>
      <Nav search={search} setSearch={setSearch}/>
     <Routes>
      <Route path="/" element={<Home post={searchResults}  fetchError={fetchError} isLoading={isLoading} />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/newpost" element={<Newpost handlesubmit={handlesubmit} setpostTitle={setpostTitle} setpostBody={setpostBody} postTitle={postTitle} postBody={postBody}/>}/>
      <Route path="/post/:id" element={<Postpage post={post} handleDelete={handleDelete}/>}/>
      <Route path="/edit/:id" element={<EditPost editBody={editBody} seteditBody={seteditBody} editTitle={editTitle} seteditTitle={seteditTitle} handleEdit={handleEdit} post={post}/>}/>
      <Route path="*" element={<Missing/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
