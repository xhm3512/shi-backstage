import { getTime } from '@/utils/tools';
const sectionAiDetail = (data: Array<any>) => {
  return data.map((item, i) => {
    const { start, end, text } = item;
    const preEnd = Math.floor((data[i - 1]?.end) / 1000);
    const currentStart = Math.floor(start / 1000);
    const _end = Math.floor(end / 1000)
    const _start = preEnd
      ? (currentStart <= preEnd ? preEnd + 1 : currentStart)
      : currentStart;
    // const _start = currentStart;
    return {
      text,
      startAt: _start, //折算成秒
      endAt: _end,
      startSource: start,  //原数据
      endSource: end,
      timeLineStart: getTime(_start), //00:00:31:展示数据
      timeLineEnd: getTime(_end),
    }
  })
}

const dataChapter = (sectionData: Array<any>) => {
  const sectionEnd = sectionData[sectionData.length - 1].endAt
  const sectionStart = sectionData[0].startAt;
  const duration = sectionEnd + 1;

  const arr = [...new Array(duration).keys()];
  // arr.shift()
  const newArr = arr.map(item => {
    const second = item;
    return {
      second: second,
      time: getTime(second),
    }
  })
  return {
    duration,
    arr: newArr,
    sectionStart,
    sectionEnd
  }
}

export {
  sectionAiDetail,
  dataChapter
}