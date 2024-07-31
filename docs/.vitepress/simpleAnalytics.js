export default () => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.src = 'https://scripts.simpleanalyticscdn.com/latest.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    const noscript = document.createElement('noscript')
    const img = document.createElement('img')
    img.src = 'https://queue.simpleanalyticscdn.com/noscript.gif'
    img.alt = ''
    img.referrerPolicy = 'no-referrer-when-downgrade'
    noscript.appendChild(img)
    document.body.appendChild(noscript)
  }
}
