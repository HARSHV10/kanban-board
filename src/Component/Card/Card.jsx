import React from 'react'

export default function Card({value}) {
  const{id,priority,status,tag,title,userId}=value;
  console.log(value.id)

  return (
    <div className=' card text-black mt-3 shadow-sm shadow-slate-500 mb-3 bg-white rounded p-5 flex-col w-full dark:bg-black dark:text-white'>
    <div className='flex text-gray-500 text-current '><div>{id}</div></div>
    <div className='flex'> <div className='pr-2'>icon</div><div className='text-base font-bold'>{title}</div> </div>
    <div className='flex'><div className='pr-3'>icon</div> <div className='pr-3'>icon</div></div>
    </div>
  )
}
