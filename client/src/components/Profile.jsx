import React, { useState } from 'react';
import { listData, userData } from '../lib/dummyData';
import Card from './Card';
import Chat from './Chat';
import apiRequest from '../lib/apiRequest';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { isauthorised } from '../lib/isAuthorised';

function Profile() {

  const navigate = useNavigate()

  const [posts,setPosts] = useState([])
  const [user,setUser] = useState([])

  const fetchdata = async()=>{
    try {
      const res = await apiRequest.get("/api/profile/data")
      console.log("in profile",res)
      setPosts(res.data.posts)
      setUser(res.data.user)
    } catch (error) {
      console.log(error)
    }

  }

  const handleDelete = async(id)=>{
    console.log("this is id",id)
    try {
      const res = await apiRequest.delete(`/api/post/deletpost/${id}`)
      console.log(res)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  const isauthorise = async () => {
    const value = await isauthorised()
    if (!value) {
      navigate("/login")
    }
  }


  useEffect(()=>{
    isauthorise()
    fetchdata()
},[])

  const logout = async ()=>{
    try {
      const res = await apiRequest.post("/api/auth/logout")
      
      if(res.status == 200){
        navigate("/")
      }
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='w-full lg:p-16 flex flex-col lg:flex-row gap-6'>
      <div className=' w-full  bg-white shadow-md rounded-lg p-1 lg:p-6 space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg lg:text-2xl font-semibold'>User Information</h1>
          <button 
          onClick={()=>navigate("/updateuser")}
           className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>Update Profile</button>
        </div>
        <div className='m-4 space-y-4'>
          <div className='flex items-center'>
            <h1 className='text-xl font-medium'>Avatar:</h1>
            <img className='w-16 h-16 rounded-full ml-3 p-1 border border-gray-300' src={user.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s"} alt="User Avatar" />
          </div>
          <h1 className='text-xl'>Username: {user.username}</h1>
          <button onClick={logout} className='text-xl bg-red-600 w-24 font-bold h-11'>Logout</button>
        </div>

        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            <h1 className='text-lg lg:text-2xl font-semibold'>My List</h1>
            <button onClick={()=>navigate("/newpost")} className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors'>Add New Post</button>
          </div>
          <div className=' lg:text-2xl lg:grid lg:gap-4'>
            {
              posts.map((e, index) => {
                return  <div className='text-xl flex justify-between'>
                <Card key={e.id} data={e} />
                <button
                    onClick={() => handleDelete(e.id)}
                    className='mt-2 h-11 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors'
                  >
                    Delete
                  </button>
                </div>
})
            }
          </div>
        </div>
      </div>
      {/* <div className='w-full lg:w-1/3'>
        <Chat />
      </div> */}
    </div>
  );
}

export default Profile;
