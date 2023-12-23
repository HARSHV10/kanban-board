import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'
import Dropdown from './Dropdown';
import { AppContext } from '../../context/appContext';
import { Moon ,Sun,SlidersHorizontal,ChevronDown } from 'lucide-react';
export default function Navbar() {
 
  const [toggle,setToggle]=useState(1);
  const [dark,setdark]=useState(1);
  useEffect(()=>{

    if(localStorage.getItem('theme')=="dark"){
      console.log("theme",localStorage.getItem('theme'))
      document.body.classList.add("dark")
      setdark(0);
  }
  },[])

  return (
    <div className=' h-max flex bg-white pb-3 dark:bg-slate-950 dark:text-white dark:bg-gray-900'>
    <button className="display pt-1 pb-1 pb-1.5 text-gray-600 text-base/4 flex border-gray-200 shadow-sm shadow-gray-500/40  pl-3 pr-3 rounded ml-3 mt-3 text-xl dark:text-white  " onClick={()=>{
      setToggle(!toggle)
    }}> <SlidersHorizontal color='gray' size={14} className='mt-0.5 mr-2'/> Display <ChevronDown color='gray' size={14} className='mt-1 ml-2'/></button>
    <div>
    {toggle? "":<Dropdown/>}

    </div>
    <button className='ml-auto pr-5 mt-3' onClick={()=>{
      document.body.classList.toggle("dark")
      if(document.body.classList.contains("dark")){
        // console.log("dark")
        localStorage.setItem("theme","dark");
        setdark(0)
      }
      else{
        // console.log("")
        localStorage.setItem("theme","light");
        setdark(1)
      }
      // document.body.classList.toggle("")
    }}>{!dark?<Moon/>:<Sun/>}</button>
    </div>
  )

}
