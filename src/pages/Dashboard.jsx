import React from 'react'
import { BorderLine } from '../ui-elements'

const Dashboard = () => {
  return (
    <div className='w-[769px] mt-7'>
     {/* <BorderLine/> */}
     <ul className='flex items-center text-xsm font-normal bg-sideBar'>
      <li className='border border-borderLine px-4 py-2 rounded-bl rounded-tl'>My details</li>
      <li className='border border-borderLine px-4 py-2'>Profile</li>
      <li className='border border-borderLine px-4 py-2'>Password</li>
      <li className='border border-borderLine px-4 py-2'>Team</li>
      <li className='border border-borderLine px-4 py-2'>Plan</li>
      <li className='border border-borderLine px-4 py-2'>Billing</li>
      <li className='border border-borderLine px-4 py-2'>Notifications</li>
      <li className='border border-borderLine px-4 py-2'>Integrations</li>
      <li className='border border-borderLine px-4 py-2 rounded-br rounded-tr'>API</li>
     </ul>
     <div className='mt-[2rem]'>
      <h3 className='text-boldText font-normal text-[1.125rem]'>Payment method</h3>
      <p className='text-xsm text-lightText'>Update your billing details and address.</p>
    </div>
    <BorderLine/>
    </div>
  )
}

export default Dashboard