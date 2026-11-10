#!/usr/bin/env bash
# 把 resources/assets-original/ 里的原图压缩成手机端用的 WebP，输出到 public/assets/。
# 输出尺寸 = 页面上的显示尺寸 × 2（适配 iPhone Plus/Pro 的 3 倍屏时肉眼也基本无差别，
# 同时体积比 ×3 再小约一半）。依赖 ImageMagick（convert）。
# 用法：npm run optimize:images
set -euo pipefail
cd "$(dirname "$0")/.."

SRC=resources/assets-original
OUT=public/assets
mkdir -p "$OUT"

# name  输出宽x高  [center-crop 成正方形]
resize() {
  local name=$1 size=$2 square=${3:-}
  local args=()
  if [ "$square" = "square" ]; then
    args+=(-gravity center -crop 1:1 +repage)
  fi
  convert "$SRC/$name.png" "${args[@]}" -resize "$size" -strip \
    -quality 82 -define webp:method=6 "$OUT/$name.webp"
  printf '%-18s %8s -> %6s bytes\n' "$name" \
    "$(wc -c < "$SRC/$name.png")" "$(wc -c < "$OUT/$name.webp")"
}

# 车型列表缩略图：显示 62×34
resize car-economy   124x68
resize car-comfort   124x68
resize car-suv       124x68
resize car-business  124x68
# 司机到达页车辆图：显示 128×70
resize car-blue-suv  256x140
# 司机头像：显示 42×42 圆形（Arriving 页最大用到 42px）
resize driver-avatar 84x84 square
# 首页横幅礼盒：显示高度 63
resize banner-gift   x126
# 个人中心空行程插画：实际渲染 158×86（插画是按高度排满 86px 的 object-contain）
resize empty-trip    316x172
