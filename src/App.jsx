import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Main from './Component/main/main'
import Navbar from './Component/Navbar/navbar'
import AppContextProvider from './context/appContextProvider'



function App() {
  const [count, setCount] = useState(0)

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
