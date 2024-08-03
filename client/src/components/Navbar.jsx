import React, { useEffect, useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { userData } from '../lib/dummyData';
import { Link } from 'react-router-dom';
import apiRequest from '../lib/apiRequest';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const [user,setUser] = useState()
  const toggle = () =>{
    setIsOpen(!isOpen)
  }



  const fetchdata = async ()=>{
    const res = await apiRequest.get("/api/home/data")
    console.log(res)
    setUser(res.data.userdata)
  }

  useEffect(()=>{
    fetchdata()
  },[])

  console.log("user",user)

  

  return (
    <div className='bg-sky-700 text-white flex justify-between items-center h-16 p-3 text-xl shadow-md lg:p-10'>
      {/*  */}
      <div className='flex items-center space-x-3'>
          <img className='w-16 p-2' src='https://img.freepik.com/premium-vector/dream-house-logo-vector-design-real-estate-company_915501-117.jpg' />
          <h1 className='font-bold text-2xl '>Dream Home</h1>
      </div>
      {/* links */}
      <div className='hidden lg:flex space-x-8'>
        <a href="/" className='hover:text-blue-500 transition-colors'>Home</a>
        <a href="/about" className='hover:text-blue-500 transition-colors'>About</a>
        <a href="/contact" className='hover:text-blue-500 transition-colors'>Contact</a>
        {/* <a>Agent</a> */}
      </div>
    {/* signup */}
      <div className='hidden lg:flex items-center space-x-4 w-1/6'>

      {user?
      <div className='flex items-center space-x-2'>
        <div>
        <img className='w-11 h-11 rounded-full border-2 border-gray-300' src={user.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s"} />
        <spna className="text-sm">{user.username}</spna>
        </div>
        <a className='text-white hover:text-blue-400' href='/profile' >Profile</a>
      </div>
      :
      <> <a href='/login' className='p-2 bg-teal-600 text-white hover:bg-fuchsia-600 rounded-md transition-colors'>Sign In</a>
      <a href='/register' className='bg-teal-600 text-white p-2 rounded-md hover:bg-fuchsia-600 transition-colors'>Sign Up</a>
      </>}
      </div>
      {/* menu  */}
      <div className={`lg:hidden text-2xl`} onClick={toggle}>

      <CiMenuBurger />
      </div>
      {isOpen && <div className='absolute top-11 h-screen  bg-sky-700 text-white flex flex-col p-5 space-y-4 right-0 w-1/4 lg:hidden text-sm items-center z-50'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        {/* <a>Agent</a> */}
      
        {user?
      <div className='flex'>
        <div>
        {/* <img className='w-11 rounded-full' src={userData.img} /> */}
        {/* <spna className="text-sm">{userData.name}</spna> */}
        </div>
        <a href='/profile' >Profile</a>
      </div>
      :
      <> <a href='/login'>Sign In</a>
      <a href='/register'>Sign Up</a>
      </>}
      </div>}

    </div>
  )
}

export default Navbar