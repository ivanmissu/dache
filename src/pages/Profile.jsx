import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav.jsx'
import {
  AvatarPlaceholder,
  ChevronRight,
  GearIcon,
  BellIcon,
  CrownIcon,
  ShieldCheckOrange,
  GiftSmall,
  CouponStatIcon,
  CoinIcon,
  RedPacketIcon,
  GiftStatIcon,
  ShieldCheck,
  HeadsetIcon,
  InvoiceIcon,
  PayIcon,
  RulesIcon,
  LoanIcon,
  RecruitIcon,
} from '../components/Icons.jsx'

const STATS = [
  { icon: <CouponStatIcon size={26} />, label: '券', value: '3', unit: '张' },
  { icon: <CoinIcon size={26} />, label: '积分', value: '280', unit: '分' },
  { icon: <RedPacketIcon size={26} />, label: '现金奖', value: '0.00', unit: '元' },
  { icon: <GiftStatIcon size={26} />, label: '实物奖', value: '0', unit: '个' },
]

const TOOLS = [
  { icon: <HeadsetIcon size={31} />, label: '联系客服' },
  { icon: <InvoiceIcon size={31} />, label: '开具发票' },
  { icon: <PayIcon size={31} />, label: '支付设置' },
  { icon: <RulesIcon size={31} />, label: '乘客用车规则' },
  { icon: <LoanIcon size={31} />, label: '借钱' },
  { icon: <RecruitIcon size={31} />, label: '司机招募' },
]

