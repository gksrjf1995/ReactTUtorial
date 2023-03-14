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
import { compareAsc, format } from 'date-fns'
import api from "./api/posts";

function App() {
  
  const history = useNavigate();
  const [search , setSearch] = useState('');
  const [searchResults , setSearchResults] = useState([]);
  const [postTitle , setpostTitle] = useState();
  const [postBody , setpostBody] = useState();
 
  
  

   
  const [post , setPost] = useState([]);

  const handleDelete = (id) => {
    const postList = post.filter((item)=>{return item.id !== id});
    setPost(postList);
    history("/");
  }
  
  const handlesubmit = (e) => {
    e.preventDefault();
     
    const id = post.length ? post[post.length - 1].id + 1 : 1  
    const datetime = format(new Date(), "MMMM dd , yyyy pp");
    // const newpost = {id , datetime , title : postTitle , body : postBody}
    const allPost = [...post , {id , datetime , title : postTitle , body : postBody}]
    console.log("das")
    setPost(allPost);
    setpostTitle("");
    setpostBody("");
    history("/");
  }
  
 


  useEffect(()=>{
    const result = (post.filter((item)=>{
      return item.body.toLowerCase().includes((search.toLowerCase())) || 
      item.title.toLowerCase().includes((search.toLowerCase())) 
    }));
    setSearchResults(result);
    console.log("dsa")
  },[search,post])
   
  return (
    <div className="App">
      <Header title={"React Js Blog"}/>
      <Nav search={search} setSearch={setSearch}/>
     <Routes>
      <Route path="/" element={<Home post={searchResults}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/newpost" element={<Newpost handlesubmit={handlesubmit} setpostTitle={setpostTitle} setpostBody={setpostBody} postTitle={postTitle} postBody={postBody}/>}/>
      <Route path="/post/:id" element={<Postpage post={post} handleDelete={handleDelete}/>}/>
      <Route path="*" element={<Missing/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
