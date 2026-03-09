// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import AddUser from './Components/AddUser'
// // import { Login } from '../../Backend/controllers/auth'
// import Navbar from './Components/Navbar/Navbar'
// import Signup from './Components/Signup'
// import Login from './Components/Login'
// import { ShowData } from './Components/ShowData'
// import UpdateProduct from './UpdateProducts/UpdateProducts'
// function App() {
//   const route = createBrowserRouter([
//     {
//       path: "/",
//       element: <ShowData />

//     },
//     {
//       path: "/adduser",
//       element: <AddUser />
//     },
//     {
//       path: "/UpdateProduct",
//       element: <UpdateProduct />
//     }

//   ])
//   return (
//     <div>
//       <Navbar/>
//       <RouterProvider router={route}></RouterProvider>
//     </div>
//   )
// }

// export default App
import { useState } from 'react'
// import './App.css'
import { BrowserRouter } from 'react-router-dom';
import SignupForm from './Components/Signup'
import LoginForm from './Components/Login'
// import Router from './router/router';
// import Navbar from './Navbar/Navbar';

// craeate routing for all pages and if the between Home(website customer facing), Signup , login and dashboard. Now if the employe login with its credential so need to show authorized view and if the admin login so that view should be different 
// Integrate the Get /products API so we can render all products in home page and after login and signup admin can Perform the CRUD of Products and also render the dashboard view.
function App() {
    return (
<>xcknvlsdnflksdn
        <BrowserRouter>
            <Navbar />
            <Router />

            <SignupForm />
        <LoginForm />
        </BrowserRouter>
        </>
    )
}

export default App
