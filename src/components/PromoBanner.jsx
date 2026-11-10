import { ChevronRight, CarGlyph } from './Icons.jsx'

export default function PromoBanner({ className = '' }) {
  return (
    <button className={`w-full h-[63px] rounded-[18px] overflow-hidden relative flex items-center banner-gradient press ${className}`}>
      <div className="pl-[10px] flex items-center gap-[10px] z-10">
        <span className="w-[42px] h-[42px] rounded-[12px] bg-white/95 flex items-center justify-center">
          <CarGlyph size={27} color="#FC5201" />
        </span>
        <span className="text-left">
          <span className="block text-[17px] font-bold text-white leading-none">福利打车</span>
          <span className="block text-[12.5px] text-white/95 leading-none mt-[6px]">打车更省钱 生活更轻松</span>
        </span>
      </div>
      <img
        src="assets/banner-gift.webp"
        alt=""
        width="231"
        height="126"
        decoding="async"
        fetchpriority="high"
        className="absolute right-[30px] top-0 h-full w-auto object-contain pointer-events-none"
        style={{
          maskImage: 'linear-gradient(90deg, transparent 0%, #000 22%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 22%)',
        }}
      />
      <span className="ml-auto mr-[10px] relative z-10">
        <ChevronRight size={16} color="#fff" width={2.6} />
      </span>
    </button>
  )
}
