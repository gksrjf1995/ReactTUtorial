import React from 'react'

const Button = ({buttontext , reqType , setReqTyp}) => {

  

  return (
    <button onClick={()=>setReqTyp(buttontext)}>
        {buttontext}
    </button>
  )
}

export default Button