import React from 'react'
import { useState , useEffect } from 'react'


const TestuseEffect = () => {
    const [number ,setnumber] = useState(1);

    const increase = () => {
        setnumber(number + 1);
        
    }

    useEffect(()=>{
        console.log(`${number} 실행`);
    },[number]);
  return (
    <div>
        <h1>{number}</h1>
        <p onClick={e=>increase(e)}>dd</p>
    </div>
    
  )
}

export default TestuseEffect