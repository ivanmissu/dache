import { useLocation, useNavigate } from 'react-router-dom'
import { HomeMapIcon, OrderIcon, UserIcon } from './Icons.jsx'

const TABS = [
  { key: '/', label: '首页', Icon: HomeMapIcon },
  { key: '/orders', label: '订单', Icon: OrderIcon },
  { key: '/profile', label: '我的', Icon: UserIcon },
]

export default function BottomNav() {
  const { pathname } = useLocation()
  const nav = useNavigate()
  return (
    <div className="shrink-0 bg-white border-t border-[#F0F1F4] pt-[8px] pb-[calc(7px+var(--sab))] flex">
      {TABS.map(({ key, label, Icon }) => {
        const active = pathname === key
        return (
          <button
            key={key}
            className="flex-1 flex flex-col items-center gap-[3px] press"
            onClick={() => nav(key)}
          >
            <Icon size={25} color={active ? '#FD5401' : '#7B7F8F'} filled={active} />
            <span
              className="text-[11px] leading-none"
              style={{ color: active ? '#FD5401' : '#7B7F8F', fontWeight: active ? 600 : 400 }}
            >
              {label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
