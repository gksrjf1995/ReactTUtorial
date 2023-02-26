import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react';

function AddLiseitem({handelsubmit , newitem , setnewitem}) {
  const inputRef = useRef()

  const chageinput = (e) => {
    console.log(e.target.value);
    setnewitem(e.target.value);
  }

  return (
    <form onSubmit={(e)=>handelsubmit(e)}>
        <label htmlFor='addItem'></label>
        <input autoFocus ref={inputRef} type={"text"} id="addItem" required placeholder='ADD Item' value={newitem} onChange={e=>chageinput(e)}/>
        <button type="submit" aria-label='Add Item' onClick={e=>inputRef.current.focus()} >
            <FaPlus size={"1.1rem"}/>
        </button>
    </form>
  )
}

export default AddLiseitem