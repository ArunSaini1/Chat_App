import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Join from './Component/Join'
import './App.css'
import Chat from './Component/Chat'

export default function App() {




  return (
    <>
     <Routes>
      <Route path='/' element={<Join/>} />
      <Route path='/chat' element={<Chat/>} />
     </Routes> 
    </>
  )
}
