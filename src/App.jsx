import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import Pickup from './pages/Pickup.jsx'
import Dropoff from './pages/Dropoff.jsx'
import CarSelect from './pages/CarSelect.jsx'
import Calling from './pages/Calling.jsx'
import Arriving from './pages/Arriving.jsx'
import Cancelled from './pages/Cancelled.jsx'
import Orders from './pages/Orders.jsx'
import Profile from './pages/Profile.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.querySelectorAll('.page-scroll').forEach((el) => el.scrollTo(0, 0))
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="shell-outer">
      <div className="phone no-select">
        <div className="page">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pickup" element={<Pickup />} />
            <Route path="/dropoff" element={<Dropoff />} />
            <Route path="/cars" element={<CarSelect />} />
            <Route path="/calling" element={<Calling />} />
            <Route path="/arriving" element={<Arriving />} />
            <Route path="/cancelled" element={<Cancelled />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
