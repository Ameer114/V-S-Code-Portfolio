import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Github from './pages/Github.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Settings from './pages/Settings.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:'/', element:<Home/>},
      {path:'/about', element:<About/>},
      {path:'/contact', element:<Contact/>},
      {path:'/projects', element:<Projects/>},
      {path:'/github', element:<Github/>},
      {path:'/settings', element:<Settings/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
