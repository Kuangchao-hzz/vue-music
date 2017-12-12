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
