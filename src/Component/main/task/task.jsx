import React from 'react';
import './task.css'
import { Plus } from 'lucide-react';
import Card from '../../Card/Card';
import { MoreHorizontal } from 'lucide-react';


export default function Task({group,value}) {
  // console.log(props)
  return (
    <div className='task-list  p-3 pt-10 dark:bg-black dark:text-white'>
    <div className='task-title flex-row pb-5  '>
    <div className="flex"><Plus size={14} className='m-1.5 text-xl'/><div className='text-xl font-normal'>{group}</div></div>
    <div className='ml-auto flex'><Plus size={14} className='m-1.5 mr-0'/><MoreHorizontal size={14} className='m-1.5'/></div>
    </div>
    {value?.map((i)=>{
      return(<Card value={i}/>)
    })}
    

    </div>
    )
}
