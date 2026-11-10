import { useNavigate } from 'react-router-dom'
import PageHeader, { HeaderCapsule } from '../components/PageHeader.jsx'
import { PinSolid, HomeSetIcon, BuildingIcon, MapPickIcon, Star, PlusIcon } from '../components/Icons.jsx'

const RECOMMEND = [
  {
    id: 'beiyuan',
    title: '北苑商场',
    sub: '北京市朝阳区来广营乡北苑家园清友园4号楼',
    dist: '1.7km',
  },
  {
    id: 'taobao',
    title: '北京朝来淘宝园市场',
    sub: '北京市朝阳区朝来园淘宝市场1号门B04号',
    dist: '1.5km',
  },
]

const STATIONS = [
  {
    id: 'west',
    title: '北京西站',
    sub: '北京市丰台区莲花池东路118号',
    dist: '17.6km',
    gates: ['南进站口', '北进站口', '北出站口', '南出站口'],
  },
  {
    id: 'beijing',
    title: '北京站',
    sub: '北京市东城区毛家湾胡同甲13号',
    dist: '13.7km',
    gates: ['北进站口', '北出站口', '第一落客区', '免费落客区'],
  },
  {
    id: 'south',
    title: '北京南站',
    sub: '北京市丰台区永外大街车站路12号',
    dist: '18.6km',
    gates: ['西进站口', '东进站口', '北进站口', '南进站口'],
  },
  {
    id: 'fengtai',
    title: '北京丰台站',
    sub: '北京市丰台区丰帆路与万华北街交叉口北',
    dist: '22.7km',
    gates: ['西进站口', '东进站口', '北进站口', '南进站口'],
  },
]

export default function Dropoff() {
  const nav = useNavigate()
  return (
    <div
      className="flex flex-col h-full"
      style={{ background: 'linear-gradient(180deg,#FDEFE7 0%,#FDF6F2 34%,#FDF4EE 100%)' }}
    >
      <PageHeader title="选择下车点" onBack={() => nav(-1)} right={<HeaderCapsule />} />

      {/*
        本页所有行都用同一套左侧结构：18px 内边距 + 20px 图标位（图标居中）+ 12px 间距，
        所以搜索框的圆点、星标、定位图钉在一条竖线上，各行文字（含进站口按钮）左边缘对齐。
      */}
      <div className="page-scroll px-[14px] pt-[4px] pb-[calc(24px+var(--sab))]">
        {/* search */}
        <div className="bg-white rounded-[16px] pl-[18px] pr-[9px] py-[9px] flex items-center gap-[12px] shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
          <IconSlot>
            <span className="w-[11px] h-[11px] rounded-full bg-[#F0432C]" />
          </IconSlot>
          {/* 输入框字号不能小于 16px（缩放后），否则 iOS 聚焦时会自动放大页面 */}
          <input className="flex-1 min-w-0 text-[18px] leading-[1.3] text-[#1c2338] placeholder:text-[#9BA6B8]" placeholder="输入下车点" />
          <button className="flex items-center gap-[4px] border-[1.5px] border-[#FC5201]/45 rounded-[10px] px-[12px] py-[8px] press shrink-0 whitespace-nowrap">
            <PlusIcon size={14} color="#1c2338" />
            <span className="text-[14.5px] font-semibold text-[#1c2338] leading-none">途经点</span>
          </button>
        </div>

        {/* quick actions */}
        <div className="mt-[10px] bg-white rounded-[16px] py-[14px] flex items-stretch shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
          <QuickAction icon={<HomeSetIcon size={22} />} label="设置家" />
          <Divider />
          <QuickAction icon={<BuildingIcon size={22} />} label="设置公司" />
          <Divider />
          <QuickAction icon={<MapPickIcon size={22} />} label="地图选点" />
        </div>

        {/* recommend */}
        <div
          className="mt-[10px] rounded-[16px] overflow-hidden"
          style={{ background: '#fff', border: '1px solid #FBE0CB' }}
        >
          <div
            className="flex items-center gap-[12px] px-[18px] py-[11px]"
            style={{ background: 'linear-gradient(90deg,#FCE6D2,#FDF0E2)' }}
          >
            <IconSlot>
              <Star size={19} />
            </IconSlot>
            <span className="text-[16.5px] font-bold text-[#F96A1B] leading-none">为你推荐</span>
          </div>
          {RECOMMEND.map((p, i) => (
            <div key={p.id}>
              <button
                className="w-full flex items-center gap-[12px] px-[18px] py-[10px] press text-left"
                onClick={() => nav('/cars')}
              >
                <IconSlot>
                  <PinSolid size={18} color="#F96A1B" />
                </IconSlot>
                <span className="flex-1 min-w-0">
                  <span className="block text-[15.5px] font-semibold text-[#1c2338] leading-[1.35] truncate">{p.title}</span>
                  <span className="block text-[12.5px] text-[#98A1B2] leading-[1.35] mt-[2px] truncate">{p.sub}</span>
                </span>
                <span className="text-[12.5px] text-[#98A1B2] leading-none shrink-0">{p.dist}</span>
              </button>
              {i < RECOMMEND.length - 1 && <div className="ml-[50px] mr-[18px] h-px bg-[#F5E7DC]" />}
            </div>
          ))}
        </div>

        {/* stations */}
        <div className="mt-[10px] flex flex-col gap-[10px]">
          {STATIONS.map((s) => (
            <div key={s.id} className="bg-white rounded-[16px] px-[18px] pt-[13px] pb-[14px] shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
              <div className="flex items-start gap-[12px]">
                {/* 图钉与标题首行垂直居中 */}
                <IconSlot className="h-[22px]">
                  <PinSolid size={18} color="#F96A1B" />
                </IconSlot>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-[10px]">
                    <span className="text-[16px] font-bold text-[#1c2338] leading-[22px] truncate">{s.title}</span>
                    <span className="text-[12.5px] text-[#8B94A5] leading-none shrink-0">{s.dist}</span>
                  </div>
                  <div className="text-[12.5px] text-[#98A1B2] leading-[1.35] mt-[1px] truncate">{s.sub}</div>
                  <div className="mt-[9px] grid grid-cols-2 gap-x-[8px] gap-y-[7px]">
                    {s.gates.map((g) => (
                      <button
                        key={g}
                        className="h-[30px] rounded-[7px] text-[13px] leading-none font-medium text-[#F5670C] press"
                        style={{ background: '#FDEEE6', border: '1px solid #F8C3A2' }}
                        onClick={() => nav('/cars')}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* 固定 20px 宽的图标位，图标在里面水平、垂直居中 */
function IconSlot({ children, className = '' }) {
  return <span className={`w-[20px] flex items-center justify-center shrink-0 ${className}`}>{children}</span>
}

function QuickAction({ icon, label }) {
  return (
    <button className="flex-1 flex items-center justify-center gap-[8px] press">
      {icon}
      <span className="text-[15px] font-semibold text-[#1c2338] leading-none">{label}</span>
    </button>
  )
}

function Divider() {
  return <span className="w-px bg-[#EEF0F3] self-stretch my-[2px]" />
}
