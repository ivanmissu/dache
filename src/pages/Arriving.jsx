import { useNavigate } from 'react-router-dom'
import FakeMap from '../components/FakeMap.jsx'
import MapArea from '../components/MapArea.jsx'
import { rem } from '../lib/rem.js'
import {
  ChevronLeft,
  ChevronRight,
  Crosshair,
  SendIcon,
  RouteIcon,
  PinTeardrop,
  CarTop,
  BellRing,
  PhoneIcon,
  Shield110,
  XSquare,
  ShareArrow,
  MoreDots,
  ChatDots,
  OrangeShieldPlus,
} from '../components/Icons.jsx'

const ARRIVE_LABELS = [
  { text: '北苑小街', x: 262, y: 92, color: '#98A1B0', size: 12.5 },
  { text: '格林', x: 332, y: 143, color: '#2FA36B', bold: true, size: 12.5 },
  { text: '5号楼', x: -6, y: 216, color: '#98A1B0', size: 12.5 },
  { text: '登记服务中心', x: 226, y: 224, color: '#8E97A6', size: 12.5 },
  { text: '民委员会', x: -14, y: 312, color: '#98A1B0', size: 12.5 },
  { text: '11号楼', x: 10, y: 368, color: '#98A1B0', size: 12.5 },
  { text: '高德地图', x: 246, y: 368, color: '#A6ADB8', size: 13.5 },
  { text: '沙县小吃', x: 286, y: 428, color: '#98A1B0', size: 12.5 },
]

