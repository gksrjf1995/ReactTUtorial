import Header from "./Header";
import Nav from "./Nav"
import Footer from "./Footer";
import Newpost from "./Newpost";
import About from "./About";
import Missing from "./Missing";
import Postpage from "./Postpage";
import Home from "./Home"
import { Route, Routes } from "react-router-dom"
import { useState } from "react";


function App() {
  
  const [search , setSearch] = useState('');
  const [searchResults , setSearchResults] = useState([]);
  const [post , setPost] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])

  return (
    <div className="App">
      <Header title={"React Js Blog"}/>
      <Nav search={search} setSearch={setSearch}/>
     <Routes>
      <Route path="/" element={<Home post={post}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/newpost" element={<Newpost/>}/>
      <Route path="/post/:id" element={<Postpage post={post}/>}/>
      <Route path="*" element={<Missing/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
