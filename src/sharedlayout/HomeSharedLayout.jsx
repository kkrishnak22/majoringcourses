import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
export default function HomeSharedLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
