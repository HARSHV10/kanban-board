import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Main from './Component/main/main'
import Navbar from './Component/Navbar/navbar'
import AppContextProvider from './context/appContextProvider'



function App() {

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
  return (
    <Router>
    <AppContextProvider>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Main/>}></Route>
    </Routes>
    </AppContextProvider>
    </Router>
  )
}

export default App
