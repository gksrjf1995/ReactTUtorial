import React from 'react'
import Button from './Button'

const Form = ({reqType , setReqType}) => {
  return (
    <form onSubmit={e=>e.preventDefault()}>
        <Button buttontext={"users"} reqType={reqType} setReqTyp={setReqType}/>
        <Button buttontext={"posts"}  reqType={reqType} setReqTyp={setReqType}/>
        <Button buttontext={"comments"}  reqType={reqType} setReqTyp={setReqType}/>
    </form>
  )
}

export default Form