import React from 'react'
import Navbar from '../Pages/Shared/Navbar'
import { Outlet } from 'react-router-dom'

const RegisterLayout = () => {
  return (
    <div className='bg-background'>
        <Navbar></Navbar>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default RegisterLayout