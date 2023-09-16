import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav/Nav'
import MainLayout from './components/mainLayout/MainLayout'
import Explore from './components/Explore/Explore'
import ProfileNav from './components/profileNav/ProfileNav'

function Rout() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<MainLayout />}/>
          <Route path='explore' element={<Explore />}/>
          <Route path='profile' element = {<ProfileNav />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Rout
