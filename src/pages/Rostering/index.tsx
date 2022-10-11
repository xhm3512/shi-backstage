import React, { useState } from 'react';
import moment from 'moment';
import { Row, Col,Input, Form, Button, Select } from 'antd';
const { Option } = Select;
import SearchList from '@/components/SearchList'
import Table from './Table'
import NewTask from './NewTask'
import './index.less';
// 加载扩展模块
export default function () {
  const currentYear = moment(new Date()).add('year', 0).format('YYYY');
  const currentMonth = moment(new Date()).add('year', 0).format('MM');
  const [chocieYear, setCurrentYear] = useState(currentYear)
  const [chocieMonth, setCurrentMonth] = useState(currentMonth)

  
  return <div>
    <Row justify='space-between'>
      <Col>
        <NewTask info={{ month: chocieMonth, year: chocieYear }}/>
      </Col>
      <Col>
       <SearchList/>
      </Col>
    </Row>
    <Table info={{ month: chocieMonth, year: chocieYear }} />
  </div>
}