export default function Arriving() {
  const nav = useNavigate()
  return (
    // 页面底色用白色，和底部司机面板连成一片（屏幕比内容高时不露出灰底）
    <div className="flex flex-col h-full bg-white">
      <div className="page-scroll">
        {/* ---------------- map ---------------- */}
        <MapArea height={483}>
          <FakeMap theme="cool" labels={ARRIVE_LABELS} dense>
            {/* route: up, right, down to pin */}
            {/* 画布固定为设计稿尺寸并靠左上角，路线和图钉、车辆的定位坐标一一对应 */}
            <svg className="absolute left-0 top-0 w-[393px] h-[483px]" viewBox="0 0 393 483" fill="none">
              <path
                d="M130 320 V112 Q130 104 138 104 H262 Q270 104 270 112 V236"
                stroke="#FA6805"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* direction chevrons */}
              <path d="m125 262 5-7 5 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m125 214 5-7 5 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m125 162 5-7 5 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m176 99 7 5-7 5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m218 99 7 5-7 5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m265 168 5 7 5-7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m265 214 5 7 5-7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* pickup pin */}
            <div className="absolute left-[254px] top-[196px]">
              <PinTeardrop size={34} color="#FA5A00" />
            </div>
            <div className="absolute left-[262px] top-[236px] w-[13px] h-[13px] rounded-full bg-[#FA5A00] border-[2.5px] border-white" />

            {/* edit pickup card */}
            {/* 卡片放在图钉正上方（底边 190 < 图钉顶 196），不再盖住图钉 */}
            <button className="absolute left-[212px] top-[153px] bg-white rounded-[11px] px-[15px] py-[11px] flex items-center gap-[8px] press shadow-[0_4px_16px_rgba(30,40,60,0.14)]">
              <span className="text-[15px] font-bold text-[#1c2338] leading-none">修改上车点</span>
              <ChevronRight size={15} color="#8B94A5" />
            </button>

            {/* driver bubble */}
            <div className="absolute left-[72px] top-[233px]">
              <div className="inline-block bg-white rounded-[12px] px-[18px] py-[13px] text-[17px] font-bold text-[#1c2338] leading-none shadow-[0_4px_16px_rgba(30,40,60,0.12)]">
                司机正在赶来
              </div>
              {/* 文字底边 (≈296) 在车辆图标顶 (300) 之上，不和车重叠 */}
              <div className="mt-[5px] ml-[52px] text-[15px] leading-none font-bold text-[#1c2338] whitespace-nowrap [text-shadow:0_0_6px_#fff,0_0_6px_#fff]">
                德辰国际-西门-对面
              </div>
            </div>

            {/* driver car */}
            <div className="absolute left-[112px] top-[300px]">
              <CarTop size={34} rotate={0} />
            </div>

            {/* parking */}
            <div className="absolute left-[148px] top-[352px] w-[22px] h-[22px] rounded-[6px] bg-[#3B82F6] flex items-center justify-center">
              <span className="text-white text-[12px] font-bold leading-none">P</span>
            </div>

            {/* chat */}
            <div className="absolute left-[12px] top-[380px] flex items-center gap-[8px]">
              <img src="assets/driver-avatar.webp" alt="" width="84" height="84" decoding="async" className="w-[38px] h-[38px] shrink-0 rounded-full object-cover border-[2px] border-white shadow-[0_2px_8px_rgba(30,40,60,0.2)]" />
              <div className="rounded-[10px] px-[14px] py-[10px] text-white text-[14px] leading-none" style={{ background: 'rgba(62,72,84,0.72)' }}>
                你好，很高兴为你服务
              </div>
            </div>

            {/* reply pill */}
            <div className="absolute left-[12px] top-[428px] flex items-center bg-white rounded-full pl-[12px] pr-[6px] py-[6px] shadow-[0_3px_14px_rgba(30,40,60,0.12)]">
              <ChatDots size={22} />
              <span className="text-[14px] text-[#9AA1B1] ml-[10px]">回复</span>
              <span className="w-px h-[16px] bg-[#E8EAEF] mx-[12px]" />
              <ChevronRight size={15} color="#B7BDC9" />
            </div>

            {/* safety */}
            <div className="absolute right-[52px] top-[432px] bg-white rounded-full px-[15px] py-[10px] text-[15px] font-bold text-[#F9571F] leading-none shadow-[0_3px_14px_rgba(30,40,60,0.12)]">
              安全中心
            </div>
            <button className="absolute right-[12px] top-[422px] w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center press shadow-[0_3px_14px_rgba(30,40,60,0.12)]">
              <OrangeShieldPlus size={28} />
            </button>
          </FakeMap>

          {/* header controls */}
          <button
            className="absolute left-[12px] top-[46px] w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.12)]"
            onClick={() => nav('/calling')}
          >
            <ChevronLeft size={20} />
          </button>
          <div className="absolute right-[12px] top-[46px] flex items-center bg-white rounded-full pl-[14px] pr-[14px] py-[10px] shadow-[0_2px_10px_rgba(30,40,60,0.12)]">
            <SendIcon size={19} />
            <span className="w-px h-[18px] bg-[#E8EAEF] mx-[12px]" />
            <Crosshair size={19} />
          </div>

          {/* right floating */}
          <div className="absolute right-[8px] top-[318px] flex flex-col gap-[14px]">
            <button className="w-[42px] h-[52px] bg-white rounded-[13px] flex flex-col items-center justify-center gap-[3px] press shadow-[0_2px_10px_rgba(30,40,60,0.12)]">
              <RouteIcon size={21} />
              <span className="text-[10px] text-[#1c2338] leading-none">选择路线</span>
            </button>
            <button className="w-[42px] h-[42px] bg-white rounded-[13px] flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.12)]">
              <Crosshair size={21} />
            </button>
          </div>
        </MapArea>

        {/* ---------------- orange strip ---------------- */}
        <div className="h-[46px] flex items-center px-[22px] gap-[8px] relative overflow-hidden" style={{ background: 'linear-gradient(90deg,#FF7A22,#FA5E00)' }}>
          <svg width={rem(20)} height={rem(20)} viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M13 2 4 13.5h6L9.5 22 20 9.5h-7L13 2Z" fill="#fff" />
          </svg>
          <span className="text-white text-[16px] font-bold leading-none whitespace-nowrap">5秒接单，高峰期打车快人一步！</span>
          <span className="text-white text-[16px] font-bold leading-none ml-[6px]">（3）</span>
          <svg className="absolute right-[70px] top-0 w-[90px] h-[46px]" viewBox="0 0 90 46" fill="none" opacity="0.18">
            <path d="M52 2 30 24h14L36 44 62 18H46L52 2Z" fill="#fff" />
          </svg>
        </div>

        {/* ---------------- driver sheet ---------------- */}
        <div className="bg-white rounded-t-[20px] -mt-[14px] relative px-[20px] pt-[20px] pb-[calc(18px+var(--sab))]">
          <div className="text-[23px] font-bold text-[#1c2338] leading-none">司机即将到达</div>
          <div className="mt-[12px] text-[13px] text-[#8B94A5] leading-[1.75]">
            车辆正前往<span className="text-[#F9571F]">德辰国际-西门-对面</span>接你，为保障你的权益请勿与司机线下交易，若行程有变，可在 <span className="text-[#F9571F] font-semibold">15:09</span> 前免费取消
          </div>

          <div className="mt-[16px] flex items-start justify-between">
            <div>
              {/* green plate */}
              <div
                className="inline-flex items-center rounded-[9px] px-[12px] py-[7px]"
                style={{
                  background: 'linear-gradient(180deg,#B7F16E,#63E85E)',
                  border: '2px solid #3DBB3D',
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.7)',
                }}
              >
                <span className="text-[25px] font-black text-[#0B2B12] leading-none tracking-[0.5px]">京APA5891</span>
              </div>
              <div className="mt-[12px] flex items-center gap-[9px]">
                <span className="text-[12px] font-bold text-white rounded-[6px] px-[7px] py-[4px] leading-none" style={{ background: '#FA6805' }}>
                  经济型
                </span>
                <span className="text-[15px] font-bold text-[#1c2338]">蓝色·云海-SUV</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="relative">
                <img src="assets/car-blue-suv.webp" alt="" width="256" height="140" decoding="async" className="w-[128px] h-[70px] object-contain" />
                <img
                  src="assets/driver-avatar.webp"
                  alt=""
                  width="84"
                  height="84"
                  decoding="async"
                  className="absolute right-[-2px] bottom-[2px] w-[42px] h-[42px] rounded-full object-cover border-[2px] border-white"
                />
              </div>
              <div className="flex items-center gap-[6px] mt-[8px]">
                <span className="w-[21px] h-[21px] rounded-full bg-[#FA6805] text-white text-[9px] font-bold flex items-center justify-center leading-none">阳光</span>
                <span className="text-[13.5px] text-[#1c2338]">阳光出行·晋师傅</span>
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="mt-[16px] h-px bg-[#F0F1F3]" />

          {/* actions */}
          <div className="mt-[14px] flex items-start">
            {[
              { icon: <BellRing size={25} />, label: '催一催' },
              { icon: <PhoneIcon size={25} />, label: '致电司机' },
              { icon: <Shield110 size={25} />, label: '110报警' },
              { icon: <XSquare size={25} />, label: '取消订单', onClick: () => nav('/cancelled') },
              { icon: <ShareArrow size={25} />, label: '行程分享' },
              { icon: <MoreDots size={25} />, label: '' },
            ].map((a) => (
              <button
                key={a.label || 'more'}
                className="flex-1 flex flex-col items-center gap-[7px] press"
                onClick={a.onClick}
              >
                {a.icon}
                <span className="text-[12.5px] text-[#1c2338] leading-none">{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
