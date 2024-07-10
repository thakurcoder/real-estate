import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile"
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path:'/profile',
        element:<Profile />
      },
    ],
  },
]);

function App() {
  return<div>
     
      <RouterProvider router={router} />
  </div> 
}

export default App;