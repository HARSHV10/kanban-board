import React from 'react';
import './task.css'
import { Plus, SignalZero } from 'lucide-react';
import Card from '../../Card/Card';
import { MoreHorizontal } from 'lucide-react';
import { AppContext } from '../../../context/appContext';
import { useContext } from 'react';
import { SignalHigh,SignalLow,SignalMedium,AlertCircle} from 'lucide-react';


export default function Task({group,value}) {
  const {grouping,setgrouping,ordering,setordering}=useContext(AppContext)
  const priority_icon={
    "Low":<SignalLow/>,
    "Medium":<SignalMedium/>,
    "High":<SignalHigh/>,
    "No priority":<SignalZero/>,
    "Urgent":<AlertCircle/>
  }
  
  const color_logo=["yellow","red","green","blue"]
  const coloridx=parseInt(Math.random()*10)%4;
  console.log(color_logo[coloridx]);
  return (
    <div className='task-list  p-3 pt-6 dark:bg-black dark:text-white'>
    <div className='task-title flex-row pb-5  '>
    <div className="flex">{grouping=="priority"?priority_icon[group]:""}{grouping=="userId"?<span className={`logo text-xs pt-1 pl-2 pr-2 dark:text-white  mr-2 dark:bg-${color_logo[coloridx]}-600`}>{group?group[0]:""}</span>:""}<div className='text-l font-medium font-normal'>{group}</div></div>
    <div className='ml-auto flex'><Plus size={14} className='m-1.5 mr-0'/><MoreHorizontal size={14} className='m-1.5'/></div>
    </div>
    {value?.map((i)=>{
      return(<Card value={i}/>)
    })}
    

    </div>
    )
}
