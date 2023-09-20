import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav/Nav'
import MainLayout from './components/mainLayout/MainLayout'
import Explore from './components/Explore/Explore'
import ProfileNav from './components/profileNav/ProfileNav'
import Posts from './components/profileNav/post/Posts'
import Saved from './components/profileNav/saved/Saved'
import Tagged from './components/profileNav/tagged/Tagged'
import Reels from './components/reels/Reels'

function Rout() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<MainLayout />} />
          <Route path='explore' element={<Explore />} />
          <Route path='reels' element={<Reels />} />
          <Route path='profile' element={<ProfileNav />}>
            <Route index element={<Posts />} />
            <Route path='saved' element={<Saved />} />
            <Route path='tagged' element={<Tagged />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default Rout
