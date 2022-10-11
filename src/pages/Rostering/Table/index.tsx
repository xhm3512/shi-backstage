
import React from 'react'
import { Row, Col } from 'antd'
import classNames from 'classnames'
import { getMonthDay } from '@/utils/tools'
import { workTime } from '@/constants'
import TaskItem from './TaskItem'
import './index.less'
export default ({ info }: any) => {
  const { year, month } = info;
  const currentmonthDay = getMonthDay(`${year}-${month}`)
  const onDayClick = (day) => {
    window.location.hash = `#/rosteringDetail?year=${year}&month=${month}&day=${day}`
  }
  return <div className='rostering-table-box'>
    <Row wrap={false}>
      <Col className='border'>日期</Col>
      {
        workTime().map(item => <Col className='border' key={item}>{item}:00</Col>)
      }

    </Row>
    {
      [...new Array(currentmonthDay).keys()].map(item => <Row key={item} wrap={false}>
        <Col className='border cursor table-item' onClick={()=>onDayClick(item + 1)}>{month}/{item + 1}</Col>
        {
          workTime().map(time => <TaskItem key={time} itemInfo={{day:item + 1,year,month,time}} />)
        }
      </Row>)
    }
  </div>
}