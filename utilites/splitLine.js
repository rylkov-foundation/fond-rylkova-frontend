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

export default function splitTextByActualLineWidth (text, container, width) {
  const result = []
  const fakeCanvas = document.createElement('canvas')
  const fakeContext = fakeCanvas.getContext('2d')
  fakeContext.font = getElementFont(container)

  let buffer = ''
  for (const ch of text) {
    const lineWidth = fakeContext.measureText(buffer + ch).width
    if (lineWidth >= container.offsetWidth / 100 * width) {
      result.push(buffer + ch)
      buffer = ''
    } else {
      buffer += ch
    }
  }

  if (buffer.length) {
    result.push(buffer)
  }

  return result
}
