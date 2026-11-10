import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FakeMap, { HOME_LABELS } from '../components/FakeMap.jsx'
import MapArea from '../components/MapArea.jsx'
import { rem } from '../lib/rem.js'
import PromoBanner from '../components/PromoBanner.jsx'
import {
  ChevronLeft,
  ChevronRight,
  Crosshair,
  ShieldPlus,
  PlusIcon,
  PinTeardrop,
  CarTop,
  CheckSquare,
  CarGlyph,
} from '../components/Icons.jsx'

const SIMPLE_ROWS = [
  {
    id: 's1',
    tab: '经济',
    img: 'assets/car-economy.webp',
    title: '福利特价快车',
    tags: [
      { text: '价格实惠', style: 'red' },
      { text: '接单快', style: 'blue' },
    ],
    price: { prefix: '一口价', int: '8', dec: '50' },
    discount: '已优惠 2.5 元',
  },
  {
    id: 's2',
    tab: '舒适',
    img: 'assets/car-comfort.webp',
    title: '福利极速快车',
    desc: '更快接单 更快出发',
    price: { prefix: '一口价', int: '11', dec: '20' },
    discount: '已优惠 1.0 元',
  },
  {
    id: 's3',
    tab: '商务',
    img: 'assets/car-suv.webp',
    title: '福利舒适专车',
    tags: [
      { text: '宽敞舒适', style: 'red' },
      { text: '服务更好', style: 'blue' },
    ],
    price: { prefix: '一口价', int: '16', dec: '80' },
    discount: '已优惠 3.0 元',
  },
  {
    id: 's4',
    tab: '豪华',
    img: 'assets/car-business.webp',
    title: '福利商务专车',
    tags: [
      { text: '高端车型', style: 'red' },
      { text: '品质出行', style: 'blue' },
    ],
    price: { prefix: '一口价', int: '28', dec: '50' },
    discount: '已优惠 5.0 元',
  },
]

const MULTI_ROWS = [
  {
    id: 'm1',
    tab: '经济',
    title: '福利特价快车',
    desc: '超时无拼友立减',
    price: { prefix: '一口价', int: '8', dec: '50' },
  },
  {
    id: 'm2',
    tab: '舒适',
    title: '福利极速快车',
    desc: '附近车辆 领券立减',
    price: { prefix: '预计', int: '12', dec: '00' },
    discount: '已优惠 2 元',
  },
  {
    id: 'm3',
    tab: '商务',
    title: '福利拼车',
    desc: '拼车出行 更省钱',
    price: { prefix: '一口价', int: '11', dec: '20' },
  },
  {
    id: 'm4',
    tab: '豪华',
    title: '福利舒适型',
    desc: '宽敞舒适 品质出行',
    price: { prefix: '预计', int: '16', dec: '80' },
    discount: '已优惠 3 元',
  },
]

const SIMPLE_TABS = [
  { name: '经济', badge: 4 },
  { name: '舒适' },
  { name: '商务' },
  { name: '豪华' },
]

const MULTI_TABS = [
  { name: '经济', badge: 4 },
  { name: '舒适', badge: 2 },
  { name: '商务', badge: 1 },
  { name: '豪华', badge: 1 },
]

