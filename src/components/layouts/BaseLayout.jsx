import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../sidebar/SideBar'
import TopNav from '../topnav/TopNav'

const BaseLayout = () => {
  return (
    <>
    <SideBar/>
    <div className='main bg-body pl-[18.25rem] overflow-x-hidden'>
        <div className='main-content h-screen transition duration-300 ease-in-out p-[3rem]'>
            <TopNav/>
            <Outlet/>
        </div>
    </div>
    </>
  )
}

export default BaseLayout