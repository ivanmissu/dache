import { useNavigate } from 'react-router-dom'
import FakeMap from '../components/FakeMap.jsx'
import MapArea from '../components/MapArea.jsx'
import { LogoCar, Crosshair, ShieldPlus, Clock, PinSolid } from '../components/Icons.jsx'

const CANCEL_LABELS = [
  { text: '来路桥', x: 12, y: 88, color: '#8E97A6', size: 12, rotate: -62 },
  { text: '红军营东路', x: 36, y: 172, color: '#6E7887', size: 13, rotate: 90 },
  { text: '北苑东路', x: 118, y: 196, color: '#6E7887', size: 13, rotate: 90 },
  { text: '朝来森林公园', x: 285, y: 82, color: '#2E9E5B', bold: true, size: 14 },
  { text: '龙湖蓝海引擎产业园', x: -20, y: 316, color: '#8E97A6', size: 12.5 },
  { text: '新勇路', x: 222, y: 312, color: '#6E7887', size: 13, rotate: 90 },
  { text: '维士大厦', x: -16, y: 412, color: '#8E97A6', size: 12.5 },
  { text: '居然之家', x: 106, y: 412, color: '#6E7887', size: 13 },
  { text: '北五环', x: 22, y: 456, color: '#5E6A7C', size: 12.5, rotate: -14 },
  { text: '来广营西路', x: 262, y: 466, color: '#6E7887', size: 13 },
  { text: '来广营桥', x: 330, y: 556, color: '#8E97A6', size: 12.5 },
]

export default function Cancelled() {
  const nav = useNavigate()
  return (
    // 页面底色用白色，和底部面板连成一片（屏幕比内容高时不露出灰底）
    <div className="flex flex-col h-full bg-white">
      <div className="page-scroll">
        {/* ---------------- map ---------------- */}
        <MapArea height={510}>
          <FakeMap theme="green" labels={CANCEL_LABELS} dense>
            {/* railway */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 393 560" fill="none">
              <path d="M30 60 420 240" stroke="#C9CFDA" strokeWidth="3" strokeDasharray="9 7" />
              {/* highway */}
              <path d="M-10 470 C 120 505, 260 530, 420 600" stroke="#B9C6D4" strokeWidth="12" opacity="0.55" />
              {/* ponds */}
              <ellipse cx="308" cy="228" rx="17" ry="11" fill="#BFE3EE" />
              <ellipse cx="158" cy="330" rx="10" ry="6" fill="#BFE3EE" />
              <ellipse cx="230" cy="342" rx="7" ry="12" fill="#CBE8B8" />
              <ellipse cx="252" cy="336" rx="16" ry="10" fill="#CBE8B8" />
              {/* road 13 badge */}
              <rect x="228" y="112" width="26" height="18" rx="4" fill="#F4CE55" />
              <text x="241" y="125" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7A5B10">13</text>
            </svg>

            {/* dest pin + label */}
            <div className="absolute left-[308px] top-[196px]">
              <PinSolid size={38} color="#EE3B22" />
            </div>
            <div className="absolute left-[264px] top-[242px] bg-white rounded-[8px] px-[12px] py-[8px] text-[12.5px] font-semibold text-[#1c2338] leading-none whitespace-nowrap shadow-[0_3px_12px_rgba(30,40,60,0.14)]">
              北京朝来淘宝园市场
            </div>

            {/* pickup pin + label */}
            <div className="absolute left-[52px] top-[326px]">
              <PinSolid size={38} color="#12B76A" />
            </div>
            <div className="absolute left-[82px] top-[342px] bg-white rounded-[8px] px-[12px] py-[8px] text-[13.5px] font-semibold text-[#1c2338] leading-none shadow-[0_3px_12px_rgba(30,40,60,0.14)]">
              德辰国际
            </div>
          </FakeMap>

          {/* logo */}
          <div className="absolute left-[14px] top-[42px] flex items-center gap-[10px]">
            <LogoCar size={42} radius={11} />
            <div className="leading-none">
              <div className="text-[20px] font-bold text-[#FB5A00] leading-none">福利打车</div>
              <div className="text-[10px] text-[#FF8A4B] tracking-[4px] mt-[5px]">出行有福利</div>
            </div>
          </div>

          {/* floating buttons */}
          <div className="absolute right-[14px] top-[432px] flex flex-col gap-[14px]">
            <button className="w-[42px] h-[42px] bg-white rounded-[13px] flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.1)]">
              <Crosshair size={22} />
            </button>
            <button className="w-[42px] h-[42px] bg-white rounded-[13px] flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.1)]">
              <ShieldPlus size={22} />
            </button>
          </div>
        </MapArea>

        {/* ---------------- sheet ---------------- */}
        <div className="bg-white rounded-t-[20px] px-[22px] pt-[24px] pb-[calc(18px+var(--sab))]">
          <div className="text-[25px] font-bold text-[#1c2338] leading-none">订单已取消</div>
          <div className="mt-[18px] h-px bg-[#F0F1F3]" />

          <div className="mt-[18px] flex items-center gap-[10px]">
            <Clock size={20} color="#8B94A5" />
            <span className="text-[15px] text-[#1c2338]">
              下单时间：<span className="font-semibold">2026年11月03日 15:05</span>
            </span>
          </div>
          <div className="mt-[15px] flex items-center gap-[10px]">
            <span className="w-[11px] h-[11px] rounded-full bg-[#12B76A] shrink-0" />
            <span className="text-[15px] text-[#1c2338]">德辰国际-西门-对面</span>
          </div>
          <div className="mt-[15px] flex items-center gap-[10px]">
            <span className="w-[11px] h-[11px] rounded-full bg-[#F9571F] shrink-0" />
            <span className="text-[15px] text-[#1c2338]">北京朝来淘宝园市场</span>
          </div>

          <button
            className="mt-[22px] w-full rounded-[28px] py-[17px] text-white text-[21px] font-bold leading-none press shadow-[0_12px_26px_rgba(250,88,0,0.35)]"
            style={{ background: 'linear-gradient(90deg,#FF7A22,#F74C00)' }}
            onClick={() => nav('/calling')}
          >
            重新呼叫
          </button>
        </div>
      </div>
    </div>
  )
}
