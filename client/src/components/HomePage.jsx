import React, { useEffect } from 'react';
import Search from './Search';
import apiRequest from '../lib/apiRequest';
import { useNavigate } from 'react-router-dom';
import { isauthorised } from '../lib/isAuthorised';
import { userStore } from '../lib/userStore';

function HomePage() {
  const navigate = useNavigate()
  const userName = userStore((state) => state.userName)
  const userEmail = userStore((state) => state.userEmail)
  const setUserName = userStore((state) => state.setUserName)
  const setUserEmail = userStore((state) => state.setUserEmail)

  const fetchData = async () => {
    const res = await apiRequest.get("/api/home/data")
    setUserEmail(res.data.userdata.email)
    setUserName(res.data.userdata.username)
  }

  // const isauthorise = async () => {
  //   const value = await isauthorised()
  //   if (!value) {
  //     navigate("/login")
  //   }
  // }

  useEffect(() => {
    // isauthorise()
    fetchData()
  }, [])

  return (
    <div className="relative -mt-16 flex flex-col lg:flex-row items-start min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://www.build-review.com/wp-content/uploads/2020/07/luxury-real-estate.jpg')" }}>
      <div className="w-full h-screen text-cyan-800 font-bold  p-5 bg-white bg-opacity-30 rounded-lg shadow-lg selection:text-red-500 ">
        <h1 className="font-bold text-4xl p-5 opacity-80">Find Real Estate & Get Your Dream Place</h1>
        <p className="p-5 text-xl ">Welcome to a world where your dream home is just around the corner. At Real Estate, we specialize in turning your real estate aspirations into reality. Whether you're searching for a cozy apartment in the heart of the city, a spacious family home in a serene neighborhood, or a luxurious property with breathtaking views, our expert team is here to guide you every step of the way. With a deep understanding of market trends and a commitment to exceptional service, we offer personalized solutions that cater to your unique needs and preferences. Explore our diverse listings and experience a seamless journey to finding the perfect place to call home.</p>
        <Search />
      </div>
    </div>
  );
}

export default HomePage;
