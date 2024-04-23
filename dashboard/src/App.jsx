import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import FindDoc from './pages/FindDoc'
import DocInfo from './pages/DocInfo'
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Signup from './pages/Signup'
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FindDoc/>} />
          <Route path='/docinfo' element={<DocInfo/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
