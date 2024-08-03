import HomePage from "./components/HomePage";
import List from "./components/List";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SinglePage from "./components/SinglePage";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import NewPost from "./components/NewPost";
import UpdateProfile from "./components/UpdateProfile";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    element: <Layout />, // Use the Layout component
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/list",
        element: <List />
      },
      {
        path: "/:id",
        element: <SinglePage />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/newpost",
        element: <NewPost />
      },
      {
        path: "/updateuser",
        element: <UpdateProfile />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App
