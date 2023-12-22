import React from 'react';
import './task.css'
import { Plus } from 'lucide-react';
import Card from '../../Card/Card';


export default function Task() {
  return (
    <div className='task-list p-10 dark:bg-black'>
    <div className='task-title flex-row '>
    <div className="flex"><Plus size={14} className='m-1.5'/><div>Title</div></div>
    <div className='ml-auto'>Title</div>
    </div>
    <Card/>
    </div>
  )
}
