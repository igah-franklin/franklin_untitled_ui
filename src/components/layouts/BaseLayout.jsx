import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../sidebar/SideBar'
import TopNav from '../topnav/TopNav'

const BaseLayout = () => {
  return (
    <>
    <SideBar/>
    <div className='main h-auto bg-body lg:pl-[18.25rem] overflow-x-hidden'>
        <div className='main-content h-screen transition duration-300 ease-in-out pt-[1rem] pl-10 pr-10'>
            <TopNav/>
            <Outlet/>
        </div>
    </div>
    </>
  )
}

export default BaseLayout