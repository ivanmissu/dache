# 福利打车 · 前端界面

根据 `resources/` 目录中的设计图还原的打车 App 移动端 H5 界面（React + Vite + Tailwind CSS）。

## 页面

| 设计图 | 路由 | 说明 |
| --- | --- | --- |
| 首页（增加底部导航栏版） | `/` | 仿地图、目的地气泡、优惠券专区、底部导航 |
| 选择上车点页 | `/pickup` | 搜索、设置家/公司/地图选点、推荐上车点 |
| 选择下车点页 | `/dropoff` | 途经点、为你推荐、火车站进站口选择 |
| 车型选择页（精简排版竖版） | `/cars` | 路线地图、车型单选、「智能勾选」态 |
| 车型选择多选态（加价格筛选条版） | `/cars`（点「价格筛选」） | 价格筛选滑条、车型多选 |
| 呼叫司机中页 | `/calling` | 寻找司机动效、追加车型列表 |
| 司机即将到达页（绿色新能源车牌） | `/arriving` | 司机路线、聊天、车牌、操作栏 |
| 订单已取消页 | `/cancelled` | 起终点图钉、订单信息、重新呼叫 |
| 订单列表页（去掉分类标签版） | `/orders` | 订单标签、打车/顺风车订单卡片 |
| 我的个人中心页 | `/profile` | 会员卡、券/积分、行程、服务与工具 |

## 交互流程

首页 → 选择上车点/下车点 → 车型选择（可切换精简/多选两种状态）→ 呼叫司机中 → 司机即将到达 → 取消订单 → 订单已取消 → 重新呼叫；底部导航可在 首页 / 订单 / 我的 之间切换。

## 开发

```bash
npm install
npm run dev      # 本地开发（手机上是全屏 H5；桌面浏览器里显示成一台手机的大小，方便预览）
npm run build    # 生产构建
```

## 整体缩放比例

界面按 iPhone 的比例整体缩小到设计稿的 **90%**（文字、图标、按钮、间距一起等比缩放，各机型上元素大小一致）。

- 调整比例只需要改一处：`src/index.css` 里的 `html { font-size: 90%; }`（`100%` = 设计稿原始大小）。
- 原理：样式里的 `px` 都按设计稿书写，构建时由 `postcss-pxtorem`（见 `vite.config.js`）统一转成 `rem`。
- 行内 `style` 和 SVG 的 `width / height` 不经过 PostCSS，需要用 `src/lib/rem.js` 的 `rem()` 手动转换，否则不会跟着缩放。
- 输入框字号缩放后不能小于 16px，否则 iOS 聚焦时会自动放大页面。

## 图片资源

- `resources/assets-original/`：原图（1408×768 PNG，每张 1MB 左右），**不会**被打包上线。
- `public/assets/`：线上实际使用的 WebP，尺寸为页面显示尺寸的 **2 倍**，8 张合计约 15KB。
- 换图流程：替换 `resources/assets-original/` 里的原图 → 执行 `npm run optimize:images`（需要本机安装 ImageMagick）。
- 首屏（首页）只有 `banner-gift.webp` 一张图，且已在 `index.html` 里 `preload`；车型列表、个人中心空状态等屏外图片用 `loading="lazy"` 延迟加载。

## 性能

- 路由级代码分割：入口只同步打包首页，其余 8 个页面按需分包加载（`React.lazy`）；`node_modules`（react / react-dom / react-router）单独拆成 `vendor` chunk，便于浏览器长期缓存。
- 首屏渲染完成后，利用浏览器空闲时间（`requestIdleCallback`）预取其余路由的 chunk，导航时几乎是瞬时切换。
- 图标均为手绘 SVG，随各页面 chunk 按需引入（tree-shaken），没有整包图标库。
- 图片均为定宽定高的 WebP + 写明 `width`/`height`，避免加载时布局抖动（CLS）。
- 常见首屏体积：约 71 KB gzip（其中 vendor ≈ 53 KB），另有一个 3.5 KB 的首屏图片。

## 说明

- 地图为 SVG 手绘仿地图（无需地图 SDK / API Key），包含路网、绿地、POI 标注、车辆与路线覆盖层。
- 图标均为手绘 SVG；横幅礼盒、车型图片、司机头像、空状态插画为生成的静态素材。
- 字体只用系统字体（iPhone 上为苹方），不加载网页字体。
- 页面作为 H5 直接在浏览器 / 微信里打开，不再绘制 iOS 状态栏和底部 Home 横条；在全屏 WebView 里会自动按安全区（`env(safe-area-inset-*)`）留白。