export default function Profile() {
  const nav = useNavigate()
  return (
    <div className="flex flex-col h-full" style={{ background: '#F5F6F8' }}>
      <div className="page-scroll" style={{ background: 'linear-gradient(180deg,#FDEFE5 0%,#FDF4EC 26%,#F5F6F8 42%)' }}>
        {/* header */}
        <div className="pt-[calc(18px+var(--sat))] px-[18px] flex items-center">
          <AvatarPlaceholder size={58} />
          <div className="ml-[13px] flex-1">
            <div className="text-[20px] font-bold text-[#F9571F] leading-none">福利打车用户</div>
            <button className="mt-[8px] flex items-center gap-[3px] press">
              <span className="text-[13px] text-[#8B94A5] leading-none">个人信息管理</span>
              <ChevronRight size={12} color="#B7BDC9" />
            </button>
          </div>
          <button className="press mr-[10px]">
            <GearIcon size={24} />
          </button>
          <span className="w-px h-[22px] bg-[#E8D5C8]" />
          <button className="press ml-[10px] relative">
            <BellIcon size={24} />
            <span className="absolute right-[-1px] top-[0px] w-[8px] h-[8px] rounded-full bg-[#FF3B30]" />
          </button>
        </div>

        {/* member card */}
        <div className="mx-[14px] mt-[16px] rounded-[16px] px-[18px] pt-[16px] pb-[15px] relative overflow-hidden" style={{ background: 'linear-gradient(100deg,#FDEEE1 0%,#FCDFC8 100%)' }}>
          {/* crown watermark */}
          <svg className="absolute right-[14px] top-[-8px] w-[104px] h-[80px]" viewBox="0 0 120 92" fill="none" opacity="0.45">
            <path d="M28 44 38 52 60 28l22 24 10-8-7 34H35l-7-34Z" fill="#F8C99B" />
            <rect x="33" y="74" width="54" height="10" rx="3" fill="#F5BE89" />
            <rect x="24" y="82" width="72" height="8" rx="3" fill="#F2B47C" />
          </svg>
          {/* 内容层加 relative，叠在皇冠水印之上（否则水印会盖住右侧文字） */}
          <div className="relative flex items-center">
            <span className="text-[23px] font-black italic text-[#F9571F] leading-none">V1</span>
            <span className="text-[18px] font-bold text-[#F9571F] leading-none ml-[8px]">新享会员</span>
          </div>
          <div className="relative mt-[11px] flex items-center">
            <div className="w-[128px] h-[8px] rounded-full overflow-hidden" style={{ background: '#F8D9C4' }}>
              <div className="h-full w-[30%] rounded-full" style={{ background: 'linear-gradient(90deg,#FF8422,#FC4F00)' }} />
            </div>
            <span className="text-[12px] text-[#F9571F] ml-[9px] whitespace-nowrap">成长值 30/100</span>
          </div>
          <button
            className="absolute right-[16px] top-[42px] rounded-full px-[16px] py-[9px] text-white text-[13.5px] font-semibold leading-none whitespace-nowrap press"
            style={{ background: 'linear-gradient(135deg,#FF8422,#FC4F00)' }}
          >
            查看详情
          </button>
          {/* 三项权益按内容宽度左 / 中 / 右分布（原来每项固定 1/3 宽，六个字的那项会和后一项重叠） */}
          <div className="relative mt-[14px] flex items-center justify-between gap-[6px]">
            {[
              { icon: <CrownIcon size={18} />, text: '打车更省钱' },
              { icon: <ShieldCheckOrange size={18} />, text: '专属优惠权益' },
              { icon: <GiftSmall size={18} />, text: '享会员活动' },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-[5px] min-w-0">
                {b.icon}
                <span className="text-[13px] text-[#F9571F] leading-none whitespace-nowrap">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* stats */}
        <div className="mx-[14px] mt-[12px] bg-white rounded-[16px] px-[6px] py-[15px] flex shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
          {STATS.map((s, i) => (
            <button key={s.label} className="flex-1 flex flex-col items-center press">
              <div className="flex items-center gap-[4px] whitespace-nowrap">
                {s.icon}
                <span className="text-[13px] text-[#5B6474] leading-none">{s.label}</span>
                <ChevronRight size={11} color="#B7BDC9" />
              </div>
              <div className="flex items-baseline gap-[3px] mt-[8px]">
                <span className="text-[21px] font-bold text-[#F9571F] leading-none">{s.value}</span>
                <span className="text-[12px] text-[#9AA1B1]">{s.unit}</span>
              </div>
            </button>
          ))}
        </div>

        {/* trips */}
        <div className="mx-[14px] mt-[12px] bg-white rounded-[16px] pt-[17px] pb-[20px] shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
          <div className="flex items-center justify-between px-[18px]">
            <span className="text-[17px] font-bold text-[#1c2338] leading-none">我的行程</span>
            <button className="flex items-center gap-[3px] press" onClick={() => nav('/orders')}>
              <span className="text-[13px] text-[#7B87A0] leading-none">查看全部行程</span>
              <ChevronRight size={13} color="#9AA8BE" />
            </button>
          </div>
          <div className="mt-[13px] h-px bg-[#F4F5F7]" />
          <div className="flex flex-col items-center pt-[14px]">
            <img src="assets/empty-trip.webp" alt="" width="473" height="258" decoding="async" className="w-[220px] h-[86px] object-contain" />
            <div className="text-[14.5px] text-[#9AA1B1] mt-[2px]">还没有行程哦，快去打车出发吧～</div>
            <button
              className="mt-[14px] rounded-full px-[38px] py-[13px] text-white text-[17px] font-bold leading-none press shadow-[0_10px_22px_rgba(252,82,1,0.28)]"
              style={{ background: 'linear-gradient(135deg,#FF7A18,#FC5201)' }}
              onClick={() => nav('/')}
            >
              去打车
            </button>
          </div>
        </div>

        {/* safety */}
        <button className="mx-[14px] mt-[12px] w-[calc(100%-28px)] bg-white rounded-[16px] px-[18px] py-[17px] flex items-center press shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
          <ShieldCheck size={30} />
          <div className="ml-[12px] flex-1 text-left">
            <div className="text-[15.5px] font-bold text-[#3B63E8] leading-none">安全出行</div>
            <div className="text-[13px] text-[#6B8AF0] leading-none mt-[7px]">福利打车为您的出行保驾护航</div>
          </div>
          <ChevronRight size={16} color="#B7BDC9" />
        </button>

        {/* tools */}
        <div className="mx-[14px] mt-[12px] mb-[12px] bg-white rounded-[16px] px-[18px] pt-[18px] pb-[10px] shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
          <div className="text-[17px] font-bold text-[#1c2338] leading-none">服务与工具</div>
          <div className="mt-[8px] h-px bg-[#F4F5F7]" />
          <div className="mt-[14px] grid grid-cols-4 gap-y-[22px]">
            {TOOLS.map((t) => (
              <button key={t.label} className="flex flex-col items-center gap-[9px] press">
                {t.icon}
                <span className="text-[12px] text-[#1c2338] leading-none">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
