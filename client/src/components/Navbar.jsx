import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { userData } from '../lib/dummyData';
import { Link } from 'react-router-dom';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  const user = true;

  return (
    <div className='bg-sky-100 flex justify-between h-16 items-center p-3 text-xl'>
      {/*  */}
      <div>
          <h1 className='font-bold '>Real Estate</h1>
      </div>
      {/* links */}
      <div className='hidden lg:flex space-x-[2rem]'>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Agent</a>
      </div>
    {/* signup */}
      <div className='hidden lg:flex space-x-4 w-1/6'>

      {user?
      <div className='flex'>
        <div>
        <img className='w-11 rounded-full' src={userData.img} />
        <spna className="text-sm">{userData.name}</spna>
        </div>
        <a href='/profile' >Profile</a>
      </div>
      :
      <> <a className='p-2'>Sign In</a>
      <a className='bg-fuchsia-500   p-2'>Sign Up</a>
      </>}
      </div>
      {/* menu  */}
      <div className={`lg:hidden text-2xl`} onClick={toggle}>

      <CiMenuBurger />
      </div>
      {isOpen && <div className='absolute top-11 h-screen  bg-slate-600 text-white flex flex-col p-5 space-y-4 right-0 w-1/4 lg:hidden text-sm items-center z-50'>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Agent</a>
      
        {user?
      <div className='flex'>
        <div>
        {/* <img className='w-11 rounded-full' src={userData.img} /> */}
        {/* <spna className="text-sm">{userData.name}</spna> */}
        </div>
        <a href='/profile' >Profile</a>
      </div>
      :
      <> <a>Sign In</a>
      <a >Sign Up</a>
      </>}
      </div>}

    </div>
  )
}

export default Navbar