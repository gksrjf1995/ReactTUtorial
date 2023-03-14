import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div className='Missing'>
      <h2>Page not Found</h2>
      <p><Link to="/">Plz go back Home</Link></p>
    </div>
  )
}

export default Missing