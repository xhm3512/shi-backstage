import React, { useState } from 'react';
import { Row, Col, Input, Form, Button, Select } from 'antd';
const { Option } = Select;
import moment from 'moment';
import './index.less'
// 加载扩展模块
export default function () {
  const currentYear = moment(new Date()).add('year', 0).format('YYYY');
  const currentMonth = moment(new Date()).add('year', 0).format('MM');
  const [chocieYear, setCurrentYear] = useState(currentYear)
  const [chocieMonth, setCurrentMonth] = useState(currentMonth)

  const selectWidth = {
    width: 120
  }
  const onChangeYear = (val) => {
    setCurrentYear(val)

  }
  const onChangeMonth = (val) => {
    setCurrentMonth(`${val}`)

  }
  return <Row justify='space-between' className='form-search-box'>
    <Col>
      {/* <NewTask info={{ month: chocieMonth, year: chocieYear }} /> */}
    </Col>
    <Col>
      <Form
        layout='inline'
        initialValues={{
          year: currentYear,
          month: currentMonth
        }}
      >
        <Form.Item name='year' label='年：' >
          <Select
            {...selectWidth}
            onChange={onChangeYear}
          >
            <Option value='2022'>2022</Option>
            <Option value='2023'>2023</Option>
            <Option value='2024'>2024</Option>
          </Select>
        </Form.Item>
        <Form.Item name='month' label='月：'>
          <Select
            {...selectWidth}
            onChange={onChangeMonth}
          >
            {
              [...new Array(12).keys()].map(item => <Option key={item + 1} value={item + 1}>{item + 1}</Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item name='name' label='名字：'>
          <Input placeholder='请输入名字' />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            查询
          </Button>
        </Form.Item>
      </Form>
    </Col>
  </Row>
}
