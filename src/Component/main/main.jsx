import React, { useState,useEffect } from 'react'
import './main.css'
import Task from './task/task'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'



export default function Main() {


  const {data,grouping,ordering}=useContext(AppContext);
  const keys=Object.keys(data)
  console.log(data);
  const priority_arr=["No priority","Low","Medium","High","Urgent"];
  const user={
    "usr-1":"Anoop sharma",
    "usr-2":"Yogesh",
    "usr-3":"Yogesh",
    "usr-4":"Ramesh",
    "usr-5":"Suresh",
  }

  return (
    <div className='main bg-gray-100 dark:bg-black'>
    {keys?.map((i)=>{
      // console.log(i);
      let temp = i;
      if(grouping=='priority'){
        temp=priority_arr[i]
      }
      if(grouping=='userId'){
        temp=user[i]
      }
      return(<Task group={temp} value={data[i]}/>)
    })}
    </div>
  )
}
