import React from 'react'

import Feed from './Feed'

const Home = ({post ,fetchError , isLoading}) => {
  console.log(post)
  return (
    <main>
      {isLoading && <p className='statusMsg'>Loading Posts....</p>}
      {fetchError && <p className='statusMsg' style={{color:"red"}}>{fetchError}</p>} 
      {!isLoading && !fetchError && (post.length ? <Feed post={post}/> : <p className='statusMsg'>No post Display</p>)   }
    </main>
  )
}

export default Home