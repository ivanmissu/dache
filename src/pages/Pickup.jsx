import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { ChevronRight, Clock, PinSolid, HomeSetIcon, BuildingIcon, MapPickIcon, Flame, PlusCircle, WarnCircle } from '../components/Icons.jsx'

const POINTS = [
  {
    id: 't3',
    icon: 'clock',
    title: '首都T3-停车楼负二层-网约车(H区)上车点',
    sub: '首都T3-停车楼负二层-网约车(H区)上车点',
    dist: '120m',
    hot: true,
  },
  {
    id: 'dechen',
    icon: 'pin',
    title: '德辰国际-西门',
    sub: '北京市朝阳区北苑小街与红军营东路交叉口东南…',
    dist: '27m',
  },
  {
    id: 'joycity',
    icon: 'pin',
    title: '北京朝阳大悦城',
    sub: '北京市朝阳区朝阳北路101号',
    dist: '2.3km',
  },
  {
    id: 'sanlitun',
    icon: 'pin',
    title: '三里屯太古里南区',
    sub: '北京市朝阳区三里屯路19号',
    dist: '2.8km',
  },
  {
    id: 'chaoyangpark',
    icon: 'pin',
    title: '朝阳公园南门',
    sub: '北京市朝阳区朝阳公园南路1号',
    dist: '3.1km',
  },
  {
    id: 'guomao',
    icon: 'pin',
    title: '国贸地铁站（B口）',
    sub: '北京市朝阳区建国门外大街1号',
    dist: '3.5km',
  },
]

export default function Pickup() {
  const nav = useNavigate()
  return (
    <div
      className="flex flex-col h-full"
      style={{ background: 'linear-gradient(180deg,#FDEFE7 0%,#FDF6F2 34%,#FDF4EE 100%)' }}
    >
      <PageHeader title="选择上车点" onBack={() => nav(-1)} />

      <div className="page-scroll px-[14px] pt-[4px] pb-[calc(30px+var(--sab))]">
        {/* search */}
        <div className="bg-white rounded-[16px] px-[18px] py-[19px] flex items-center gap-[11px] shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
          <span className="w-[20px] flex justify-center shrink-0">
            <span className="w-[11px] h-[11px] rounded-full bg-[#FC5201]" />
          </span>
          <input className="flex-1 min-w-0 text-[19px] leading-[1.3] text-[#1c2338] placeholder:text-[#9BA6B8]" placeholder="输入上车点" />
        </div>

        {/* quick actions */}
        <div className="mt-[13px] bg-white rounded-[16px] py-[18px] flex items-stretch shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
          <QuickAction icon={<HomeSetIcon size={23} />} label="设置家" />
          <Divider />
          <QuickAction icon={<BuildingIcon size={23} />} label="设置公司" />
          <Divider />
          <QuickAction icon={<MapPickIcon size={23} />} label="地图选点" />
        </div>

        {/* recommended */}
        <div className="mt-[13px] bg-white rounded-[16px] pt-[17px] pb-[6px] shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
          {/* 标题行和下面每一行用同样的「20px 图标位 + 11px 间距」，图标居中对齐、文字左边缘对齐 */}
          <div className="flex items-center gap-[11px] px-[18px]">
            <span className="w-[20px] flex justify-center shrink-0">
              <Flame size={21} />
            </span>
            <span className="text-[17px] font-bold text-[#FC5300] leading-none">推荐上车点</span>
          </div>

          <div className="mt-[10px]">
            {POINTS.map((p, i) => (
              <div key={p.id}>
                {p.hot ? (
                  // 高亮底色离卡片边 8px、行内再留 10px，合计仍是 18px，图标和文字与下面各行对齐
                  <div className="mx-[8px] rounded-[12px]" style={{ background: '#FDEEE4' }}>
                    <PointRow p={p} inset onClick={() => nav('/dropoff')} />
                  </div>
                ) : (
                  <PointRow p={p} onClick={() => nav('/dropoff')} />
                )}
                {i < POINTS.length - 1 && !p.hot && (
                  <div className="mx-[18px] h-px bg-[#F0F1F3]" />
                )}
                {p.hot && <div className="h-[6px]" />}
              </div>
            ))}
          </div>
        </div>

        {/* bottom links */}
        <div className="mt-[22px] flex items-center justify-center gap-[18px]">
          <button className="flex items-center gap-[6px] text-[15px] leading-none text-[#F96A1B] font-medium press">
            <PlusCircle size={20} color="#F96A1B" />
            新增地点
          </button>
          <span className="w-px h-[18px] bg-[#E8D5C8]" />
          <button className="flex items-center gap-[6px] text-[15px] leading-none text-[#F96A1B] font-medium press">
            <WarnCircle size={20} color="#F96A1B" />
            地点报错
          </button>
        </div>
      </div>
    </div>
  )
}

function QuickAction({ icon, label }) {
  return (
    <button className="flex-1 flex items-center justify-center gap-[9px] press">
      {icon}
      <span className="text-[15px] font-semibold text-[#1c2338] leading-none">{label}</span>
    </button>
  )
}

function Divider() {
  return <span className="w-px bg-[#EEF0F3] self-stretch my-[2px]" />
}

function PointRow({ p, onClick, inset = false }) {
  return (
    <button
      className={`w-full flex items-center gap-[11px] py-[15px] press text-left ${inset ? 'px-[10px]' : 'px-[18px]'}`}
      onClick={onClick}
    >
      <span className="w-[20px] flex justify-center shrink-0">
        {p.icon === 'clock' ? <Clock size={20} color="#F97316" /> : <PinSolid size={18} color="#F96A1B" />}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-[14px] font-semibold text-[#1c2338] leading-snug truncate">{p.title}</span>
        <span className="block text-[12px] text-[#98A1B2] leading-snug mt-[3px] truncate">{p.sub}</span>
      </span>
      <span className="text-[12.5px] text-[#98A1B2] leading-none shrink-0">{p.dist}</span>
      <ChevronRight size={15} color="#B9BFCA" />
    </button>
  )
}
