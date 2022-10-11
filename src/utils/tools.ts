import moment from 'moment';
/**
 * 获取某年某月天数
 * @param {Date} date 年月 PS: 2022-03
 */
const getMonthDay = (date: string) => {
  //   getMonthDay('2022-03') // 31
  // getMonthDay('2022-02-17 13:28:01') // 28
  let year = Number(date.slice(0, 4))
  let month = Number(date.slice(5, 7))
  let days = new Date(year, month, 0).getDate()
  return days
}



// 获取地址栏Url参数
const getUrlParams = () => {
  const urllis = location.href.split('?')
  const theRequest = new Object();
  urllis.forEach(item => {
    const url = '?' + item; //获取url中"?"符后的字串
    const str = url.substr(1);
    const strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1];
    }
  })

  return theRequest;
};

export {
  getMonthDay,
  getUrlParams

}