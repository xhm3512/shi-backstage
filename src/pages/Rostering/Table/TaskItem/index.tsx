import React from 'react'
import { Row, Col } from 'antd'
export default ({ itemInfo }: any) => {
  const { day, month, year,time } = itemInfo;
  const onDetailTaskClick = () => {
    window.location.hash = `#/rosteringDetail?year=${year}&month=${month}&day=${day}&time=${time}`
  }
  return <Col className='cursor table-item border' key={day} onClick={onDetailTaskClick}>{day == 14 ? '5任务/3人' : '5任务'}</Col>
}