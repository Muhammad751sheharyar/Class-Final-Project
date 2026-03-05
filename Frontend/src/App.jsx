import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddUser from './Components/AddUser'
// import { Login } from '../../Backend/controllers/auth'
import Navbar from './Components/Navbar/Navbar'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { ShowData } from './Components/ShowData'
import UpdateProduct from './UpdateProducts/UpdateProducts'
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <ShowData />

    },
    {
      path: "/adduser",
      element: <AddUser />
    },
    {
      path: "/UpdateProduct",
      element: <UpdateProduct />
    }

  ])
  return (
    <div>
      <Navbar/>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App
