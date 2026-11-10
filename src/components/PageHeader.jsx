import { ChevronLeft, SendIcon, Crosshair } from './Icons.jsx'

/*
 * 二级页面顶部导航：返回 + 居中标题 + 右侧可选操作区。
 * 三者都在同一个 50px 高的条里垂直居中，保证返回箭头、标题、右侧胶囊在一条水平线上。
 * 顶部只在有刘海安全区（全屏 WebView）时才额外留白。
 */
export default function PageHeader({ title, onBack, right }) {
  return (
    <div className="shrink-0 pt-[var(--sat)]">
      <div className="relative h-[50px] flex items-center justify-center">
        <button
          className="absolute left-[8px] top-1/2 -translate-y-1/2 p-[12px] press"
          onClick={onBack}
          aria-label="返回"
        >
          <ChevronLeft size={23} />
        </button>
        <span className="text-[18px] font-bold text-[#1c2338] leading-none">{title}</span>
        {right && <div className="absolute right-[14px] top-1/2 -translate-y-1/2">{right}</div>}
      </div>
    </div>
  )
}

/* 右上角「发送 | 定位」胶囊 */
export function HeaderCapsule() {
  return (
    <div className="flex items-center bg-white rounded-full px-[13px] py-[8px] shadow-[0_2px_10px_rgba(30,40,60,0.06)]">
      <SendIcon size={19} />
      <span className="w-px h-[17px] bg-[#E8EAEF] mx-[11px]" />
      <Crosshair size={19} />
    </div>
  )
}
