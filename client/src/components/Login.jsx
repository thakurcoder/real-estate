import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiRequest from '../lib/apiRequest'

function Login() {
    const [data,setData] = useState({
        username:"",
        password:""
    })

    const [error,setError] = useState("")
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name,value} = e.target
        setData((prevData)=>({
            ...prevData,
            [name]:value
        }))
        console.log(data)
    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            setError("")
        const res = await apiRequest.post("/api/auth/login",data,)
            console.log("res",res)
            if(res.status == 200){
                navigate("/")
                console.log("success")
            }
            else{
                setError(res.message)
            }
        } catch (error) {
            setError(error.response.data.message)
            console.log(error.response.data.message)
        }
      };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <h1  className='text-center text-2xl m-5 font-semibold'>Login</h1>
            <input onChange={handleChange} name="username" placeholder='Username' type='text' required className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 my-3"/>

            <input onChange={handleChange} name="password" placeholder='Password' type='password' required className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 my-3"/>

            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-3" onClick={submit} >Login</button>
            
            <Link to={"/register"} className="text-blue-500 hover:underline">Don't have account Register</Link>

       {error && <p className='text-red-500'>*{error}</p>}
        </form>
    </div>
  )
}

export default Login