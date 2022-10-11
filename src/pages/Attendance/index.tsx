import React, { useState } from 'react';
import { Row, Col, Input, Form, Button, Select } from 'antd';
const { Option } = Select;
import moment from 'moment';
import { getMonthDay } from '@/utils/tools'
import SearchList from '@/components/SearchList'
import Tabel from './Table'
import './index.less';
// 加载扩展模块
export default function () {
 
  return <div>
    <Row justify='space-between'>
      <Col>
        {/* <NewTask info={{ month: chocieMonth, year: chocieYear }} /> */}
      </Col>
      <Col>
       <SearchList/>
      </Col>
    </Row>
    <Tabel/>
  </div>
}
