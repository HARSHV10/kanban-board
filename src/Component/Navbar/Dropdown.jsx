import React from 'react'
import { AppContext } from '../../context/appContext'
import { useContext } from 'react'
export default function Dropdown() {
    const {grouping,setgrouping,ordering,setordering}=useContext(AppContext)
  return (
    <div  className='dropdown bg-white rounded shadow-sm shadow-slate-500 dark:text-white dark:bg-black'>
    <div className=''>Grouping</div>
    <div>
    <select id="dropdown" name="dropdown" value={grouping} className='dark:bg-black' onChange={(e)=>{
      setgrouping(e.target.value)
    }}>
    <option value="status">Status</option>
    <option value="userId">User</option>
    <option value="priority">Priority</option>
    </select>
    </div>
    <div className=''>Ordering</div>
    <div>
    <select id="dropdown" name="dropdown" className='dark:bg-black' value={ordering} onChange={(e)=>{
      setordering(e.target.value)
    }}>
    <option value="priority">Priority</option>
    <option value="title">Title</option>
    </select>
    </div>
    </div>
  )
}
