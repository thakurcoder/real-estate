import React from 'react';
import { listData, userData } from '../lib/dummyData';
import Card from './Card';
import Chat from './Chat';

function Profile() {
  return (
    <div className='w-full lg:p-4 flex flex-col lg:flex-row gap-6'>
      <div className=' w-full lg:w-2/3 bg-white shadow-md rounded-lg p-1 lg:p-6 space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg lg:text-2xl font-semibold'>User Information</h1>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>Update Profile</button>
        </div>
        <div className='m-4 space-y-4'>
          <div className='flex items-center'>
            <h1 className='text-xl font-medium'>Avatar:</h1>
            <img className='w-16 h-16 rounded-full ml-3 p-1 border border-gray-300' src={userData.img} alt="User Avatar" />
          </div>
          <h1 className='text-xl'>Username: {userData.name}</h1>
        </div>

        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            <h1 className='text-lg lg:text-2xl font-semibold'>My List</h1>
            <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors'>Add New Post</button>
          </div>
          <div className=' lg:text-2xl lg:grid lg:gap-4'>
            {
              listData.map((e, index) => {
                return  <div className='text-xl'>
                <Card key={index} data={e} />
                </div>
})
            }
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/3'>
        <Chat />
      </div>
    </div>
  );
}

export default Profile;
