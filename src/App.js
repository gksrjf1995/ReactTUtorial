import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import TestuseEffect from "./TestuseEffect"
import { useState, useEffect } from 'react';
import axios from "axios"

function App() {
  const API_URL = "http://localhost:3500/items"
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('');
  const [fetcherror , setfetcherror] = useState();
  const [loading , setloading] = useState(true);

  useEffect(() => {
    const fetchdata = async() => {
      
      try{
        const result = await axios.get(API_URL).then((res)=>res);
        console.log(result)
        if(result.status !== 200 ){
          setItems([]);
        }
        setItems(result.data)
        
        console.log(newItem)
      }catch(err){
        err.message = "서버 주소 잘못되었습니다"
        setfetcherror(err.message);
      }finally {
        setloading(false)
      }
    } 
    fetchdata();
   
  }, []);
 

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {loading && <p style={{color : "red"}}>데이터 받아 오는 중</p>}
        {fetcherror && <p style={{color : "red"}}>{fetcherror}</p>}
        {!fetcherror && !loading && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
       
      </main>
    
      <Footer length={items.length} />
      <TestuseEffect/>
    </div>
  );
}

export default App;
