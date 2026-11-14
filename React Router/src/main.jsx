import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import About from './Components/AboutUs';
import Home from './Components/Home';
import Contact from './Components/ContactUs';
import User from './Components/User/UserInfo';
import Layout from './Root';
import Github from './Components/Github';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'/',
//         element:<Home/>
//       },
//       {
//         path:'/about',
//         element:<About/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       },

//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
     <Route path='user/:id' element={<User/>}/>
      <Route loader={() => fetch('https://api.github.com/users/shivanimandave01').then(res => res.json())} path='github' element={<Github/>}/>
   </Route> 
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
