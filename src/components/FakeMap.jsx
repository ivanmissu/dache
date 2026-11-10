/*
 * FakeMap — hand-drawn SVG map imitating the 高德-style light map in the designs.
 * The base layer draws blocks, roads, a park and labels; overlays (cars, pins,
 * routes, bubbles…) are passed as absolutely-positioned children.
 */

const MAP_THEMES = {
  // pale beige-ish city grid like the home screen
  home: { bg: '#F1F3F7', block: '#F5F7FA', road: '#FFFFFF', mainRoad: '#F9F2DA', park: '#DCEBE9' },
  // cooler, mostly white grid like the car-select screen
  cool: { bg: '#EFF3F7', block: '#F4F8FC', road: '#FFFFFF', mainRoad: '#FAF3E0', park: '#DCEBE9' },
  // green-tinted map like the cancelled-order screen
  green: { bg: '#EFF4EF', block: '#F2F7F2', road: '#FFFFFF', mainRoad: '#F7F3E2', park: '#D9ECD4' },
}

function BaseMap({ theme = 'home', labels = [], dense = false }) {
  const t = MAP_THEMES[theme] || MAP_THEMES.home
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 393 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <rect width="393" height="700" fill={t.bg} />
      {/* city blocks */}
      <rect x="18" y="60" width="120" height="150" fill={t.block} />
      <rect x="170" y="40" width="140" height="120" fill={t.block} />
      <rect x="330" y="80" width="80" height="180" fill={t.block} />
      <rect x="0" y="250" width="110" height="180" fill={t.block} />
      <rect x="140" y="200" width="130" height="130" fill={t.block} />
      <rect x="300" y="300" width="110" height="120" fill={t.block} />
      <rect x="30" y="470" width="150" height="160" fill={t.block} />
      <rect x="220" y="470" width="120" height="200" fill={t.block} />
      <rect x="360" y="460" width="60" height="180" fill={t.block} />
      {/* park */}
      <rect x="280" y="30" width="113" height="120" rx="12" fill={t.park} />
      {dense && <rect x="10" y="560" width="120" height="120" rx="10" fill={t.park} />}
      {/* water strip */}
      <path d="M340 240c20 30 30 80 22 130" stroke="#C9E2EC" strokeWidth="16" strokeLinecap="round" />

      {/* minor roads (white) */}
      <g stroke={t.road} strokeWidth="7" strokeLinecap="round">
        <path d="M-10 120h420" />
        <path d="M-10 240h420" />
        <path d="M-10 360h420" />
        <path d="M-10 480h420" />
        <path d="M-10 610h420" />
        <path d="M80 -10v720" />
        <path d="M150 -10v720" />
        <path d="M235 -10v720" />
        <path d="M310 -10v720" />
        <path d="M-10 660 200 640 420 670" />
      </g>

      {/* main roads (pale yellow) */}
      <g stroke={t.mainRoad} strokeWidth="13" strokeLinecap="round">
        <path d="M-10 300h420" />
        <path d="M196 -10v720" />
      </g>
      <g stroke="#E8DDBB" strokeWidth="0.8" strokeLinecap="round" opacity="0.55">
        <path d="M-10 300h420" />
        <path d="M196 -10v720" />
      </g>

      {/* place labels */}
      {labels.map((l, i) => (
        <text
          key={i}
          x={l.x}
          y={l.y}
          fill={l.color || '#8A94A6'}
          fontSize={l.size || 13}
          fontWeight={l.bold ? 600 : 500}
          fontFamily="PingFang SC, Microsoft YaHei, sans-serif"
          transform={l.rotate ? `rotate(${l.rotate} ${l.x} ${l.y})` : undefined}
        >
          {l.text}
        </text>
      ))}
    </svg>
  )
}

export default function FakeMap({ theme = 'home', labels = [], dense = false, children }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <BaseMap theme={theme} labels={labels} dense={dense} />
      {children}
    </div>
  )
}

/* ---- shared map labels ---- */
export const HOME_LABELS = [
  { text: '北京站', x: 205, y: 32, color: '#6E86C8', bold: true, size: 14 },
  { text: '三里屯', x: 195, y: 82, color: '#97A0B2', size: 13 },
  { text: '朝阳公园', x: 316, y: 72, color: '#2FA36B', bold: true, size: 14 },
  { text: '朝阳路', x: 62, y: 128, color: '#97A0B2', size: 13 },
  { text: '东三环', x: 122, y: 168, color: '#97A0B2', size: 13, rotate: 90 },
  { text: '国贸', x: 292, y: 172, color: '#6E86C8', bold: true, size: 14 },
]
