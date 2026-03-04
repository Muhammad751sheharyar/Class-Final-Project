import React from 'react'
import { ShowData } from './Components/ShowData'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddUser from './Components/AddUser'
// import Signup from './Components/Signup'
// import Login from './Components/Login'
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <ShowData />

    },
    {
      path: "/adduser",
      element:<AddUser/>
    }

  ])
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
      {/* <ShowData /> */}

      {/* <Signup /> */}
      {/* <Login /> */}
    </div>
  )
}

export default App
