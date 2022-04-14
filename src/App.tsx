import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

import Layout from './components/Layout'
import ActiveNotes from './pages/Active'
import ArchiveNotes from './pages/Archive'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<ActiveNotes />} />
        <Route path='archive' element={<ArchiveNotes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
   </> 
  )
}

export default App;
