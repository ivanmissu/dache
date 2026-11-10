/*
 * 设计稿 px → rem。
 * className 里的 px 由 postcss-pxtorem 在构建时自动转换；
 * 行内 style 和 SVG 的 width/height 不经过 PostCSS，需要用这个函数手动转，
 * 这样它们才会跟着 html 的 font-size（整体缩放比例）一起缩放。
 */
export const rem = (px) => `${px / 16}rem`
