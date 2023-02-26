import React from 'react'
import Lineitem from "./Lineitem.js"



const ItemList = ({items , setitems , deleteinput , changeinput}) => {
  return (
    <ul>{items.map((items,index)=>{
        return <Lineitem key={index} index={index} items={items} setitems={setitems} changeinput={changeinput} deleteinput={deleteinput}/>
        })}
    </ul>
  )
}

export default ItemList