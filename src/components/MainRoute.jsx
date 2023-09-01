import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'

export const MainRoute = () => {
  return (
    <>
    <Routes>
        <Route to="/" element={<Home/>}/>
    </Routes>
    </>
  )
}
