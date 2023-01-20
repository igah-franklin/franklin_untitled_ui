import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/svg/logo.svg'
import logout from '../../assets/svg/log-out.svg'

import {HomeIcon, SettingsIcon, UsersIcon,BarChartIcon} from '../../assets/svg-components'

const SideBar = () => {


    const navElements = [
        {
            name:'home',
            link:'/',
            image:<HomeIcon/>
        },
        {
            name:'orders',
            link:'orders',
            image:<UsersIcon/>
        },
        {
            name:'products',
            link:'products',
            image:<BarChartIcon/>
        },
        {
            name:'settings',
            link:'settings',
            image:<SettingsIcon/>
        },
        {
            name:'logout',
            link:'logout',
            image:<image src={logout}/>
        },
    ]
  return (
    <div className='h-screen bg-red-800 flex flex-col w-full md:w-3/12 flex-start fixed top-0 z-[100]'>
        <div>
            <img src={logo} alt="" />
            <div className='sidebar-close cursor-pointer block md:hidden'><span>X</span></div>
        </div>
        <div className='flex flex-col flex-start grow-1'>
            {navElements.map(element=>(
                <div className='flex flex-start mb-[2rem] pl-[2rem] gap-4 last:mt-auto'>
                    <span>{element.image}</span>
                    <NavLink to={element.link} className={({isActive})=> isActive ? 'text-red-500': 'text-gray-700'}>
                    {element.name}
                </NavLink>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideBar