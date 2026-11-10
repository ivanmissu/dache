#!/usr/bin/env bash
# 把 resources/assets-original/ 里的原图压缩成手机端用的 WebP，输出到 public/assets/。
# 输出尺寸 = 页面上的显示尺寸 × 3（适配 iPhone 3 倍屏）。依赖 ImageMagick（convert）。
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
resize car-economy   186x102
resize car-comfort   186x102
resize car-suv       186x102
resize car-business  186x102
# 司机到达页车辆图：显示 128×70
resize car-blue-suv  384x210
# 司机头像：显示 42×42 圆形
resize driver-avatar 126x126 square
# 首页横幅礼盒：显示高度 63
resize banner-gift   348x190
# 个人中心空行程插画：显示 158×86
resize empty-trip    474x258
