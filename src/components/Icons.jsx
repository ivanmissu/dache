/* Hand-drawn SVG icon set matching the 福利打车 design mockups. */

export const LogoCar = ({ size = 44, radius = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx={radius} fill="url(#lgc)" />
    <defs>
      <linearGradient id="lgc" x1="0" y1="0" x2="48" y2="48">
        <stop stopColor="#FF8A2A" />
        <stop offset="1" stopColor="#FC5201" />
      </linearGradient>
    </defs>
    {/* car front glyph */}
    <path
      d="M13 28.5c0-1.2.6-2.3 1.6-2.9l2.2-1.3 1.7-4.1c.5-1.2 1.6-1.9 2.9-1.9h5c1.3 0 2.4.7 2.9 1.9l1.7 4.1 2.2 1.3c1 .6 1.6 1.7 1.6 2.9v3.2c0 .7-.6 1.3-1.3 1.3h-1c-.7 0-1.3-.6-1.3-1.3v-.9H15.6v.9c0 .7-.6 1.3-1.3 1.3h-1c-.7 0-1.3-.6-1.3-1.3v-3.2Z"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path d="M16.8 27.2h14.4l-1.4-3.4c-.2-.6-.8-1-1.4-1h-8.8c-.6 0-1.2.4-1.4 1l-1.4 3.4Z" fill="#fff" />
    <circle cx="16.2" cy="30.2" r="1.1" fill="#fff" />
    <circle cx="31.8" cy="30.2" r="1.1" fill="#fff" />
  </svg>
)

export const CarGlyph = ({ size = 26, color = '#FC5201' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path
      d="M7 22c0-1 .5-1.9 1.3-2.4l1.7-1 1.3-3.2c.4-.9 1.3-1.5 2.3-1.5h4.8c1 0 1.9.6 2.3 1.5l1.3 3.2 1.7 1c.8.5 1.3 1.4 1.3 2.4v2.4c0 .5-.4 1-1 1h-.8c-.5 0-1-.4-1-1v-.7H9.8v.7c0 .5-.4 1-1 1H8c-.5 0-1-.4-1-1V22Z"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M10.2 20.8h11.6l-1.1-2.6c-.2-.4-.6-.7-1.1-.7h-7.2c-.5 0-.9.3-1.1.7l-1.1 2.6Z" fill={color} />
  </svg>
)

/* top-down map car */
export const CarTop = ({ size = 42, rotate = 0 }) => (
  <svg width={size} height={size * 1.45} viewBox="0 0 42 61" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
    <rect x="7" y="3" width="28" height="55" rx="11" fill="#fff" stroke="#2b2b2b" strokeWidth="2.4" />
    <rect x="11" y="9" width="20" height="12" rx="5" fill="#FF7A1F" />
    <rect x="11.8" y="23" width="18.4" height="17" rx="6" fill="#26262b" />
    <rect x="11.8" y="42" width="18.4" height="9" rx="4" fill="#EDEDED" />
    <rect x="8.6" y="5" width="24.8" height="4.6" rx="2.3" fill="#FF7A1F" />
  </svg>
)

export const ChevronRight = ({ size = 18, color = '#B7BDC9', width = 2.4 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="m9 5 7 7-7 7" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronLeft = ({ size = 22, color = '#1c2338', width = 2.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="m15 5-7 7 7 7" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronDown = ({ size = 14, color = '#1c2338', width = 2.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="m5 9 7 7 7-7" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Crosshair = ({ size = 26, color = '#111' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="5.6" stroke={color} strokeWidth="2.2" />
    <circle cx="14" cy="14" r="2" fill={color} />
    <path d="M14 2.5v3.4M14 22.1v3.4M2.5 14h3.4M22.1 14h3.4" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const ShieldPlus = ({ size = 26, color = '#111' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path
      d="M14 2.8c2.6 1.8 5.3 2.9 8.2 3.2v7.4c0 5.4-3.3 9-8.2 11.6-4.9-2.6-8.2-6.2-8.2-11.6V6c2.9-.3 5.6-1.4 8.2-3.2Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path d="M14 9.4v8M10 13.4h8" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const RouteIcon = ({ size = 24, color = '#111' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path
      d="M8 24V12.5A4.5 4.5 0 0 1 12.5 8H20"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path d="m17 5 3.4 3-3.4 3" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8" cy="24" r="2.2" fill={color} />
  </svg>
)

export const Search = ({ size = 20, color = '#9aa1b1' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="6.5" stroke={color} strokeWidth="2.2" />
    <path d="m16 16 4.5 4.5" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const Clock = ({ size = 18, color = '#7b7f8f' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8.6" stroke={color} strokeWidth="2" />
    <path d="M12 7.4V12l3.2 2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const PinSolid = ({ size = 22, color = '#FC5201' }) => (
  <svg width={size} height={size * 1.32} viewBox="0 0 22 29" fill="none">
    <path
      d="M11 1.5c-4.7 0-8.5 3.7-8.5 8.3 0 5.1 5 10 8.5 17.7 3.5-7.7 8.5-12.6 8.5-17.7 0-4.6-3.8-8.3-8.5-8.3Z"
      fill={color}
    />
    <circle cx="11" cy="9.8" r="3.4" fill="#fff" />
  </svg>
)

export const PinTeardrop = ({ size = 30, color = '#FC5201' }) => (
  <svg width={size} height={size * 1.25} viewBox="0 0 30 38" fill="none">
    <path
      d="M15 1.5c-6.3 0-11.4 4.9-11.4 11 0 7.2 7.2 13.6 11.4 24 4.2-10.4 11.4-16.8 11.4-24 0-6.1-5.1-11-11.4-11Z"
      fill={color}
    />
    <circle cx="15" cy="12.4" r="4.4" fill="#fff" />
  </svg>
)

export const HomeMapIcon = ({ size = 26, color = '#FD5401', filled = true }) =>
  filled ? (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path
        d="M14 3.2 25 12v11.2c0 .9-.7 1.6-1.6 1.6h-5.2v-7.4h-4.4v7.4H8.6c-.9 0-1.6-.7-1.6-1.6V12L14 3.2Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path
        d="M14 3.2 25 12v11.2c0 .9-.7 1.6-1.6 1.6h-5.2v-7.4h-4.4v7.4H8.6c-.9 0-1.6-.7-1.6-1.6V12L14 3.2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )

export const OrderIcon = ({ size = 26, color = '#7b7f8f', filled = false }) =>
  filled ? (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="5" y="3.4" width="18" height="21.2" rx="3.2" fill={color} />
      <rect x="10.4" y="1.8" width="7.2" height="4" rx="1.8" fill={color} />
      <rect x="8.8" y="10" width="4" height="1.9" rx="0.9" fill="#fff" />
      <rect x="8.8" y="14.4" width="4" height="1.9" rx="0.9" fill="#fff" />
      <rect x="8.8" y="18.8" width="4" height="1.9" rx="0.9" fill="#fff" />
      <rect x="15.2" y="10" width="4" height="1.9" rx="0.9" fill="#fff" />
      <rect x="15.2" y="14.4" width="4" height="1.9" rx="0.9" fill="#fff" />
      <rect x="15.2" y="18.8" width="4" height="1.9" rx="0.9" fill="#fff" />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="5" y="4.6" width="18" height="20" rx="3.2" stroke={color} strokeWidth="2" />
      <rect x="10.4" y="2.6" width="7.2" height="4" rx="1.8" stroke={color} strokeWidth="2" />
      <path d="M9.6 11h2.6M9.6 15h2.6M9.6 19h2.6M15.8 11h2.6M15.8 15h2.6M15.8 19h2.6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

export const UserIcon = ({ size = 26, color = '#7b7f8f', filled = false }) =>
  filled ? (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="9.6" r="5.2" fill={color} />
      <path d="M3.8 24.6c0-5 4.6-8.2 10.2-8.2s10.2 3.2 10.2 8.2" fill={color} />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="9.6" r="4.8" stroke={color} strokeWidth="2" />
      <path d="M4.6 24.4c.6-4.4 4.6-7.2 9.4-7.2s8.8 2.8 9.4 7.2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

export const CouponIcon = ({ size = 22, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M3.5 7.6c0-1 .8-1.8 1.8-1.8h13.4c1 0 1.8.8 1.8 1.8v2.1a1.7 1.7 0 0 0 0 4.6v2.1c0 1-.8 1.8-1.8 1.8H5.3c-1 0-1.8-.8-1.8-1.8v-2.1a1.7 1.7 0 0 0 0-4.6V7.6Z"
      stroke={color}
      strokeWidth="1.8"
    />
    <path d="M12 7v2.2M12 11v2M12 15v2.2" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeDasharray="0.1 3.2" />
  </svg>
)

export const Flame = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2.5c.6 3-1.4 4.4-2.8 6-1.5 1.7-2.7 3.3-2.7 5.8A5.5 5.5 0 0 0 12 19.8a5.5 5.5 0 0 0 5.5-5.5c0-3.6-2.6-5.2-3.6-8.2-.5 1.5-1.3 2.3-2.2 3 .5-2.4.8-4.6.3-6.6Z"
      fill="url(#flame-g)"
    />
    <defs>
      <linearGradient id="flame-g" x1="6" y1="2" x2="18" y2="20">
        <stop stopColor="#FF9A2E" />
        <stop offset="1" stopColor="#FC4F00" />
      </linearGradient>
    </defs>
  </svg>
)

export const Star = ({ size = 22, color = '#FE7A1F' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"
      stroke={color}
      strokeWidth="1.9"
      strokeLinejoin="round"
    />
  </svg>
)

export const HomeSetIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path
      d="M14 3.6 25 12.6v10.2c0 1-.8 1.8-1.8 1.8H4.8c-1 0-1.8-.8-1.8-1.8V12.6L14 3.6Z"
      fill="url(#hsg)"
    />
    <rect x="11" y="17" width="6" height="7.6" rx="1.2" fill="#fff" />
    <defs>
      <linearGradient id="hsg" x1="3" y1="3" x2="25" y2="25">
        <stop stopColor="#FF8A2A" />
        <stop offset="1" stopColor="#FC5201" />
      </linearGradient>
    </defs>
  </svg>
)

export const BuildingIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path d="M4 25V8.5L14 4v21H4Z" fill="url(#big1)" />
    <path d="M14 25V10l9 3.2V25h-9Z" fill="url(#big2)" />
    <rect x="7" y="10.5" width="2.6" height="2.6" rx="0.6" fill="#fff" opacity="0.9" />
    <rect x="7" y="15.5" width="2.6" height="2.6" rx="0.6" fill="#fff" opacity="0.9" />
    <rect x="10.6" y="10.5" width="2.6" height="2.6" rx="0.6" fill="#fff" opacity="0.9" />
    <rect x="10.6" y="15.5" width="2.6" height="2.6" rx="0.6" fill="#fff" opacity="0.9" />
    <defs>
      <linearGradient id="big1" x1="4" y1="4" x2="14" y2="25">
        <stop stopColor="#FF8A2A" />
        <stop offset="1" stopColor="#FC5201" />
      </linearGradient>
      <linearGradient id="big2" x1="14" y1="10" x2="23" y2="25">
        <stop stopColor="#FF7A1F" />
        <stop offset="1" stopColor="#FA5E00" />
      </linearGradient>
    </defs>
  </svg>
)

export const MapPickIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path
      d="M14 2.6c-4.5 0-8.1 3.5-8.1 7.9 0 4.9 4.8 9.6 8.1 16.9 3.3-7.3 8.1-12 8.1-16.9 0-4.4-3.6-7.9-8.1-7.9Z"
      fill="url(#mpg)"
    />
    <circle cx="14" cy="10.3" r="3.2" fill="#fff" />
    <defs>
      <linearGradient id="mpg" x1="5.9" y1="2.6" x2="22.1" y2="27.4">
        <stop stopColor="#FF8A2A" />
        <stop offset="1" stopColor="#FC5201" />
      </linearGradient>
    </defs>
  </svg>
)

export const PlusCircle = ({ size = 22, color = '#FE7A1F' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
    <path d="M12 7.5v9M7.5 12h9" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const WarnCircle = ({ size = 22, color = '#FE7A1F' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
    <path d="M12 7v6" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="12" cy="16.4" r="1.2" fill={color} />
  </svg>
)

export const CheckSquare = ({ size = 26, checked = true }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    {checked ? (
      <>
        <rect width="28" height="28" rx="8" fill="url(#ckg)" />
        <path d="m8 14.5 4 4 8-8.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ) : (
      <rect x="1.3" y="1.3" width="25.4" height="25.4" rx="7.4" stroke="#C9CFDA" strokeWidth="2.2" />
    )}
    <defs>
      <linearGradient id="ckg" x1="0" y1="0" x2="28" y2="28">
        <stop stopColor="#FF8422" />
        <stop offset="1" stopColor="#FC4F00" />
      </linearGradient>
    </defs>
  </svg>
)

export const CheckCircle = ({ size = 22, checked = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {checked ? (
      <>
        <circle cx="12" cy="12" r="10" fill="#FC5201" />
        <path d="m7.5 12.5 3 3 6-6.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ) : (
      <circle cx="12" cy="12" r="9" stroke="#C9CFDA" strokeWidth="2" />
    )}
  </svg>
)

export const StarBadge = ({ size = 18, color = '#FF9A2E' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="m12 3 2.5 5.2 5.7.8-4.1 4 1 5.7L12 16l-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3Z" fill={color} />
  </svg>
)

export const InfoDot = ({ size = 15, color = '#B7BDC9' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8.2" stroke={color} strokeWidth="1.8" />
    <path d="M10 9v5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="10" cy="6.2" r="1" fill={color} />
  </svg>
)

export const BellIcon = ({ size = 24, color = '#1c2338' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path
      d="M14 3.5c-3.8 0-6.5 2.8-6.5 6.4v4.2l-2 4.1c-.3.7.2 1.5 1 1.5h15c.8 0 1.3-.8 1-1.5l-2-4.1V9.9c0-3.6-2.7-6.4-6.5-6.4Z"
      stroke={color}
      strokeWidth="2.1"
      strokeLinejoin="round"
    />
    <path d="M11.4 21.6a2.7 2.7 0 0 0 5.2 0" stroke={color} strokeWidth="2.1" strokeLinecap="round" />
  </svg>
)

export const GearIcon = ({ size = 24, color = '#1c2338' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path
      d="M14 3.2 16 5l2.6-.6 1.1 2.4 2.5 1-.3 2.7 1.8 2-1.2 2.4 1.2 2.4-1.8 2 .3 2.7-2.5 1-1.1 2.4-2.6-.6-2 1.8-2-1.8-2.6.6-1.1-2.4-2.5-1 .3-2.7-1.8-2 1.2-2.4-1.2-2.4 1.8-2-.3-2.7 2.5-1L8.2 4.4 10.8 5l2-1.8Z"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="14" cy="14" r="3.6" stroke={color} strokeWidth="2" />
  </svg>
)

export const SendIcon = ({ size = 24, color = '#111' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path d="M25 4 3.5 12.2l9.6 3.2L16.5 25 25 4Z" stroke={color} strokeWidth="2.1" strokeLinejoin="round" />
  </svg>
)

export const PlusIcon = ({ size = 20, color = '#111' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
  </svg>
)

export const HeadsetIcon = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M6 18v-3a10 10 0 0 1 20 0v3" stroke="#1c2338" strokeWidth="2.2" strokeLinecap="round" />
    <rect x="4.2" y="16" width="5.4" height="8.6" rx="2.4" fill="#FF7A1F" stroke="#1c2338" strokeWidth="1.8" />
    <rect x="22.4" y="16" width="5.4" height="8.6" rx="2.4" stroke="#1c2338" strokeWidth="1.8" />
    <path d="M25 24.6c0 2.2-2.6 3.9-5.8 3.9" stroke="#1c2338" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16.6" cy="28.4" r="1.7" fill="#FF7A1F" />
  </svg>
)

export const InvoiceIcon = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path
      d="M8 4.5h16v20.2l-2.7-1.8-2.7 1.8-2.6-1.8-2.7 1.8-2.6-1.8L8 24.7V4.5Z"
      stroke="#1c2338"
      strokeWidth="2.1"
      strokeLinejoin="round"
    />
    <path d="M12 10.5h8M12 15h8" stroke="#1c2338" strokeWidth="2" strokeLinecap="round" />
    <circle cx="21.5" cy="21.5" r="4.4" fill="#FF7A1F" stroke="#1c2338" strokeWidth="1.6" />
    <path d="M21.5 19.6v3.8M20.2 21.5h2.6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const PayIcon = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="11" stroke="#1c2338" strokeWidth="2.1" />
    <path d="M12 11.5 16 17l4-5.5M16 17v5M12.8 19h6.4" stroke="#1c2338" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const RulesIcon = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect x="7" y="4.5" width="18" height="23" rx="3" stroke="#1c2338" strokeWidth="2.1" />
    <path d="M11.5 11h4M11.5 16h4M11.5 21h4M19 10.2l1.7 1.7 3-3.2" stroke="#1c2338" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="21.6" cy="21.6" r="3.6" fill="#FF7A1F" stroke="#1c2338" strokeWidth="1.5" />
  </svg>
)

export const LoanIcon = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M11 10c-3 1.7-5 4.7-5 8.4 0 5.2 4.3 9.1 10 9.1s10-3.9 10-9.1c0-3.7-2-6.7-5-8.4" stroke="#1c2338" strokeWidth="2.1" strokeLinecap="round" />
    <path d="M11 10c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" stroke="#1c2338" strokeWidth="2.1" strokeLinecap="round" />
    <path d="M12 16.5h8M16 13.5v8M13.6 15.2c0-1 .9-1.6 2.4-1.6s2.4.7 2.4 1.7c0 2.4-4.8 1.3-4.8 3.7 0 1 .9 1.8 2.4 1.8s2.4-.7 2.4-1.7" stroke="#1c2338" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

export const RecruitIcon = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="13" cy="11" r="5" stroke="#1c2338" strokeWidth="2.1" />
    <path d="M4.5 27c0-5 3.8-8.5 8.5-8.5 1.5 0 2.9.3 4.1 1" stroke="#1c2338" strokeWidth="2.1" strokeLinecap="round" />
    <path d="M20 20h6c1.7 0 3 1.3 3 3v4.5h-6" stroke="#1c2338" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24.5" cy="17" r="3.2" fill="#FF7A1F" />
  </svg>
)

export const ShieldCheck = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 3.2c3 2 6.1 3.3 9.4 3.6v8.4c0 6.2-3.8 10.3-9.4 13.3-5.6-3-9.4-7.1-9.4-13.3V6.8c3.3-.3 6.4-1.6 9.4-3.6Z" fill="url(#scg)" />
    <path d="m11.6 15.6 3.2 3.2 5.8-6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="scg" x1="6.6" y1="3.2" x2="25.4" y2="28.5">
        <stop stopColor="#4B7BFF" />
        <stop offset="1" stopColor="#2F55E8" />
      </linearGradient>
    </defs>
  </svg>
)

export const CarDoorIcon = ({ size = 24, color = '#FC5201' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <rect x="5" y="7" width="18" height="14" rx="3.5" stroke={color} strokeWidth="2.1" />
    <circle cx="14" cy="14" r="3" stroke={color} strokeWidth="2" />
  </svg>
)

export const PhoneIcon = ({ size = 26, color = '#1c2338' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path
      d="M9.2 4.8c.7-.7 1.8-.7 2.5 0l2.3 2.3c.7.7.7 1.8 0 2.5l-1.4 1.4c-.4.4-.5 1-.2 1.5a13.8 13.8 0 0 0 5 5c.5.3 1.1.2 1.5-.2l1.4-1.4c.7-.7 1.8-.7 2.5 0l2.3 2.3c.7.7.7 1.8 0 2.5l-1.2 1.2c-1.1 1.1-2.7 1.5-4.2 1-4.4-1.4-8.2-4.2-11-8-1.4-2.2-3.7-4.8-2.6-7l1.1-1.1Z"
      stroke={color}
      strokeWidth="2.1"
      strokeLinejoin="round"
    />
  </svg>
)

export const Shield110 = ({ size = 26, color = '#1c2338' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path
      d="M14 3.2c2.4 1.7 4.9 2.7 7.6 3v6.8c0 5-3.1 8.4-7.6 10.8-4.5-2.4-7.6-5.8-7.6-10.8V6.2c2.7-.3 5.2-1.3 7.6-3Z"
      stroke={color}
      strokeWidth="2.1"
      strokeLinejoin="round"
    />
    <text x="14" y="15.4" textAnchor="middle" fontSize="7.4" fontWeight="700" fill={color} fontFamily="sans-serif">
      110
    </text>
  </svg>
)

export const XSquare = ({ size = 26, color = '#1c2338' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <rect x="3.6" y="3.6" width="20.8" height="20.8" rx="4" stroke={color} strokeWidth="2.1" />
    <path d="m10 10 8 8M18 10l-8 8" stroke={color} strokeWidth="2.1" strokeLinecap="round" />
  </svg>
)

export const ShareArrow = ({ size = 26, color = '#1c2338' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path
      d="M20.5 10.5c1.7 0 3-1.4 3-3s-1.3-3-3-3-3 1.4-3 3c0 .3 0 .6.1.9L9.7 12a3 3 0 0 0-2.2-.9c-1.7 0-3 1.4-3 3s1.3 3 3 3c.9 0 1.7-.4 2.2-1l7.9 3.6c-.1.3-.1.6-.1.9 0 1.6 1.3 3 3 3s3-1.4 3-3-1.3-3-3-3c-.9 0-1.7.4-2.2 1l-7.9-3.7c.1-.3.1-.5.1-.8 0-.3 0-.5-.1-.8l7.9-3.6c.5.5 1.3.9 2.2.9Z"
      stroke={color}
      strokeWidth="1.9"
      strokeLinejoin="round"
    />
  </svg>
)

export const MoreDots = ({ size = 26, color = '#1c2338' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="6.5" r="1.9" fill={color} />
    <circle cx="14" cy="14" r="1.9" fill={color} />
    <circle cx="14" cy="21.5" r="1.9" fill={color} />
  </svg>
)

export const ChatDots = ({ size = 24, color = '#1c2338' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path
      d="M14 4.2c-5.4 0-9.7 3.7-9.7 8.3 0 2.7 1.5 5.1 3.8 6.6l-.8 3.7c-.1.6.5 1.1 1.1.8l4.1-2.2c.5.1 1 .1 1.5.1 5.4 0 9.7-3.7 9.7-8.3S19.4 4.2 14 4.2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="9.8" cy="12.5" r="1.3" fill={color} />
    <circle cx="14" cy="12.5" r="1.3" fill={color} />
    <circle cx="18.2" cy="12.5" r="1.3" fill={color} />
  </svg>
)

export const OrangeShieldPlus = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path
      d="M16 3.2c3 2 6.1 3.3 9.4 3.6v8.4c0 6.2-3.8 10.3-9.4 13.3-5.6-3-9.4-7.1-9.4-13.3V6.8c3.3-.3 6.4-1.6 9.4-3.6Z"
      fill="url(#osp)"
    />
    <path d="M16 10.2v8M12 14.2h8" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    <defs>
      <linearGradient id="osp" x1="6.6" y1="3.2" x2="25.4" y2="28.5">
        <stop stopColor="#FF8A2A" />
        <stop offset="1" stopColor="#F94D00" />
      </linearGradient>
    </defs>
  </svg>
)

export const BellRing = ({ size = 26, color = '#1c2338' }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path
      d="M14 3.8c-3.5 0-6 2.6-6 6v3.9l-1.9 3.8c-.3.7.2 1.4.9 1.4h14c.7 0 1.2-.7.9-1.4L20 13.7V9.8c0-3.4-2.5-6-6-6Z"
      stroke={color}
      strokeWidth="2.1"
      strokeLinejoin="round"
    />
    <path d="M11.6 19.6a2.5 2.5 0 0 0 4.8 0" stroke={color} strokeWidth="2.1" strokeLinecap="round" />
  </svg>
)

export const CouponStatIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path d="M4 8.5c0-.8.7-1.5 1.5-1.5h17c.8 0 1.5.7 1.5 1.5v3a1.9 1.9 0 0 0 0 5v3c0 .8-.7 1.5-1.5 1.5h-17c-.8 0-1.5-.7-1.5-1.5v-3a1.9 1.9 0 0 0 0-5v-3Z" fill="url(#cs1)" />
    <path d="M10 11.2v1.4M10 15.4v1.4M13 11.2v1.4M13 15.4v1.4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    <path d="m17 11.2 4 5.4M17 15.4l4-4.2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    <defs>
      <linearGradient id="cs1" x1="4" y1="7" x2="24" y2="21">
        <stop stopColor="#FF8A2A" />
        <stop offset="1" stopColor="#FC5201" />
      </linearGradient>
    </defs>
  </svg>
)

export const CoinIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <ellipse cx="11" cy="19.5" rx="7.5" ry="3.6" fill="#F6B93B" />
    <rect x="3.5" y="14.5" width="15" height="5" fill="#FFCF6E" />
    <ellipse cx="11" cy="14.5" rx="7.5" ry="3.6" fill="#FFD97E" />
    <ellipse cx="18" cy="12.5" rx="6.5" ry="3.2" fill="#F6B93B" />
    <rect x="11.5" y="8.2" width="13" height="4.4" fill="#FFCF6E" />
    <ellipse cx="18" cy="8.2" rx="6.5" ry="3.2" fill="#FFD97E" />
  </svg>
)

export const RedPacketIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <rect x="5.5" y="4.5" width="17" height="19" rx="3.2" fill="url(#rp1)" />
    <path d="M14 9.5c-2 1.2-3.2 2.5-3.2 3.9 0 1.8 1.4 2.8 3.2 2.8s3.2-1 3.2-2.8c0-1.4-1.2-2.7-3.2-3.9Z" fill="#fff" opacity="0.85" />
    <defs>
      <linearGradient id="rp1" x1="5.5" y1="4.5" x2="22.5" y2="23.5">
        <stop stopColor="#FF7A6B" />
        <stop offset="1" stopColor="#F0432C" />
      </linearGradient>
    </defs>
  </svg>
)

export const GiftStatIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <rect x="5" y="11" width="18" height="12.5" rx="2" fill="url(#gs1)" />
    <rect x="3.8" y="8.2" width="20.4" height="4.6" rx="1.6" fill="#FF8A2A" />
    <rect x="12.2" y="8.2" width="3.6" height="15.3" fill="#FFE3C4" />
    <path d="M14 8c-2.6 0-4-1.2-4-2.6C10 4.2 11 3.4 12.2 3.8c1.2.4 1.8 2 1.8 4.2Zm0 0c2.6 0 4-1.2 4-2.6 0-1.2-1-2-2.2-1.6-1.2.4-1.8 2-1.8 4.2Z" fill="#FFB15C" />
    <defs>
      <linearGradient id="gs1" x1="5" y1="11" x2="23" y2="23.5">
        <stop stopColor="#FF9333" />
        <stop offset="1" stopColor="#FB5A00" />
      </linearGradient>
    </defs>
  </svg>
)

export const CrownIcon = ({ size = 22, color = '#F9571F' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 8.2 6.2 11 12 5l5.8 6L21 8.2 19 17H5L3 8.2Z" fill={color} />
    <rect x="5" y="18.4" width="14" height="1.9" rx="0.9" fill={color} />
    <circle cx="12" cy="11.4" r="1.4" fill="#fff" />
  </svg>
)

export const ShieldCheckOrange = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2.6c2.2 1.4 4.4 2.4 6.8 2.6v6.2c0 4.5-2.8 7.6-6.8 9.6-4-2-6.8-5.1-6.8-9.6V5.2c2.4-.2 4.6-1.2 6.8-2.6Z" fill="url(#sco)" />
    <path d="m8.8 11.8 2.4 2.4 4.2-4.6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="sco" x1="5.2" y1="2.6" x2="18.8" y2="21">
        <stop stopColor="#FF8A2A" />
        <stop offset="1" stopColor="#F94D00" />
      </linearGradient>
    </defs>
  </svg>
)

export const GiftSmall = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="4" y="9.5" width="16" height="10" rx="1.8" fill="url(#gsm)" />
    <rect x="3" y="7" width="18" height="3.8" rx="1.3" fill="#FF8A2A" />
    <rect x="10.6" y="7" width="2.8" height="12.5" fill="#FFE3C4" />
    <path d="M12 7c-2.2 0-3.4-1-3.4-2.2 0-1 .8-1.7 1.8-1.3C11.4 3.9 12 5.3 12 7Zm0 0c2.2 0 3.4-1 3.4-2.2 0-1-.8-1.7-1.8-1.3C12.6 3.9 12 5.3 12 7Z" fill="#FFB15C" />
    <defs>
      <linearGradient id="gsm" x1="4" y1="9.5" x2="20" y2="19.5">
        <stop stopColor="#FF9333" />
        <stop offset="1" stopColor="#FB5A00" />
      </linearGradient>
    </defs>
  </svg>
)

export const AvatarPlaceholder = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="28" fill="url(#apg)" />
    <circle cx="28" cy="22" r="9.2" fill="#fff" />
    <path d="M11.5 47c1.6-8.2 8.2-12.6 16.5-12.6S42.9 38.8 44.5 47" fill="#fff" />
    <defs>
      <linearGradient id="apg" x1="0" y1="0" x2="56" y2="56">
        <stop stopColor="#FFA45C" />
        <stop offset="1" stopColor="#FC6A1B" />
      </linearGradient>
    </defs>
  </svg>
)
