import { useNavigate } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  PinSolid,
  HomeSetIcon,
  BuildingIcon,
  MapPickIcon,
  Star,
  SendIcon,
  Crosshair,
  PlusIcon,
} from '../components/Icons.jsx'

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
      {/* header */}
      <div className="relative shrink-0 pt-[48px] pb-[10px] flex items-center justify-center">
        <button className="absolute left-[14px] top-[46px] p-[6px] press" onClick={() => nav(-1)}>
          <ChevronLeft size={23} />
        </button>
        <span className="text-[18px] font-bold text-[#1c2338]">选择下车点</span>
        <div className="absolute right-[14px] top-[46px] flex items-center bg-white rounded-full pl-[13px] pr-[13px] py-[9px] shadow-[0_2px_10px_rgba(30,40,60,0.06)]">
          <SendIcon size={19} />
          <span className="w-px h-[17px] bg-[#E8EAEF] mx-[11px]" />
          <Crosshair size={19} />
        </div>
      </div>

      <div className="page-scroll px-[14px] pb-[30px]">
        {/* search */}
        <div className="bg-white rounded-[16px] pl-[18px] pr-[10px] py-[12px] flex items-center gap-[10px] shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
          <span className="w-[11px] h-[11px] rounded-full bg-[#F0432C] shrink-0" />
          <input className="flex-1 min-w-0 text-[19px] text-[#1c2338] placeholder:text-[#9BA6B8]" placeholder="输入下车点" />
          <button className="flex items-center gap-[4px] border-[1.5px] border-[#FC5201]/45 rounded-[11px] px-[13px] py-[9px] press shrink-0 whitespace-nowrap">
            <PlusIcon size={15} color="#1c2338" />
            <span className="text-[15px] font-semibold text-[#1c2338] leading-none">途经点</span>
          </button>
        </div>

        {/* quick actions */}
        <div className="mt-[13px] bg-white rounded-[16px] py-[18px] flex items-stretch shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
          <QuickAction icon={<HomeSetIcon size={23} />} label="设置家" />
          <Divider />
          <QuickAction icon={<BuildingIcon size={23} />} label="设置公司" />
          <Divider />
          <QuickAction icon={<MapPickIcon size={23} />} label="地图选点" />
        </div>

        {/* recommend */}
        <div
          className="mt-[13px] rounded-[16px] overflow-hidden"
          style={{ background: '#fff', border: '1px solid #FBE0CB' }}
        >
          <div
            className="flex items-center gap-[8px] px-[18px] py-[14px]"
            style={{ background: 'linear-gradient(90deg,#FCE6D2,#FDF0E2)' }}
          >
            <Star size={20} />
            <span className="text-[17px] font-bold text-[#F96A1B] leading-none">为你推荐</span>
          </div>
          {RECOMMEND.map((p, i) => (
            <div key={p.id}>
              <button
                className="w-full flex items-center gap-[13px] px-[18px] py-[15px] press text-left"
                onClick={() => nav('/cars')}
              >
                <PinSolid size={19} color="#F96A1B" />
                <span className="flex-1 min-w-0">
                  <span className="block text-[16px] font-semibold text-[#1c2338] leading-snug truncate">{p.title}</span>
                  <span className="block text-[12.5px] text-[#98A1B2] leading-snug mt-[3px] truncate">{p.sub}</span>
                </span>
                <span className="text-[13px] text-[#98A1B2] shrink-0">{p.dist}</span>
              </button>
              {i < RECOMMEND.length - 1 && <div className="mx-[18px] h-px bg-[#F5E7DC]" />}
            </div>
          ))}
        </div>

        {/* stations */}
        <div className="mt-[13px] flex flex-col gap-[13px]">
          {STATIONS.map((s) => (
            <div key={s.id} className="bg-white rounded-[16px] px-[18px] pt-[17px] pb-[17px] shadow-[0_6px_20px_rgba(120,80,40,0.05)]">
              <div className="flex items-start gap-[13px]">
                <PinSolid size={19} color="#F96A1B" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-[10px]">
                    <span className="text-[16.5px] font-bold text-[#1c2338] leading-snug truncate">{s.title}</span>
                    <span className="text-[13px] text-[#8B94A5] shrink-0">{s.dist}</span>
                  </div>
                  <div className="text-[12.5px] text-[#98A1B2] leading-snug mt-[4px] truncate">{s.sub}</div>
                </div>
              </div>
              <div className="mt-[11px] grid grid-cols-2 gap-[10px]">
                {s.gates.map((g) => (
                  <button
                    key={g}
                    className="rounded-[10px] py-[11px] text-[14px] font-medium text-[#F5670C] press"
                    style={{ background: '#FDEEE6', border: '1px solid #F8C3A2' }}
                    onClick={() => nav('/cars')}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function QuickAction({ icon, label }) {
  return (
    <button className="flex-1 flex items-center justify-center gap-[9px] press">
      {icon}
      <span className="text-[15px] font-semibold text-[#1c2338]">{label}</span>
    </button>
  )
}

function Divider() {
  return <span className="w-px bg-[#EEF0F3] self-stretch my-[2px]" />
}
