import React from 'react'
import { AlertCircle, SignalHigh,SignalLow,SignalMedium,SignalZero,Circle} from 'lucide-react';
export default function Card({value}) {
  const{id,priority,status,tag,title,userId}=value;
  console.log(priority)
  const priority_icon=[
    <SignalZero/>,
    <SignalLow />,
    <SignalMedium />,
    <SignalHigh />,
    <AlertCircle />
  ]
  return (
    <div className=' card text-black mt-3 shadow-sm shadow-slate-500 mb-3 bg-white rounded p-2 flex-col w-full dark:bg-gray-950 dark:text-white'>
    <div className='flex text-gray-500 text-current  '><div>{id}</div></div>
    <div className='flex'> <div className='pr-2'>{priority_icon[priority]}</div><div className='text-base font-bold'>{title}</div> </div>
    <div className='flex'><div className='pr-3'>icon</div> <div className=' mt-1 text-sm text-zinc-400 mr-1.5 ml-1.5 pl-2 pr-0.5 rounded border border-slate-500 flex'><Circle size={13} fill='gray' className='mt-1 mr-1'/>Feature Request</div></div>
    </div>
  )
}
