import React, { useState } from 'react';
import apiRequest from '../lib/apiRequest';
import { useEffect } from 'react';
import { isauthorised } from '../lib/isAuthorised';
import { useNavigate } from 'react-router-dom';

function UpdateProfile() {

  const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        avatar: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const isauthorise = async () => {
        const value = await isauthorised()
        if (!value) {
          navigate("/login")
        }
      }

      useEffect(()=>{
        isauthorise()
      },[])
    
      
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await apiRequest.put("/api/user/update",formData)
            console.log(res)
            navigate("/profile")
        } catch (error) {
            console.log(error)
        }
      };
    
  return (
    <div>

    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-16">
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        
        <div>
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar URL</label>
          <input
            type="text"
            id="avatar"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );




    </div>
  )
}

export default UpdateProfile