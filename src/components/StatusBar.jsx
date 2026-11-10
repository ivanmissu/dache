export default function StatusBar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex items-end justify-between px-[26px] pt-[14px] pb-[8px] pointer-events-none">
      <div className="flex items-center gap-[6px]">
        <span className="text-[17px] font-semibold tracking-tight leading-none text-black">9:41</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ marginTop: -1 }}>
          <path d="M21 3 3 10.5l7.2 2.3L12.5 20 21 3Z" fill="#000" />
        </svg>
      </div>
      <div className="flex items-center gap-[7px]" style={{ marginBottom: 1 }}>
        <svg width="19" height="13" viewBox="0 0 19 13" fill="none">
          <rect x="0" y="8.5" width="3.2" height="4.5" rx="1" fill="#000" />
          <rect x="5.2" y="6" width="3.2" height="7" rx="1" fill="#000" />
          <rect x="10.4" y="3.2" width="3.2" height="9.8" rx="1" fill="#000" />
          <rect x="15.6" y="0" width="3.2" height="13" rx="1" fill="#000" />
        </svg>
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none">
          <path
            d="M8.5 2.2c2.7 0 5.2 1 7.1 2.8l-1.5 1.6a7.9 7.9 0 0 0-11.2 0L1.4 5A10.2 10.2 0 0 1 8.5 2.2Z"
            fill="#000"
          />
          <path
            d="M8.5 6.1c1.7 0 3.2.6 4.4 1.7L11.4 9.4a4.2 4.2 0 0 0-5.8 0L4.1 7.8A6.4 6.4 0 0 1 8.5 6.1Z"
            fill="#000"
          />
          <path d="M8.5 9.9c.8 0 1.5.3 2 .8l-2 2.1-2-2.1c.5-.5 1.2-.8 2-.8Z" fill="#000" />
        </svg>
        <div className="flex items-center">
          <div
            className="flex items-center justify-center rounded-[4.5px] px-[3px]"
            style={{ width: 26, height: 13.5, background: '#000' }}
          >
            <span className="text-[9.5px] font-semibold leading-none text-white" style={{ letterSpacing: '-0.3px' }}>
              100
            </span>
          </div>
          <div
            style={{
              width: 1.8,
              height: 4.5,
              borderRadius: 1,
              marginLeft: 1.2,
              background: 'rgba(0,0,0,0.4)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
