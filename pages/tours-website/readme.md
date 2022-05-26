# UI

# CSS Remark

- 防止動畫抖動： `backface-visibility: hidden`
- 圖片裁切與遮罩：`background-clip`
- 漸層：`background-image: linear-gradient()`
- 改變圖片形狀：`shape-outside`
- 多邊形：`clip-path: polygon()`
- 混合背景圖：`background-blend-mode`
- 多行(斷行)時，每一行維持原本單行的所有樣式：`box-decoration-break`
- 物化效果等濾淨：`filter`
- 置換元素的內容填入的位置及大小：`object-fit` / `object-position`
- 設定文字為多欄：`column-count`
- 瀏覽器為英文時英文字換行自動補上`-`：`hyphens`

# Effect Remark
- 翻轉效果 `card__side`
- 字體漸層與skew `heading-secondary`

# Resopnsive Image
1. `picture` 標籤內塞入 `source` 與 `img` 標籤，`source` 內指定 `media` 屬性，預設會先顯示 `source` 圖片，在超過 `media` 範圍後會自動切換為 `img` 的圖片

# Reference
- https://easings.net/
- https://cubic-bezier.com/
- https://cythilya.github.io/2018/08/24/responsive-images/