export default function CarSelect() {
  const nav = useNavigate()
  const [mode, setMode] = useState('simple') // 'simple' | 'multi'
  const [activeTab, setActiveTab] = useState('经济')
  const [checked, setChecked] = useState({ s1: true, m1: true, m2: true, m3: true, m4: true })
  const multi = mode === 'multi'
  const rows = multi ? MULTI_ROWS : SIMPLE_ROWS
  const tabs = multi ? MULTI_TABS : SIMPLE_TABS

  const toggle = (id) => setChecked((c) => ({ ...c, [id]: !c[id] }))

  return (
    // 页面底色跟列表面板一致：屏幕比内容高时，面板下面不会露出另一种颜色
    <div className="flex flex-col h-full" style={{ background: multi ? '#FDF6F1' : '#fff' }}>
      <div className="page-scroll">
        {/* ---------------- map + banner ---------------- */}
        <MapArea height={330} className="z-10">
          <div className="absolute inset-0 overflow-hidden">
            <FakeMap theme="cool" labels={HOME_LABELS}>
              {/* scattered cars */}
              <div className="absolute left-[52px] top-[86px]"><CarTop size={30} rotate={175} /></div>
              <div className="absolute left-[128px] top-[100px]"><CarTop size={30} rotate={188} /></div>
              <div className="absolute left-[262px] top-[80px]"><CarTop size={30} rotate={175} /></div>
              <div className="absolute left-[262px] top-[228px]"><CarTop size={30} rotate={182} /></div>
              <div className="absolute left-[166px] top-[272px]"><CarTop size={30} rotate={265} /></div>

              {/* route line：画布固定为设计稿尺寸并靠左上角，1 个单位 = 1 设计 px，和下面图钉的定位坐标一一对应 */}
              <svg className="absolute left-0 top-0 w-[393px] h-[352px]" viewBox="0 0 393 352" fill="none">
                {/* 起点 (104,262) = 上车图钉尖 / 蓝点圆心，终点 (267,196) = 目的地图钉尖 */}
                <path
                  d="M104 262 H163 V196 H267"
                  stroke="#FA6805"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="m126 257 6 5-6 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                <path d="m158 216 5 6 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                <path d="m212 191 6 5-6 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
              </svg>

              {/* destination card + pin */}
              {/* 卡片在图钉正上方，卡片底边与图钉顶之间留 4px，互不遮挡 */}
              <button
                className="absolute left-[216px] top-[102px] bg-white rounded-[12px] pl-[13px] pr-[9px] py-[10px] flex items-center gap-[6px] press shadow-[0_4px_16px_rgba(30,40,60,0.12)]"
                onClick={() => nav('/dropoff')}
              >
                <span>
                  <span className="block text-[14.5px] font-bold text-[#1c2338] leading-none text-left whitespace-nowrap">北京朝阳大悦城</span>
                  <span className="block text-[12px] text-[#8B94A5] leading-none mt-[6px] text-left whitespace-nowrap">
                    预计<span className="text-[#F9571F] font-semibold">15:16</span>到达
                  </span>
                </span>
                <ChevronRight size={14} color="#8B94A5" />
              </button>
              {/* 图钉宽 30、尖端在顶部下方 36 处 → 尖端落在路线终点 (267,196) */}
              <div className="absolute left-[252px] top-[160px]">
                <PinTeardrop size={30} color={multi ? '#E8342A' : '#FA5A00'} />
              </div>

              {/* route bubble */}
              <div
                className="absolute left-[174px] top-[207px] rounded-full px-[12px] py-[7px] text-white text-[12.5px] font-semibold leading-none whitespace-nowrap"
                style={{ background: '#FA6805' }}
              >
                {multi ? '路线2.3公里 约6分钟' : '全程2.3公里 约6分钟'}
              </div>

              {/* pickup card + markers */}
              {/* 卡片右边缘 (≈157) 在路线竖段 (x=163) 左侧，不压线；底边在图钉顶上方 */}
              <button
                className="absolute left-[8px] top-[170px] bg-white rounded-[12px] pl-[13px] pr-[9px] py-[10px] flex items-center gap-[6px] press shadow-[0_4px_16px_rgba(30,40,60,0.12)]"
                onClick={() => nav('/pickup')}
              >
                <span>
                  <span className="block text-[14.5px] font-bold text-[#1c2338] leading-none text-left whitespace-nowrap">我的位置</span>
                  <span className="block text-[12px] text-[#8B94A5] leading-none mt-[6px] text-left whitespace-nowrap">北京市朝阳区朝阳路</span>
                </span>
                <ChevronRight size={14} color="#8B94A5" />
              </button>
              {/* 定位蓝点：圆心在路线起点 (104,262) */}
              <div className="absolute left-[84px] top-[242px] w-[40px] h-[40px] rounded-full bg-[#BBD3F5]/35 flex items-center justify-center">
                <div className="w-[16px] h-[16px] rounded-full bg-[#2F7BFF] border-[3px] border-white" />
              </div>
              {/* 图钉宽 26、尖端在顶部下方 31 处 → 尖端落在路线起点 (104,262) */}
              <div className="absolute left-[91px] top-[231px]">
                <PinTeardrop size={26} color={multi ? '#1FC46A' : '#FA5A00'} />
              </div>
            </FakeMap>
          </div>

          {/* header controls */}
          <button
            className="absolute left-[12px] top-[42px] w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.1)]"
            onClick={() => nav('/dropoff')}
          >
            <ChevronLeft size={20} />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 top-[42px] h-[38px] bg-white rounded-full flex items-center px-[6px] shadow-[0_2px_10px_rgba(30,40,60,0.1)]">
            <span className="px-[16px] text-[16px] font-bold text-[#F9571F] leading-none">出发</span>
            <span className="flex items-center gap-[5px] px-[12px] text-[16px] font-semibold text-[#1c2338] leading-none">
              <svg width={rem(15)} height={rem(15)} viewBox="0 0 24 24" fill="none">
                <path d="M12 2.5c-4 0-7.2 3.1-7.2 7 0 4.4 4.3 8.6 7.2 12 2.9-3.4 7.2-7.6 7.2-12 0-3.9-3.2-7-7.2-7Z" stroke="#1c2338" strokeWidth="2" />
                <circle cx="12" cy="9.4" r="2.6" stroke="#1c2338" strokeWidth="2" />
              </svg>
              附近
            </span>
          </div>
          <button className="absolute right-[12px] top-[42px] w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.1)]">
            <Crosshair size={21} />
          </button>

          {/* right floating buttons */}
          <div className="absolute right-[12px] top-[186px] flex flex-col gap-[12px]">
            {multi ? (
              <>
                <MapButton><Crosshair size={22} /></MapButton>
                <MapButton><ShieldPlus size={22} /></MapButton>
              </>
            ) : (
              <>
                <MapButton><PlusIcon size={22} /></MapButton>
                <MapButton><Crosshair size={22} /></MapButton>
              </>
            )}
          </div>

          {/* promo banner */}
          <div className="absolute left-[12px] right-[12px] bottom-[-16px]">
            <PromoBanner />
          </div>
        </MapArea>

        {/* ---------------- list sheet ---------------- */}
        <div
          className="relative rounded-t-[20px] pt-[24px] pb-[10px]"
          style={{ background: multi ? '#FDF6F1' : '#fff' }}
        >
          {/* head row */}
          <div className="flex items-center justify-between px-[18px]">
            <div className="flex items-baseline gap-[3px]">
              <span className="text-[16px] font-bold text-[#1c2338]">预计</span>
              <span className="text-[22px] font-bold text-[#F9571F] leading-none">30</span>
              <span className="text-[16px] font-bold text-[#1c2338]">秒接单</span>
            </div>
            <div className="flex items-center gap-[8px] rounded-[11px] p-[3px]" style={{ background: '#EEF1F4' }}>
              {/* 两个按钮都带 1.5px 边框（未选中时透明），选中 / 未选中时尺寸一致，不会一高一低 */}
              <button
                className={`rounded-[9px] px-[13px] py-[7px] text-[14px] leading-none whitespace-nowrap border-[1.5px] border-transparent press ${
                  multi ? '' : 'shadow-[0_2px_8px_rgba(30,40,60,0.08)]'
                }`}
                style={multi ? { color: '#8B94A5' } : { background: '#fff', color: '#1c2338', fontWeight: 600 }}
                onClick={() => setMode('simple')}
              >
                智能勾选
              </button>
              <button
                className="rounded-[9px] px-[13px] py-[7px] text-[14px] leading-none whitespace-nowrap border-[1.5px] border-transparent press"
                style={
                  multi
                    ? { background: '#fff', color: '#F9571F', fontWeight: 600, borderColor: '#F9571F' }
                    : { color: '#8B94A5' }
                }
                onClick={() => setMode('multi')}
              >
                价格筛选
              </button>
            </div>
          </div>

          {/* price filter (multi only) */}
          {multi && <PriceSlider />}

          {/* rows with aligned left-rail tabs */}
          <div className="mt-[10px]">
            {rows.map((r, i) => {
              const t = tabs[i]
              const active = t.name === activeTab
              return (
                <div key={r.id} className="flex items-stretch mb-[6px] last:mb-0">
                  {/* tab cell */}
                  <button
                    className="w-[64px] shrink-0 flex flex-col items-center justify-center gap-[6px] press"
                    style={{
                      background: active ? (multi ? '#fff' : '#fff') : multi ? '#FBEDE4' : 'transparent',
                      borderRadius: active ? `${rem(14)} 0 0 ${rem(14)}` : 0,
                    }}
                    onClick={() => setActiveTab(t.name)}
                  >
                    <span
                      className="text-[15px] leading-none"
                      style={{
                        color: active ? (multi ? '#F9571F' : '#1c2338') : '#9AA1B1',
                        fontWeight: active ? 700 : 500,
                      }}
                    >
                      {t.name}
                    </span>
                    {t.badge !== undefined && (
                      <span
                        className="text-[11px] leading-none rounded-full px-[8px] py-[3px]"
                        style={
                          multi
                            ? {
                                background: active ? '#FDE4D3' : '#EFE7E1',
                                color: active ? '#F9571F' : '#A9A096',
                              }
                            : { background: '#FDE8DC', color: '#F96A1B' }
                        }
                      >
                        {t.badge}
                      </span>
                    )}
                  </button>
                  {/* row card */}
                  <div className="flex-1 min-w-0 pr-[12px]">
                    {multi ? (
                      <MultiRow r={r} checked={!!checked[r.id]} onToggle={() => toggle(r.id)} />
                    ) : (
                      <SimpleRow r={r} checked={!!checked[r.id]} onToggle={() => toggle(r.id)} />
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* notice (multi only) */}
          {multi && (
            <div className="mt-[10px] py-[9px] flex items-center justify-center gap-[8px]" style={{ background: '#FDEEE3' }}>
              <svg width={rem(20)} height={rem(20)} viewBox="0 0 24 24" fill="none">
                <path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4v-5Z" fill="#F9571F" />
                <path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.8a7.6 7.6 0 0 1 0 10.4" stroke="#F9571F" strokeWidth="1.9" strokeLinecap="round" />
              </svg>
              <span className="text-[13.5px] font-semibold text-[#F9571F]">预估价仅供参考，以实际乘车产生费用为准</span>
            </div>
          )}
        </div>
      </div>

      {/* ---------------- bottom bar ---------------- */}
      <div className="shrink-0 bg-white rounded-t-[20px] px-[18px] pt-[13px] pb-[calc(13px+var(--sab))] flex items-center justify-between shadow-[0_-6px_24px_rgba(30,40,60,0.06)]">
        <div>
          <div className="flex items-baseline gap-[3px] whitespace-nowrap">
            <span className="text-[15px] font-bold text-[#1c2338]">预计</span>
            <span className="text-[25px] font-bold text-[#16203A] leading-none tracking-tight">
              {multi ? '11.85~13.9' : '8.50~16.80'}
            </span>
            <span className="text-[15px] font-bold text-[#1c2338]">元起</span>
          </div>
          <div className="text-[12.5px] text-[#F9571F] mt-[5px]">
            最高优惠 {multi ? '2.15' : '3.0'} 元
          </div>
        </div>
        <button
          className="rounded-[13px] px-[22px] py-[15px] text-white text-[17px] font-bold leading-none whitespace-nowrap press shrink-0 shadow-[0_10px_22px_rgba(252,82,1,0.32)]"
          style={{ background: 'linear-gradient(135deg,#FF7A18,#FC5201)' }}
          onClick={() => nav('/calling')}
        >
          {multi ? '呼叫多种车型' : '呼叫福利打车'}
        </button>
      </div>
    </div>
  )
}

function MapButton({ children }) {
  return (
    <button className="w-[38px] h-[38px] rounded-[13px] bg-white flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.1)]">
      {children}
    </button>
  )
}

function PriceSlider() {
  return (
    <div className="px-[18px] mt-[10px] flex items-center">
      <div
        className="rounded-full px-[13px] py-[7px] text-[15px] font-bold text-[#F9571F] leading-none bg-white press"
        style={{ border: '1.6px solid #F9571F' }}
      >
        ¥12
      </div>
      <div className="h-[5px] w-[26px]" style={{ background: '#F9571F' }} />
      <div
        className="rounded-full px-[13px] py-[7px] text-[15px] font-bold text-[#F9571F] leading-none bg-white press"
        style={{ border: '1.6px solid #F9571F' }}
      >
        ¥14
      </div>
      <div className="flex-1 h-[4px] rounded-full bg-[#EAECF0] mx-[2px]" />
      <div className="rounded-full px-[12px] py-[7px] text-[15px] font-bold text-[#9AA1B1] leading-none bg-[#EAECF0]">
        ¥108
      </div>
    </div>
  )
}

function Price({ prefix, int, dec, discount, discountOrange }) {
  return (
    <div className="text-right shrink-0">
      <div className="flex items-baseline justify-end gap-[2px] whitespace-nowrap">
        <span className="text-[11.5px] text-[#8B94A5]">{prefix}</span>
        <span className="text-[20px] font-bold text-[#16203A] leading-none">{int}</span>
        <span className="text-[14px] font-bold text-[#16203A] leading-none">.{dec}</span>
        <span className="text-[11.5px] text-[#5B6474]">元</span>
      </div>
      {discount && (
        <div
          className="text-[11px] mt-[4px] leading-none whitespace-nowrap"
          style={{ color: discountOrange ? '#F9571F' : '#9AA1B1', fontWeight: discountOrange ? 600 : 400 }}
        >
          {discount}
        </div>
      )}
    </div>
  )
}

function SimpleRow({ r, checked, onToggle }) {
  return (
    <div className="bg-white rounded-[13px] pl-[6px] pr-[8px] py-[8px] flex items-center gap-[5px] shadow-[0_3px_14px_rgba(30,40,60,0.05)]">
      {/* 缩略图是 124×68 的 WebP（每张约 1.3KB）；写明宽高，图片没到之前也先占好位置；列表长，屏外的行用 lazy 延迟加载 */}
      <img src={r.img} alt="" width="124" height="68" loading="lazy" decoding="async" className="w-[62px] h-[42px] object-contain shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="text-[13.5px] font-bold text-[#1c2338] leading-none whitespace-nowrap truncate">{r.title}</div>
        {r.tags ? (
          <div className="flex items-center gap-[4px] mt-[7px]">
            {r.tags.map((t) => (
              <span
                key={t.text}
                className="text-[9.5px] leading-none rounded-[4px] px-[4px] py-[3.5px] whitespace-nowrap"
                style={
                  t.style === 'red'
                    ? { color: '#F0432C', background: '#FDE8E4' }
                    : { color: '#6B7A99', background: '#EDF1F7' }
                }
              >
                {t.text}
              </span>
            ))}
          </div>
        ) : (
          <div className="text-[11px] text-[#98A1B2] leading-none mt-[7px] whitespace-nowrap truncate">{r.desc}</div>
        )}
      </div>
      <Price {...r.price} discount={r.discount} />
      <button className="shrink-0 press" onClick={onToggle}>
        <CheckSquare size={23} checked={checked} />
      </button>
    </div>
  )
}

function MultiRow({ r, checked, onToggle }) {
  return (
    <div className="rounded-[13px] pl-[8px] pr-[8px] py-[8px] flex items-center gap-[7px]" style={{ background: '#FDF0EA' }}>
      <span className="w-[30px] h-[30px] rounded-[9px] bg-white flex items-center justify-center shrink-0">
        <CarGlyph size={19} color="#FA6805" />
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[13.5px] font-bold text-[#1c2338] leading-none whitespace-nowrap truncate">{r.title}</div>
        <div className="text-[11px] text-[#98A1B2] leading-none mt-[6px] whitespace-nowrap truncate">{r.desc}</div>
      </div>
      <Price {...r.price} discount={r.discount} discountOrange />
      <button className="shrink-0 press" onClick={onToggle}>
        <CheckSquare size={22} checked={checked} />
      </button>
    </div>
  )
}
