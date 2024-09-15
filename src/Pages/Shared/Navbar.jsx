import React from 'react'
import { TbSocial } from "react-icons/tb";
import { FaHome, FaUser, FaUserFriends } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-[#d5e7f7] shadow-md ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to="/home" ><FaHome className='size-10' /></Link></li>
     
        <li><Link><MdLiveTv className='size-5' /></Link></li>
        <li><Link><FaUserFriends className='size-5' /></Link></li>
      </ul>
    </div>
    <div className='flex space-x-3 ps-3'>
   
    <img src="https://i.postimg.cc/Pxp28W3t/icons-unscreen.gif" className='size-10' alt="" />

    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/home"><FaHome  className='size-5' /></Link></li>
     
    <li><Link><MdLiveTv className='size-5' /></Link></li>
    <li><Link><FaUserFriends className='size-5' /></Link></li>
    </ul>
  </div>
  <div className="navbar-end mr-8">
  <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1 btn-sm"><FaUser></FaUser></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><Link>Profile</Link></li>
    <li><Link to="/registration/signin">Logout or Login</Link></li>
  </ul>
</div>
    
  </div>
</div>
  )
}

export default Navbar