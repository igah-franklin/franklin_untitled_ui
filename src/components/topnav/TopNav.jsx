import React from 'react'
import logo from '../../assets/svg/logo.svg'
import menu from '../../assets/svg/menu.svg'

const TopNav = () => {
  const openSidebar = ()=>{
    document.body.classList.add('open-sidebar')
  }
  return (
    <>
      <div className='w-full bg-sideBar lg:pt-5 pb-5 flex items-center justify-between px-5 lg:hidden'>
        <img src={logo} alt="logo" />
        
        <span onClick={openSidebar} className='cursor-pointer'><img src={menu} alt="menu" /></span>
      </div>
      <div className='px-5 md:px-10'>
      <h3 className='text-[#101828] font-normal text-[1.875rem] '>Settings</h3>
      <p className='text-sm'>Manage your team and preferences here.</p>
      </div>
    </>
  )
}

export default TopNav