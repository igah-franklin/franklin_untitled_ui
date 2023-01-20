import React from 'react'
import { BorderLine } from '../ui-elements'
import { MailIcon } from '../assets/svg-components'

const Dashboard = () => {
  return (
    <div className='w-[49.75rem] mt-7'>
    
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
    <div className=' flex flex-col md:flex-row'>
      <div className='w-1/3'>
        <h3 className='text-[#344054] font-normal text-xsm'>Contact email</h3>
        <p className='text-xsm text-[#667085]'>Where should invoices be sent?</p>
      </div>
      <div className='w-2/3 md:ml-[5rem]'>
        <form>
          <div className='flex flex-start gap-5'>
            <input type="radio" name="" id="" className='accent-sideBar outline-0  border border-1 border-body'/>
            <div className='translate-y-2'>
              <h3 className='text-[#344054] font-normal text-xsm leading-[1rem]'>Send to my account email</h3>
              <p className='text-xsm text-[#667085]'>Update your billing details and address.</p>
            </div>
          </div>
          <div className='flex flex-start gap-5 mt-5'>
            <input type="radio" name="" checked id="" className='accent-purple outline-0 rounded-[8px] border border-[#DDDADB]'/>
            
            <div className='flex flex-col translate-y-4'>
              <label htmlFor="emailHolder" className='text-[#344054] font-normal text-xsm'>Send to an alternative email</label>
              <input type="text" name="emailHolder" id="emailHolder" value='billing@untitledui.com' className='w-[30rem] outline-0  mt-2 bg-sideBar border border-1 border-dividerLine pl-8 rounded-[0.375rem] py-1'  />
              <span className='absolute top-9 left-2'><MailIcon /></span>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Dashboard