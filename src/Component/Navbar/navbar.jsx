import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'
import Dropdown from './Dropdown';
import { AppContext } from '../../context/appContext';
import { Moon ,Sun} from 'lucide-react';
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
    <div className=' h-max flex pl-5 pr-5 dark:bg-black dark:text-white'>
    <button className="display  pl-3 pr-3 rounded ml-3 mt-3 text-xl  " onClick={()=>{
      setToggle(!toggle)
    }}>Display</button>
    <div>
    {toggle? "":<Dropdown/>}

    </div>
    <button className='ml-auto ' onClick={()=>{
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
