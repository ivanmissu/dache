import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FakeMap, { HOME_LABELS } from '../components/FakeMap.jsx'
import MapArea from '../components/MapArea.jsx'
import {
  LogoCar,
  CarTop,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  ShieldPlus,
  PinTeardrop,
  CheckSquare,
  CarGlyph,
  InfoDot,
} from '../components/Icons.jsx'

const EXTRA_ROWS = [
  {
    id: 'c1',
    badge: 'waipai',
    title: '福利极速拼车·拼车',
    line1: { prefix: '未拼成', amount: '13元', tail: '拼成' },
    line2: '拼成省 1 元',
  },
  {
    id: 'c2',
    badge: 'greenC',
    title: '福利特惠·经济',
    line1: { prefix: '一口价', amount: '12.46', unit: '元' },
    line2: '已优惠 1.54 元',
    hot: true,
  },
  {
    id: 'c3',
    badge: 'waipai',
    title: '福利特惠外接版·经济',
    line1: { prefix: '一口价', amount: '13.20', unit: '元' },
  },
  {
    id: 'c4',
    badge: 'waipai',
    title: '福利快车外接版·经济',
    tag: '接驾快',
    line1: { prefix: '预计', amount: '13.3', unit: '元' },
  },
]

export default function Calling() {
  const nav = useNavigate()
  const [checked, setChecked] = useState({ c1: false, c2: true, c3: true, c4: true, all: false })
  const toggle = (id) => setChecked((c) => ({ ...c, [id]: !c[id] }))

  return (
    <div
      className="flex flex-col h-full"
      style={{ background: 'linear-gradient(180deg,#FBE6D8 0%,#FDF3EC 26%,#FDF6F2 100%)' }}
    >
      <div className="page-scroll">
        {/* ---------------- map ---------------- */}
        <MapArea height={300}>
          <FakeMap theme="home" labels={HOME_LABELS}>
            {/* cars */}
            <div className="absolute left-[132px] top-[82px]"><CarTop size={30} rotate={182} /></div>
            <div className="absolute left-[262px] top-[80px]"><CarTop size={30} rotate={178} /></div>
            <div className="absolute left-[26px] top-[176px]"><CarTop size={30} rotate={175} /></div>
            <div className="absolute left-[262px] top-[228px]"><CarTop size={30} rotate={178} /></div>
            <div className="absolute left-[66px] top-[236px]"><CarTop size={30} rotate={265} /></div>
            <div className="absolute left-[166px] top-[262px]"><CarTop size={30} rotate={268} /></div>

            {/* pulse rings */}
            <div className="absolute left-[148px] top-[172px] w-[92px] h-[92px] rounded-full" style={{ background: 'rgba(250,104,5,0.10)' }} />
            <div className="absolute left-[162px] top-[186px] w-[64px] h-[64px] rounded-full" style={{ background: 'rgba(250,104,5,0.14)' }} />
            {/* searching dot */}
            <div className="absolute left-[181px] top-[205px] w-[26px] h-[26px] rounded-full bg-[#FA6805] border-[4px] border-white shadow-[0_2px_8px_rgba(250,104,5,0.5)]" />

            {/* dotted connector */}
            <svg className="absolute left-0 top-0 w-[393px] h-[300px]" viewBox="0 0 393 300" fill="none">
              <path
                d="M194 172 V196"
                stroke="#FA6805"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeDasharray="0.5 7"
              />
            </svg>

            {/* searching pin */}
            <div className="absolute left-[180px] top-[138px]">
              <PinTeardrop size={28} color="#FA5A00" />
            </div>

            {/* bubbles */}
            <div className="absolute left-[172px] top-[126px]">
              <div className="relative inline-block">
                <div
                  className="rounded-[12px] px-[15px] py-[10px] text-white text-[14.5px] font-bold leading-none whitespace-nowrap"
                  style={{ background: '#FA6805' }}
                >
                  正在为您寻找附近司机...
                </div>
                <div className="absolute left-[18px] bottom-[-5px] w-[13px] h-[13px] rounded-[2px] rotate-45 bg-[#FA6805]" />
              </div>
              <div className="mt-[9px] ml-[28px] bg-white rounded-[9px] px-[13px] py-[8px] text-[13px] text-[#8B94A5] leading-none shadow-[0_3px_12px_rgba(30,40,60,0.1)] inline-block">
                预计1-3分钟内接单
              </div>
            </div>
          </FakeMap>

          {/* logo */}
          <div className="absolute left-[14px] top-[40px] flex items-center gap-[10px]">
            <LogoCar size={40} radius={11} />
            <div className="leading-none">
              <div className="text-[19px] font-bold text-[#FB5A00] leading-none">福利打车</div>
              <div className="text-[9.5px] text-[#FF8A4B] tracking-[4px] mt-[5px]">出行有福利</div>
            </div>
          </div>

          {/* back */}
          <button
            className="absolute left-[14px] top-[98px] w-[38px] h-[38px] rounded-[13px] bg-white flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.1)]"
            onClick={() => nav('/cars')}
          >
            <ChevronLeft size={20} />
          </button>

          {/* right buttons */}
          <div className="absolute right-[12px] top-[188px] flex flex-col gap-[12px]">
            <button className="w-[38px] h-[38px] rounded-[13px] bg-white flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.1)]">
              <Crosshair size={22} />
            </button>
            <button className="w-[38px] h-[38px] rounded-[13px] bg-white flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.1)]">
              <ShieldPlus size={22} />
            </button>
          </div>
        </MapArea>

        {/* ---------------- sheet ---------------- */}
        <div className="px-[18px] pt-[18px] pb-[14px]">
          {/* title */}
          <div className="flex items-start justify-between">
            <div className="text-[24px] font-bold text-[#F9571F] leading-[1.3]">
              正在全力呼叫司机
              <br />
              请稍候片刻
            </div>
            <button
              className="rounded-[10px] px-[17px] py-[9px] text-[15px] leading-none press shrink-0 mt-[4px]"
              style={{ background: '#FAE0D1', color: '#8B6D5B' }}
              onClick={() => nav('/cancelled')}
            >
              取消
            </button>
          </div>

          <button className="mt-[8px] flex items-center gap-[4px] text-[14.5px] leading-none text-[#8B94A5] press">
            已选择1个车型，预计<span className="text-[#F9571F] font-semibold">15.98元</span>
            <ChevronRight size={13} color="#B7BDC9" />
          </button>

          {/* extra cars card */}
          <div className="mt-[14px] bg-white rounded-[16px] px-[11px] pt-[15px] pb-[7px] shadow-[0_6px_22px_rgba(120,80,40,0.06)]">
            {/* 标题行和下面各行同样留 10px 行内边距：标题与车型图标左对齐，「全选」方框与各行方框右对齐 */}
            <div className="flex items-center justify-between px-[10px]">
              <span className="text-[19px] font-bold text-[#F9571F] leading-none">追加车型 更快应答</span>
              <div className="flex items-center gap-[10px]">
                <span className="text-[15px] text-[#8B94A5] leading-none">全选</span>
                <button className="press" onClick={() => toggle('all')}>
                  <CheckSquare size={24} checked={!!checked.all} />
                </button>
              </div>
            </div>

            <div className="mt-[6px]">
              {EXTRA_ROWS.map((r) => (
                <div
                  key={r.id}
                  className="rounded-[11px] px-[10px] py-[9px] flex items-center gap-[8px]"
                  style={{ background: r.hot ? '#FDF0EA' : 'transparent' }}
                >
                  <Badge kind={r.badge} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[6px]">
                      <span className="text-[13px] font-bold text-[#1c2338] leading-[1.3] whitespace-nowrap truncate">
                        {r.title}
                      </span>
                      {r.tag && (
                        <span
                          className="text-[9.5px] font-semibold leading-none rounded-[4px] px-[4px] py-[3px] shrink-0 whitespace-nowrap"
                          style={{ color: '#F9571F', background: '#FDE8D8' }}
                        >
                          ⚡{r.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    {/* 大小字号按基线对齐，小图标单独垂直居中 */}
                    <div className="flex items-baseline justify-end gap-[3px] whitespace-nowrap leading-none">
                      <span className="self-center"><InfoDot size={12} /></span>
                      <span className="text-[10.5px] text-[#8B94A5]">{r.line1.prefix}</span>
                      <span className="text-[17px] font-bold text-[#16203A] leading-none">{r.line1.amount}</span>
                      {r.line1.unit && <span className="text-[10.5px] text-[#5B6474]">{r.line1.unit}</span>}
                      {r.line1.tail && <span className="text-[10.5px] text-[#8B94A5]">{r.line1.tail}</span>}
                    </div>
                    {r.line2 && (
                      <div className="text-[11px] text-[#F9571F] font-semibold leading-none mt-[5px] whitespace-nowrap">{r.line2}</div>
                    )}
                  </div>
                  <button className="shrink-0 press" onClick={() => toggle(r.id)}>
                    <CheckSquare size={24} checked={!!checked[r.id]} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- bottom bar ---------------- */}
      <div className="shrink-0 px-[18px] pt-[12px] pb-[calc(14px+var(--sab))] flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-[3px]">
            <span className="text-[15px] font-bold text-[#1c2338]">预计</span>
            <span className="text-[25px] font-bold text-[#F9571F] leading-none tracking-tight">12.46~18.9</span>
            <span className="text-[15px] font-bold text-[#1c2338]">元起</span>
          </div>
          <div className="text-[13px] text-[#9AA1B1] mt-[5px]">共17个车型</div>
        </div>
        <button
          className="rounded-[13px] px-[30px] py-[15px] text-white text-[17px] font-bold leading-none whitespace-nowrap press shrink-0 shadow-[0_10px_22px_rgba(252,82,1,0.32)]"
          style={{ background: 'linear-gradient(135deg,#FF7A18,#FC5201)' }}
          onClick={() => nav('/arriving')}
        >
          追加车型
        </button>
      </div>
    </div>
  )
}

function Badge({ kind }) {
  if (kind === 'greenC') {
    return (
      <div className="w-[39px] h-[39px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(30,40,60,0.08)]">
        <span className="text-[21px] font-black text-[#12B76A] leading-none" style={{ fontFamily: 'Georgia, serif' }}>
          C
        </span>
      </div>
    )
  }
  return (
    <div className="w-[39px] h-[39px] rounded-full bg-white flex flex-col items-center justify-center gap-[1px] shrink-0 shadow-[0_2px_8px_rgba(30,40,60,0.08)]">
      <CarGlyph size={17} color="#FA6805" />
      <span className="text-[7.5px] text-[#FA6805] leading-none">外接版</span>
    </div>
  )
}
