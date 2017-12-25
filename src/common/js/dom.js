// 为目标dom添加class
export function addClass (el, className) {
  let newClass = el.className === '' ? [] : el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

// 目标dom是否有class
export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

// 设置或者获取元素data属性
export function getData (el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
//
// let elementStyle = document.createElement('div').style
//
// let vendor = (() => {
//   let transformNames = {
//     webkit: 'webkitTransform',
//     Moz: 'MozTransform',
//     O: 'z'
//   }
// })()
