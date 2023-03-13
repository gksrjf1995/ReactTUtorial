import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search , setSearch}) => {
  return (
    <nav className='Nav'>
      <form onSubmit={e=>e.preventDefault()} className="searchForm">
        <label htmlFor='search'>Search Posts</label>
        <input id="search" type={"text"} placeholder="Search Posts" value={search} onChange={e=>setSearch(e.target.value)}/>
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Home</Link></li>
        <li><Link to="/post">Home</Link></li>
      </ul>
    </nav>
  )
}

export default Nav