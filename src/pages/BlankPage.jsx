import React,{useState,useEffect, useRef } from 'react'
import {  Link } from 'react-router-dom'
import { CheckIcon,SettingsIcon } from '../assets/svg-components'

import { SuccessIcon, CloudDownloadIcon } from "../assets/svg-components";
import userOne from "../assets/svg/user_one.svg";
import userTwo from "../assets/svg/user_two.svg";
import userThree from "../assets/svg/user_three.svg";
import userFour from "../assets/svg/user_four.svg";
import userFive from "../assets/svg/user_five.svg";


const BlankPage = () => {

  

  // const checkBoxHandler = (e)=>{
  //   let {checked} = e.target
  //   
  
  // }
  
  

  // console.log(refOne.current.checked)

  const tabeleData = [
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour, userFive]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour, userFive]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour, userFive]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour, userFive]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour]
      }
    },
    {
      invoice:'Basic Plan – Dec 2022',
      amount:'USD $10.00',
      date:'Dec 1, 2022',
      status:'Paid',
      plan:{
        profileImages:[userOne, userTwo, userThree, userFour]
      }
    },
  ]
  
  return (
    <div className=' bg-body'>





{/* <>
<input type="radio" name="radio1" id="radio1" checked className='peer/card1 hidden'/>
<label htmlFor="radio1" className='peer-checked/card1:bg-sky-500 cursor-pointer'>
<div className='h-[60px] w-[200px] py-3 px-3 border peer-checked:bg-sky-500'>
  hello
</div>
</label>
<span className='hidden peer-checked/card1:block absolute top-[50%]'><CheckIcon/></span>
<span className='block peer-checked/card1:hidden absolute top-[50%]'><SettingsIcon/></span>
</>

<label htmlFor="card">Hello2</label>
<input type="radio" name="radio1" id="radio2" className='peer/card2'/> */}


<div class="flex flex-col shadow-md sm:rounded-lg mt-10">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="text-[0.75rem] text-[#667085] border-b border-t border-borderLine Capitalize bg-gray-50">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              <input type="checkbox" name="" id="" className='accent-purple' />
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Invoice
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Amount
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Date
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Status
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                User on Plan
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-lef">
                
              </th>
           
            </tr>
          </thead>
          <tbody>
            {tabeleData.map((data, index)=>(
              <tr key={index} class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 border-borderLine hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><input type="checkbox" name="" id="" className='accent-purple' /></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {data.invoice}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {data.amount}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {data.date}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {data.status}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrp">
                <div className="flex items-center relative">
                  {console.log(data.plan.profileImages.length)}
                  {data.plan.profileImages.map((image, index)=>(
                    <div>
                        <img src={image} alt="" className={`${index===0 ? '-translate-x-0' : index===1 ? '-translate-x-2' : index===2 ? '-translate-x-4' : index===3 ? '-translate-x-6' : index===4 ? '-translate-x-8':''}`} />
                        
                    </div>
                  ))}
                  <div className="h-[25px] w-[25px] flex justify-center absolute rounded-full text-[10px] left-[99px] bottom-0 bg-sideBar">
                      {data.plan.profileImages.length>4 ? <span className="translate-y-1 font-normal">+1</span> : ''}
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light py-4 ">
                <CloudDownloadIcon/>
              </td>
            </tr>
            ))}
            
            {/* <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Larry
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Wild
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @twitter
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


  

      <div>
      <h3 className='text-2xl my-5'>Nothing available here yet</h3>
      <Link to='/'>
      <button className='w-full border bg-badge px-5 py-2 rounded font-normal text-2xl text-sideBar animate-bounce'>Back home</button>
      </Link>
      </div>
    </div>
  )
}

export default BlankPage