export default function HomeIndicator({ dark = true }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 h-[22px] flex items-center justify-center pointer-events-none">
      <div
        className="w-[134px] h-[5px] rounded-full"
        style={{ background: dark ? '#1c1c1e' : 'rgba(255,255,255,0.85)' }}
      />
    </div>
  )
}
