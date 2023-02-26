import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddLiseitem from "./AddLiseitem.js"
import SearchItem from './SearchItem';

function App() {
  const [items , setitems] = useState(JSON.parse(localStorage.getItem("items")));
  const [newitem , setnewitem] = useState('')
  const [serachitem , setseratchitem] = useState("");

  

  const changeinput = (id) => {
    console.log(id)
    const result = items.map((items)=>{
      return  items.id === id ? {...items , checked : !items.checked} :  items
    });
    setitems(result);
    localStorage.setItem('items',JSON.stringify(items));
  }
 
  const handelsubmit = (e) => {
    e.preventDefault();
    console.log("제출");
    if(!newitem) return 
    setitems([...items , {id:items.length+1 ,checked:false , item:newitem }]);
    localStorage.setItem('items',JSON.stringify(items));
    setnewitem('')
  }

  const deleteinput = (id) => {
    const result = items.filter((items)=>{
        return items.id !== id 
    });
    setitems(result);
    localStorage.setItem('items',JSON.stringify(items));
  }

  return (
    <div className="App">
      <Header />
      <SearchItem serachitem={serachitem} setseratchitem={setseratchitem} setitems={setitems} items={items}/>
      <AddLiseitem handelsubmit={handelsubmit} newitem={newitem} setnewitem={setnewitem}/>
      <Content items={items.filter((item)=>{return item.item.toLowerCase().includes(serachitem.toLocaleLowerCase())})} setitems={setitems} changeinput={changeinput} deleteinput={deleteinput}/>
      <Footer legnth={items.length}/>
    </div>
  );
}

export default App;
