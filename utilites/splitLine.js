function getCssProperty (element, property) {
  return window.getComputedStyle(element, null).getPropertyValue(property)
}
function getElementFont (element) {
  let font = ''
  font += getCssProperty(element, 'font-style')
  font += ' ' + getCssProperty(element, 'font-variant')
  font += ' ' + getCssProperty(element, 'font-weight')
  font += ' ' + getCssProperty(element, 'font-size')
  font += ' ' + getCssProperty(element, 'font-family')
  return font
}

export default function splitTextByActualLineWidth (text, container, width = 95) {
  const result = []
  const fakeCanvas = document.createElement('canvas')
  const fakeContext = fakeCanvas.getContext('2d')
  fakeContext.font = getElementFont(container)

  let buffer = ''
  for (const ch of String(text).replace(/\s+/g, ' ')) {
    const lineWidth = fakeContext.measureText(buffer + ch).width
    if (lineWidth >= container.offsetWidth / 100 * width) {
      if (ch === ' ') {
        result.push(buffer)
        buffer = ''
      } else {
        const lastSpaceIndex = (buffer + ch).split('').reverse().indexOf(' ')
        if (lastSpaceIndex === -1) {
          buffer += ch
        } else {
          result.push((buffer + ch).slice(0, -lastSpaceIndex - 1))
          buffer = (buffer + ch).slice(-lastSpaceIndex - 1)
        }
      }
    } else {
      buffer += ch
    }
  }

  if (buffer.length) {
    result.push(buffer)
  }

  return result.map(i => i.trim()).reduce((acc, item) => item ? [...acc, item] : acc, [])
}
