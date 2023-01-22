import React,{useState,useEffect, useRef } from 'react'
import {  Link } from 'react-router-dom'
import { CheckIcon,SettingsIcon } from '../assets/svg-components'


const BlankPage = () => {

  

  // const checkBoxHandler = (e)=>{
  //   let {checked} = e.target
  //   
  
  // }
  
  

  // console.log(refOne.current.checked)
  
  return (
    <div className='h-full grid grid-cols-1 place-items-center bg-body'>





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