import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Blank = () => {
  const location = useLocation()
  return (
    <div className='h-full grid grid-cols-1 place-items-center'>
     
      <div>
      <h3 className='text-2xl my-5'>Nothing available here yet</h3>
      <Link to='/'>
      <button className='w-full border bg-badge px-5 py-2 rounded font-normal text-2xl text-sideBar animate-bounce'>Back home</button>
      </Link>
      </div>
    </div>
  )
}

export default Blank