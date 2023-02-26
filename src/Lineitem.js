import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


const Lineitem = ({items ,setitems , changeinput , deleteinput , index}) => {
  return (
    <li className="item" key={index}>
           <input type="checkbox"  checked={items.checked} onChange={()=>{changeinput(items.id)}} />
           <label style={(items.checked)? {backgroundColor : "red"} : null }>{items.item}</label>
           <FaTrashAlt onClick={()=>deleteinput(items.id)} role={"button"} tabIndex={0}/>
    </li> 
  )
}

export default Lineitem