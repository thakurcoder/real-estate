import React from 'react';
import Search from './Search';

function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row items-start">
      <div className="w-full lg:w-2/3 p-5">
        <h1 className="font-bold text-4xl p-5 opacity-80">Find Real Estate & Get Your Dream Place</h1>
        <p className="p-5 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatibus saepe maiores distinctio enim iste optio dolore at, velit odit error, tempore modi cumque ipsum a! Ex officia officiis ducimus optio dolor quod recusandae!</p>
      <Search/>
      </div>
      <div className="hidden lg:block lg:w-1/3 absolute lg:relative right-0 top-0 lg:top-auto lg:right-auto">
        <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJspiSIshhAWp5gYzdAi13Ix6AZz3xdCoQA&s" alt="Real Estate"/>
      </div>
    </div>
  );
}

export default HomePage;
