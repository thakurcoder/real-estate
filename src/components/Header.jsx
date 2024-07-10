import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='shadow-sm bg-slate-200 flex flex-wrap justify-between items-center p-4'>
      {/* logo */}
      <div className=' p-4'>
        <h1 className='text-2xl font-semibold'>
          <span className='text-slate-500'>Dream</span>
          <span className='text-amber-300'>Home</span>
        </h1>
      </div>

      {/* search */}
      <div className='bg-slate-100 p-4 w-full text-xl border rounded-xl border-slate-400 md:w-auto order-3 md:order-none flex'>
        <input 
          className='bg-slate-100 h-10 w-full  p-2  outline-none md:w-96' 
          type="text" 
          placeholder='Search...' 
        />
        <img className='w-6 h-9' src='https://cdn-icons-png.flaticon.com/512/54/54481.png' />
      </div>

      {/* menu button */}
      <div className='md:hidden p-4 order-2 md:order-none'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='focus:outline-none'>
          <img className='w-10' src='https://cdn-icons-png.flaticon.com/512/3502/3502458.png'/>
        </button>
      </div>

      {/* links */}
      <div className={`p-4 text-xl font-medium w-full md:w-auto md:flex ${menuOpen ? 'block' : 'hidden'} md:block order-1 md:order-none`}>
        <ul className='flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0'>
          <li>
            <Link to="/" className='hover:text-orange-400 block text-center'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='hover:text-orange-400 block text-center'>About</Link>
          </li>
          <li>
            <Link to="/signin" className='hover:text-orange-400 block text-center'>SignIn</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
