import { useState , useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import List from "./List";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com"
  const [reqType , setReqType] = useState('users');
  const [items , setItems] = useState([]);
  

  useEffect(()=>{
    const getdata = async() => {
      const result = await axios.get(`${API_URL}/${reqType}`);
      setItems(result.data);
      console.log(items)
    }
    getdata();
  },[reqType]);

  return <div className='App'>
    <Form reqType={reqType} setReqType={setReqType}/>
    <List items={items}/>
   
  </div>

}

export default App;
