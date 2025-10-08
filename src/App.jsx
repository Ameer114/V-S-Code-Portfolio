import './App.css'
import Sidebar from './components/Sidebar'
import Topnav from './components/Topnav'
import Explorer from './components/Explorer'
import Navber from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
// App.jsx
<div className='bg-gray-800 text-white h-screen flex flex-col'>
  <Topnav />
  <div className="container flex flex-1 overflow-hidden"> {/* important: overflow-hidden */}
    <Sidebar />
     <div className="hidden md:flex">
    <Explorer />
  </div>
    <div className="innercontainer flex-1 h-full">  {/* make inner container full height */}
      <Navber />
      <Outlet />  {/* About component will scroll inside here */}
    </div>
  </div>
  <Footer />
</div>

  )
}

export default App
