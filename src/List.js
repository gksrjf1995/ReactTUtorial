import React from 'react'
import Listitem from './Listitem'

const List = ({items}) => {
  return (
    <div>
        <ul>
            {items.map((item)=>{
                return <li>
                    <Listitem item={item}/>
                </li>
            })}
        </ul>
    </div>
  )
}

export default List