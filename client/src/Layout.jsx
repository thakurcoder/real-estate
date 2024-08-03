// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function Layout() {
  return (
    <div>
      <Navbar/>
      <div className="mt-16"> {/* Adjust the margin to ensure content is not hidden behind the navbar */}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
