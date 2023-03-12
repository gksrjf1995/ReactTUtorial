import React from 'react'

const Listitem = ({item}) => {
  return (
    <div>
        <p>{item.id}</p> 
        <p>{item.name} {item.userId} </p>
        <p>{item.username} {item.title}</p>
        <p>{item.email} {item.body}</p>
        <p>{JSON.stringify(item.address)}</p>
        <p>{item.phone}</p>
        <p>{item.website}</p>
        <p>{JSON.stringify(item.company)}</p>
    </div>
  )
}

export default Listitem