import React from 'react'

const SearchItem = ({serachitem , setseratchitem }) => {
  const chageSerachitem = (e) => {
    setseratchitem(e.target.value);
    console.log(serachitem)
  };
  
  
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search' ></label>
        <input type="text" id="search" role={"searchbox"} placeholder="Search Item" onChange={(e)=>chageSerachitem(e)} value={serachitem}/>
    </form>
  )
}

export default SearchItem 