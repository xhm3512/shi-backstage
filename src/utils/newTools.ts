
/**
 * typeOf('树哥')  // string
typeOf([])  // array
typeOf(new Date())  // date
typeOf(null) // null
typeOf(true) // boolean
typeOf(() => { }) // function
 * @param obj 
 * @returns 
 */
export const typeOf = function (obj: any) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
