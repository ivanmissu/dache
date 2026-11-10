import { useNavigate } from 'react-router-dom'
import FakeMap, { HOME_LABELS } from '../components/FakeMap.jsx'
import BottomNav from '../components/BottomNav.jsx'
import PromoBanner from '../components/PromoBanner.jsx'
import {
  LogoCar,
  CarTop,
  ChevronRight,
  ChevronDown,
  Crosshair,
  ShieldPlus,
  PinTeardrop,
  CouponIcon,
} from '../components/Icons.jsx'

const COUPONS = [
  { value: 5, min: '无门槛', title: '打车立减5元券', validity: '有效期7天', price: '1.9' },
  { value: 10, min: '满20元可用', title: '打车立减10元券', validity: '有效期30天', price: '3.9' },
  { value: 20, min: '满40元可用', title: '打车立减20元券', validity: '有效期30天', price: '6.9' },
]

export default function Home() {
  const nav = useNavigate()
  return (
    <div className="flex flex-col h-full bg-[#F5F6F8]">
      <div className="page-scroll flex flex-col">
        {/* ---------------- map ---------------- */}
        <div className="relative h-[352px] shrink-0">
          <FakeMap theme="home" labels={HOME_LABELS}>
            {/* scattered cars */}
            <div className="absolute left-[128px] top-[224px]"><CarTop size={34} rotate={82} /></div>
            <div className="absolute left-[232px] top-[78px]"><CarTop size={34} rotate={4} /></div>
            <div className="absolute left-[24px] top-[168px]"><CarTop size={34} rotate={175} /></div>
            <div className="absolute left-[52px] top-[232px]"><CarTop size={34} rotate={272} /></div>
            <div className="absolute left-[228px] top-[196px]"><CarTop size={34} rotate={188} /></div>
            <div className="absolute left-[136px] top-[252px]"><CarTop size={34} rotate={268} /></div>

            {/* destination pin bubble */}
            <div className="absolute left-[172px] top-[112px]">
              <div className="relative">
                <button
                  className="flex items-center gap-[6px] rounded-full pl-[18px] pr-[14px] py-[10px] press"
                  style={{ background: 'linear-gradient(90deg,#FF7A22,#FA5E00)' }}
                  onClick={() => nav('/cars')}
                >
                  <span className="text-white text-[16px] font-semibold leading-none">北京朝阳大悦城</span>
                  <ChevronRight size={15} color="#fff" width={2.6} />
                </button>
                <div
                  className="absolute w-[14px] h-[14px] rotate-45"
                  style={{ background: '#FA5E00', left: 30, bottom: -5, borderRadius: 3 }}
                />
              </div>
              <div className="mt-[10px] ml-[46px] text-[13px] text-[#5B6474] whitespace-nowrap">
                距您 2.3 公里 约 6 分钟
              </div>
            </div>
            <div className="absolute left-[157px] top-[158px]">
              <PinTeardrop size={26} />
            </div>

            {/* user location */}
            <div className="absolute left-[122px] top-[178px] w-[54px] h-[54px] rounded-full bg-[#BBD3F5]/35 flex items-center justify-center">
              <div className="w-[18px] h-[18px] rounded-full bg-[#2F7BFF] border-[3px] border-white" />
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

          {/* city pill */}
          <button className="absolute left-[14px] top-[102px] bg-white rounded-full px-[16px] py-[8px] flex items-center gap-[8px] press shadow-[0_2px_10px_rgba(30,40,60,0.08)]">
            <span className="text-[15px] font-semibold text-[#1c2338] leading-none">北京市</span>
            <ChevronDown size={12} width={3} />
          </button>

          {/* floating buttons */}
          <div className="absolute right-[14px] top-[168px] flex flex-col gap-[14px]">
            <button className="w-[52px] h-[52px] bg-white rounded-[16px] flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.08)]">
              <Crosshair size={26} />
            </button>
            <button className="w-[52px] h-[52px] bg-white rounded-[16px] flex items-center justify-center press shadow-[0_2px_10px_rgba(30,40,60,0.08)]">
              <ShieldPlus size={26} />
            </button>
          </div>

          {/* promo banner */}
          <div className="absolute left-[12px] right-[12px] bottom-0">
            <PromoBanner />
          </div>
        </div>

        {/* ---------------- search card ---------------- */}
        <div className="px-[12px] mt-[12px]">
          <div className="bg-white rounded-[18px] px-[16px] pt-[4px] pb-[12px] shadow-[0_4px_18px_rgba(30,40,60,0.05)]">
            <button className="w-full flex items-center gap-[13px] py-[11px] press" onClick={() => nav('/pickup')}>
              <span className="w-[26px] h-[26px] rounded-full bg-[#D6F2E3] flex items-center justify-center shrink-0">
                <span className="w-[10px] h-[10px] rounded-full bg-[#22C55E]" />
              </span>
              <span className="flex-1 text-left">
                <span className="block text-[17px] font-semibold text-[#1c2338] leading-tight">我的位置</span>
                <span className="block text-[13px] text-[#9AA1B1] leading-tight mt-[3px]">北京市朝阳区朝阳路</span>
              </span>
              <ChevronRight size={17} color="#B7BDC9" />
            </button>
            <button
              className="w-full flex items-center gap-[13px] rounded-[14px] bg-[#F2F2F6] px-[14px] py-[13px] press"
              onClick={() => nav('/dropoff')}
            >
              <span className="w-[26px] h-[26px] rounded-full bg-[#FDE3D2] flex items-center justify-center shrink-0">
                <span className="w-[10px] h-[10px] rounded-full bg-[#FC5201]" />
              </span>
              <span className="text-[19px] font-semibold text-[#1c2338]">你要去哪儿?</span>
            </button>
          </div>
        </div>

        {/* ---------------- coupons ---------------- */}
        <div className="px-[12px] mt-[12px] pb-[12px]">
          <div className="bg-white rounded-[18px] px-[16px] pt-[14px] pb-[14px] shadow-[0_4px_18px_rgba(30,40,60,0.05)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <span className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#FF8422,#FC4F00)' }}>
                  <CouponIcon size={18} />
                </span>
                <span className="text-[17px] font-bold text-[#FC5300] leading-none">优惠券专区</span>
              </div>
              <button className="flex items-center gap-[3px] text-[13px] text-[#9AA1B1] press">
                更多优惠
                <ChevronRight size={13} color="#B7BDC9" />
              </button>
            </div>

            <div className="mt-[10px] flex flex-col gap-[9px]">
              {COUPONS.map((c) => (
                <CouponRow key={c.value} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

function CouponRow({ value, min, title, validity, price }) {
  return (
    <div className="relative flex items-stretch rounded-[13px] overflow-visible" style={{ background: '#FCF4F1' }}>
      {/* value block with perforation */}
      <div
        className="relative w-[102px] shrink-0 rounded-[13px] flex flex-col items-center justify-center py-[8px]"
        style={{ background: 'linear-gradient(180deg,#FDECE4,#FBDCCB)' }}
      >
        <div className="flex items-start text-[#F75400] leading-none">
          <span className="text-[14px] font-bold mt-[3px]">¥</span>
          <span className="text-[28px] font-bold leading-none tracking-tight">{value}</span>
        </div>
        <div className="text-[11px] text-[#F75400] mt-[2px] whitespace-nowrap">{min}</div>
        <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full" style={{ background: '#fff' }} />
        <span className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full" style={{ background: '#fff' }} />
      </div>
      {/* body */}
      <div className="flex-1 min-w-0 flex items-center justify-between pl-[13px] pr-[8px] py-[8px]">
        <div className="min-w-0">
          <div className="text-[15px] font-bold text-[#101A38] leading-none whitespace-nowrap">{title}</div>
          <div className="flex items-center gap-[7px] mt-[7px] whitespace-nowrap">
            <span className="text-[10.5px] text-[#F0432C] bg-[#FDE8E3] rounded-[5px] px-[5px] py-[3px] leading-none">全国通用</span>
            <span className="text-[11.5px] text-[#9AA1B1] leading-none">{validity}</span>
          </div>
        </div>
        <button
          className="rounded-full px-[13px] py-[9px] text-white text-[13.5px] font-semibold leading-none whitespace-nowrap press shrink-0 ml-[8px]"
          style={{ background: 'linear-gradient(135deg,#FF8422,#FC4F00)', boxShadow: '0 8px 16px rgba(252,79,0,0.28)' }}
        >
          ¥{price} 购买
        </button>
      </div>
    </div>
  )
}
