import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav.jsx'
import { ChevronLeft, ChevronRight, SendIcon, Crosshair, CarGlyph, PinSolid } from '../components/Icons.jsx'

const TABS = ['全部订单', '待支付', '可使用', '待评价']

const ORDERS = [
  {
    id: 'o1',
    type: '打车订单',
    icon: 'car',
    status: '已取消',
    from: '德辰国际-西门-对面',
    to: '北京朝来淘宝园市场',
    price: '26.80',
    timeLabel: '下单时间：',
    time: '2026年11月3日 15:05',
    actions: ['一键返程', '再来一单'],
  },
  {
    id: 'o2',
    type: '打车订单',
    icon: 'car',
    status: '已取消',
    from: '德辰国际-西门-对面',
    to: '北京朝来淘宝园市场',
    price: '24.60',
    timeLabel: '下单时间：',
    time: '2026年11月3日 15:04',
    actions: ['一键返程', '再来一单'],
  },
  {
    id: 'o3',
    type: '顺风车订单',
    icon: 'hitch',
    status: '已取消',
    from: '深圳宝安西乡亚朵酒店',
    to: '保利天汇4期',
    price: '117.28',
    timeLabel: '出发时间：',
    time: '2026年10月23日 16:15',
    actions: ['再来一单'],
  },
  {
    id: 'o4',
    type: '顺风车订单',
    icon: 'hitch',
    status: '已取消',
    from: '深圳宝安西乡亚朵酒店',
    to: '保利天汇4期',
    price: '75.27',
    timeLabel: '出发时间：',
    time: '2026年10月23日 15:40',
    actions: ['再来一单'],
  },
]

export default function Orders() {
  const nav = useNavigate()
  const [tab, setTab] = useState('全部订单')

  return (
    <div className="flex flex-col h-full" style={{ background: 'linear-gradient(180deg,#FDEFE7 0%,#FDF6F2 30%,#F5F6F8 55%)' }}>
      {/* header */}
      <div className="relative shrink-0 pt-[48px] pb-[8px] flex items-center justify-center">
        <button className="absolute left-[14px] top-[46px] p-[6px] press" onClick={() => nav('/')}>
          <ChevronLeft size={23} />
        </button>
        <span className="text-[18px] font-bold text-[#1c2338]">我的订单</span>
        <div className="absolute right-[14px] top-[46px] flex items-center bg-white rounded-full pl-[13px] pr-[13px] py-[9px] shadow-[0_2px_10px_rgba(30,40,60,0.06)]">
          <SendIcon size={19} />
          <span className="w-px h-[17px] bg-[#E8EAEF] mx-[11px]" />
          <Crosshair size={19} />
        </div>
      </div>

      {/* tabs */}
      <div className="shrink-0 flex items-center px-[20px] gap-[30px] pt-[8px]">
        {TABS.map((t) => (
          <button key={t} className="relative pb-[12px] press" onClick={() => setTab(t)}>
            <span
              className="text-[17px] leading-none"
              style={{ color: t === tab ? '#F9571F' : '#8B94A5', fontWeight: t === tab ? 700 : 500 }}
            >
              {t}
            </span>
            {t === tab && (
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[4px] w-[28px] h-[3px] rounded-full bg-[#F9571F]" />
            )}
          </button>
        ))}
      </div>

      {/* list */}
      <div className="page-scroll px-[14px] pt-[12px] pb-[12px]">
        {ORDERS.map((o) => (
          <div key={o.id} className="bg-white rounded-[16px] px-[18px] pt-[16px] pb-[16px] mb-[13px] shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
            {/* head */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[9px]">
                <span
                  className="w-[32px] h-[32px] rounded-[10px] flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#FF8422,#FC4F00)' }}
                >
                  {o.icon === 'car' ? <CarGlyph size={20} color="#fff" /> : <HitchGlyph />}
                </span>
                <span className="text-[16px] font-bold text-[#F9571F] leading-none">{o.type}</span>
              </div>
              <span className="text-[12.5px] text-[#9AA1B1]">{o.status}</span>
            </div>

            <div className="mt-[11px] h-px bg-[#F0F1F3]" />

            {/* route + price */}
            <div className="mt-[12px] flex items-start justify-between">
              <div className="flex-1 min-w-0 flex flex-col gap-[11px]">
                <div className="flex items-center gap-[9px]">
                  <span className="w-[9px] h-[9px] rounded-full bg-[#12B76A] shrink-0" />
                  <span className="text-[14.5px] text-[#1c2338] truncate">{o.from}</span>
                </div>
                <div className="flex items-center gap-[9px]">
                  <span className="w-[9px] h-[9px] rounded-full bg-[#F9571F] shrink-0" />
                  <span className="text-[14.5px] text-[#1c2338] truncate">{o.to}</span>
                </div>
              </div>
              <div className="flex items-baseline gap-[2px] ml-[12px] shrink-0">
                <span className="text-[13px] text-[#8B94A5]">¥</span>
                <span className="text-[21px] font-bold text-[#16203A] leading-none">{o.price}</span>
              </div>
            </div>

            {/* footer */}
            <div className="mt-[13px] flex items-center justify-between gap-[8px]">
              <span className="text-[12px] text-[#9AA1B1] whitespace-nowrap">
                {o.timeLabel}
                {o.time}
              </span>
              <div className="flex items-stretch rounded-[9px] overflow-hidden shrink-0" style={{ background: '#FDECE2' }}>
                {o.actions.map((a, i) => (
                  <button
                    key={a}
                    className="text-[12.5px] font-medium text-[#F9571F] px-[11px] py-[8px] leading-none whitespace-nowrap press"
                    onClick={() => (a === '再来一单' ? nav('/cars') : null)}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}

function HitchGlyph() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 16.5c0-.8.4-1.5 1.1-1.9l1.4-.8 1-2.5c.3-.8 1.1-1.3 2-1.3h3c.9 0 1.7.5 2 1.3l1 2.5 1.4.8c.7.4 1.1 1.1 1.1 1.9v2c0 .4-.3.8-.8.8h-.5c-.4 0-.8-.3-.8-.8v-.5H8.1v.5c0 .4-.3.8-.8.8h-.5c-.4 0-.8-.3-.8-.8v-2Z"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="m4 6.5 3.4 1.6M3 10.2l2.6 1.2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
