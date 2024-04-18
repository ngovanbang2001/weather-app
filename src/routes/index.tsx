import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import { ROUTES_APP } from '../utils/constants'
import NotFound from '../pages/not-found'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES_APP.home.value}  element={<Home/>} />
      <Route path={ROUTES_APP.not_found.value}  element={<NotFound/>} />
    </Routes>
  )
}

export default MainRoutes