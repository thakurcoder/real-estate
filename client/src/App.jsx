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

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:'/list',
    element:<List/>
  },
  {
    path:'/:id',
    element:<SinglePage/>
  }

])

function App() {

  return (
    <div>
    <Navbar/>
    <RouterProvider router={router}/>
    </div>
  )
}
export default App
