import React from 'react'
import {Link} from "react-router-dom"

function SignUp() {
  return (
    <div className='w-full p-3 '>
      <div className=' mx-auto '>
        <h1 className='text-3xl text-center font-semibold p-1 py-4'>Sign Up</h1>

        <form className='flex flex-col gap-4 items-center'>
          <input type='text' placeholder='username' className='border p-3 rounded-lg w-80' id='username'/>
          <input type='text' placeholder='email' className='border p-3 rounded-lg w-80' id='email'/>
          <input type='text' placeholder='password' className='border p-3 rounded-lg w-80' id="password"/>
          <button className='text-center bg-slate-600 w-80 h-11 font-bold text-xl text-gray-300'>SIGN UP</button>
        </form>

        <div className='flex gap-2 mt-5 justify-center'>
          <p> Have an account?</p>
          <Link to="/signin">
          <span className='text-blue-700'> Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp