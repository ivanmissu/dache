import { rem } from '../lib/rem.js'

/*
 * 地图区域容器。
 *
 * 原型里每个地图顶部有一段是留给 iOS 状态栏的，现在作为 H5 直接打开不再需要，
 * 所以把地图内容整体上移 TOP_CUT（相当于裁掉最上面一条），
 * 内部所有绝对定位的坐标（top-[..px] / left-[..px]）保持设计稿原值不变。
 *
 * 如果页面跑在全屏 WebView 里（有刘海安全区），会自动把安全区高度补回来，
 * 顶部按钮不会被刘海挡住。
 *
 * height：设计稿里地图区域的高度（px，含原状态栏那一段）。
 */
export const TOP_CUT = 34

export default function MapArea({ height, className = '', children }) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ height: `calc(${rem(height - TOP_CUT)} + var(--sat))` }}
    >
      <div className="absolute left-0 right-0 bottom-0" style={{ height: rem(height) }}>
        {children}
      </div>
    </div>
  )
}
