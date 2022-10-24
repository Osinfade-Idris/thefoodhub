import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../components/home/MainNav'
import Footer from '../components/home/footer/Footer'

export default function MainLayout() {
  return (
    <>
        <MainNav/>
        <Outlet/>
        <Footer/>
    </>
  )
}
