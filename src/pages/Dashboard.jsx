import React from 'react'
import { BorderLine } from '../ui-elements'

const Dashboard = () => {
  return (
    <div className='w-[769px] mt-7'>
     {/* <BorderLine/> */}
     <ul className='border border-borderLine flex items-center rounded-[0.5rem]'>
      <li className='border border-borderLine px-3 '>My details</li>
      <li className='border border-borderLine px-3 '>Profile</li>
      <li className='border border-borderLine px-3 '>Password</li>
      <li>one</li>
     </ul>
    </div>
  )
}

export default Dashboard