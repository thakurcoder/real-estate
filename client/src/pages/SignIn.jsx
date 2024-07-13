import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

function SignIn() {

  const [formData,setFormData] = useState({})
  const [error,setError] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")
  const navigate = useNavigate()
  // function for handling input on change
  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.id]:e.target.value
  })
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const res = await fetch("/api/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    });
    const data = await res.json()
    console.log(data)
    if (data.success == false){
      setError(true)
      if ( data.message.includes("duplicate key error collection")){
        setErrorMessage("username or gmail already exist")
      }
      else{
        setErrorMessage(data.message)
      }
    }
    else{
      navigate("/")
    }
  }

  useEffect(()=>{

  },[errorMessage])
  

  return (
    <div className='w-full p-3 '>
      <div className=' mx-auto  '>
        <h1 className='text-3xl text-center font-semibold p-1 py-4'>Sign IN</h1>
          {error && <p className='text-red-600 text-center '>{errorMessage}</p>}
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center'>
          {/* <input type='text' placeholder='username' required className='border p-3 rounded-lg w-80' id='username' onChange={handleChange}/> */}
          <input type='email' placeholder='email' required className='border p-3 rounded-lg w-80' id='email' onChange={handleChange}/>
          <input type='password' placeholder='password' required className='border p-3 rounded-lg w-80' id="password" onChange={handleChange}/>
          <button className='text-center bg-slate-600 w-80 h-11 font-bold text-xl text-gray-300 hover:bg-slate-400 '>SIGN IN</button>
        </form>

        <div className='flex gap-2 mt-5 justify-center'>
          <p>Dont have an account?</p>
          <Link to="/signin">
          <span className='text-blue-700'> Sign UP</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn