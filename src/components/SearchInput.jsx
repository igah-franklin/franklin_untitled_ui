import React from 'react'
import search from '../assets/svg/search.svg'

const searchInput = () => {
  return (
    <form action="">
        <div className='relative mt-[1.5rem]'>
            <label htmlFor="search"></label>
        <input type="text" name="search" id="search" className='border border-1 outline-0 border-dividerLine text-gray pl-7 rounded-[0.375rem] py-1' placeholder='search' />
        <img src={search} alt="search" className='absolute top-2 left-1' />
        </div>
    </form>
  )
}

export default searchInput