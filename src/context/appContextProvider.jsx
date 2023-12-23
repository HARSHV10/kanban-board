import React from "react";
import { AppContext } from "./appContext";
import { useState,useEffect } from "react";
import axios, { getAdapter } from "axios";
import { groupData } from "../helper/grouping.js";


const get_data =async (grouping_key,ordering_key)=>{
    const data = await axios.get("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers#").then((d)=>{
        return d.data;
    }).catch((e)=>{
        console.log(e);
        return [];
    })
    console.log(data);
    return groupData(data,grouping_key,ordering_key)
    
}


const AppContextProvider=({children})=>{
    const [data,setdata]=useState({});
    const local_group= localStorage.getItem('group')
    const local_ordering= localStorage.getItem('order')
    const local_theme= localStorage.getItem('theme')
    useEffect(()=>{
        const local_group= localStorage.getItem('group')
        const local_ordering= localStorage.getItem('order')
        const local_theme= localStorage.getItem('theme')
        // console.log(typeof(local_group),local_ordering,local_theme)
        if(local_group=='null'){
            console.log("changed local group")
            localStorage.setItem("group","priority")   
        }
        
        if(local_ordering=="null"){
            console.log("changed local order")
            localStorage.setItem("order","title")   
        }
        if(local_theme=="null"){
            localStorage.setItem("theme","light")   
        }
        },[])

    const [grouping,setgrouping]=useState(local_group);
    const [ordering,setordering]=useState(local_ordering);
    const [theme,settheme]=useState(local_theme);

    const get_value = async()=>{
        const value = await get_data(grouping,ordering)
        setdata(value)
    }
   
    // get_value()
    useEffect(() => {
        get_value();
        localStorage.setItem("group",grouping)
        localStorage.setItem("order",ordering)
       

    }, [grouping,ordering])
    
    
    return (
        <AppContext.Provider value={{data,grouping,setgrouping,ordering,setordering}}>
        {children}
        </AppContext.Provider>
    )

}


export default AppContextProvider