import React, { useState,useEffect } from 'react'
import './main.css'
import Task from './task/task'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'



export default function Main() {
  const {data}=useContext(AppContext);
  const keys=Object.keys(data)
  console.log(data);

  return (
    <div className='main'>
    {keys?.map((i)=>{
      // console.log(i);
      return(<Task group={i} value={data[i]}/>)
    })}
    </div>
  )
}
