import React from 'react'
import { FaCartShopping, FaHouse } from 'react-icons/fa6'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar'

const Mainlayout = () => {
   const isAdmin=true
  return (
    <div className='bg-background'>
        <Navbar></Navbar>
        <section className='grid grid-cols-4 gap-4 '>
            <div className='grid grid-cols-1'>
            <div className="w-64 min-h-screen ">
        <ul className="menu p-4 ">
{
  isAdmin ? <>
  
  <li className='bg-slate-400 rounded-md '>  <NavLink to='/dashboard'><FaHouse></FaHouse> Admin Home</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/cart'><FaCartShopping></FaCartShopping> Add Items</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/reviews'><FaCartShopping></FaCartShopping> Manage Items</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/bookings'><FaCartShopping></FaCartShopping> Manage Bookings</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/users'><FaCartShopping></FaCartShopping> All Users</NavLink></li>
  </>:<> 
  <li className='bg-slate-400 rounded-md '>  <NavLink to='/dashboard'><FaHouse></FaHouse>User Home</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/cart'><FaCartShopping></FaCartShopping>My Cart</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/additems'><FaCartShopping></FaCartShopping>Add Items</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/reviews'><FaCartShopping></FaCartShopping>Add Review</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/bookings'><FaCartShopping></FaCartShopping>My Booking</NavLink></li>
  </>
}
          <div className="divider"></div>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/'><FaHouse></FaHouse>  Home</NavLink></li>
        </ul>
      </div>
            </div>
            <div className='grid grid-cols-1 col-span-2 mx-auto'>
              <Outlet></Outlet>
            </div>
            <div className='grid col-span-1 '>
            <div className="w-full min-h-screen ">
        <ul className="menu p-4 ">
{
  isAdmin ? <>
  
  <li className='bg-slate-400 rounded-md '>  <NavLink to='/dashboard'><FaHouse></FaHouse> Admin Home</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/cart'><FaCartShopping></FaCartShopping> Add Items</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/reviews'><FaCartShopping></FaCartShopping> Manage Items</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/bookings'><FaCartShopping></FaCartShopping> Manage Bookings</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/users'><FaCartShopping></FaCartShopping> All Users</NavLink></li>
  </>:<> 
  <li className='bg-slate-400 rounded-md '>  <NavLink to='/dashboard'><FaHouse></FaHouse>User Home</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/cart'><FaCartShopping></FaCartShopping>My Cart</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/additems'><FaCartShopping></FaCartShopping>Add Items</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/reviews'><FaCartShopping></FaCartShopping>Add Review</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/bookings'><FaCartShopping></FaCartShopping>My Booking</NavLink></li>
  </>
}
          <div className="divider"></div>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/'><FaHouse></FaHouse>  Home</NavLink></li>
        </ul>
      </div>
            </div>
        </section>
    </div>
  )
}

export default Mainlayout