// src/utils/imageUpload.js
// Client-side image compression → base64 → stored in Realtime DB (no Storage needed)

const MAX_DIMENSION = 300   // px — small enough for a hexagon avatar
const TARGET_KB     = 80    // aim for under 80KB base64

export async function compressToBase64(file) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)
    img.onload = () => {
      URL.revokeObjectURL(url)
      const canvas = document.createElement('canvas')
      let { width, height } = img

      // Scale down to MAX_DIMENSION on longest side
      if (width > height && width > MAX_DIMENSION) {
        height = Math.round((height * MAX_DIMENSION) / width)
        width  = MAX_DIMENSION
      } else if (height > MAX_DIMENSION) {
        width  = Math.round((width * MAX_DIMENSION) / height)
        height = MAX_DIMENSION
      }

      canvas.width  = width
      canvas.height = height
      canvas.getContext('2d').drawImage(img, 0, 0, width, height)

      // Try descending quality until under TARGET_KB
      tryQuality(canvas, 0.8, resolve, reject)
    }
    img.onerror = reject
    img.src = url
  })
}

function tryQuality(canvas, quality, resolve, reject) {
  const dataUrl = canvas.toDataURL('image/jpeg', quality)
  const kb = Math.round((dataUrl.length * 3) / 4 / 1024)
  if (kb <= TARGET_KB || quality <= 0.3) {
    resolve(dataUrl)
  } else {
    tryQuality(canvas, quality - 0.15, resolve, reject)
  }
}
