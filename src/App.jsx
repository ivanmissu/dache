import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
// 首页是默认落地页：保持同步导入，首屏不多等一个 chunk
import Home from './pages/Home.jsx'

// 其余页面按路由分包，用到再加载，首屏体积大幅减少
const Pickup = lazy(() => import('./pages/Pickup.jsx'))
const Dropoff = lazy(() => import('./pages/Dropoff.jsx'))
const CarSelect = lazy(() => import('./pages/CarSelect.jsx'))
const Calling = lazy(() => import('./pages/Calling.jsx'))
const Arriving = lazy(() => import('./pages/Arriving.jsx'))
const Cancelled = lazy(() => import('./pages/Cancelled.jsx'))
const Orders = lazy(() => import('./pages/Orders.jsx'))
const Profile = lazy(() => import('./pages/Profile.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.querySelectorAll('.page-scroll').forEach((el) => el.scrollTo(0, 0))
  }, [pathname])
  return null
}

/*
 * 首屏渲染完成后，用浏览器空闲时间把剩余路由的 chunk 预取回来。
 * 之后点击导航时模块已在缓存里，几乎是瞬时切换；不影响首屏加载。
 */
function usePrefetchRoutes() {
  useEffect(() => {
    if (!import.meta.env.PROD) return
    const prefetch = () => {
      import('./pages/Pickup.jsx')
      import('./pages/Dropoff.jsx')
      import('./pages/CarSelect.jsx')
      import('./pages/Calling.jsx')
      import('./pages/Arriving.jsx')
      import('./pages/Cancelled.jsx')
      import('./pages/Orders.jsx')
      import('./pages/Profile.jsx')
    }
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 2500 })
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(prefetch, 300)
    return () => window.clearTimeout(id)
  }, [])
}

export default function App() {
  usePrefetchRoutes()
  return (
    <div className="shell-outer">
      <div className="phone no-select">
        <div className="page">
          <ScrollToTop />
          {/* 分包 chunk 很小，兜底只占位一帧；不引入额外视觉元素 */}
          <Suspense fallback={<div className="flex-1 bg-[#F5F6F8]" />}>
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
          </Suspense>
        </div>
      </div>
    </div>
  )
}
