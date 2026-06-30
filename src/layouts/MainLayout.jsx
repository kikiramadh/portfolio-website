import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#08111F] text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout