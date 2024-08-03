import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const [error,setError] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register",data)
      console.log("res",res)
      if(res.status == 201){
        console.log("success")
        navigate("/login")
      }
      else{
        setError(res.data.message)
      }
    } catch (error) {
      setError(error.response.data.message)
      console.log(error)
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form className="bg-slate-200 p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className='text-center text-2xl m-5 font-semibold'>Register</h1>
        <input
          onChange={handleChange}
          name="username"
          placeholder="Username"
          type="text"
          required
          className="w-full mb-4 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          type="email"
          required
          className="w-full mb-4 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <input
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="password"
          required
          className="w-full mb-6 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          onClick={submit}
          className="w-full bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-5"
        >
          Register
        </button>
      <Link
        to="/login"
        className="mt-4 text-blue-500 hover:underline"
      >
        Do you have an account
      </Link>
      {error && <p className='text-red-500'>*{error}</p>}
      </form>
    </div>
  );
}

export default Register;
