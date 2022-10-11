import React, { useState } from 'react';
import moment from 'moment';
import {
  Button, Modal,
  Checkbox,
  Col,
  Form,
  Input,
  Radio,
  Rate,
  Row,
  TimePicker,
  Select,
  Slider,
  Switch,
} from 'antd'
const format = 'HH';
const { Option } = Select;
// 加载扩展模块
export default function ({ info }: { info: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };


  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onNewTaskClick = () => {
    setIsModalOpen(true);
  }
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return <>
    <Button type='primary' onClick={onNewTaskClick}>新建任务</Button>
    <Modal title='新建预约任务' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        name='validate_other'
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5,
        }}
      >
        <Form.Item name='type' label='预约类型'>
          <Radio.Group>
            <Radio value='a'>日常保洁</Radio>
            <Radio value='b'>深度保洁</Radio>
            <Radio value='c'>开荒保洁</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name='time' label='预约时间'>
          <TimePicker.RangePicker format={format} />
        </Form.Item>
        <Form.Item name='local' label='预约地址'>
          <Input />
        </Form.Item>
        <Form.Item name='phone' label='预约电话'>
          <Input />
        </Form.Item>
        <Form.Item name='people' label='接待阿姨'>
        <Select
            placeholder='请选择接待人'
            // onChange={onGenderChange}
            allowClear
          >
            <Option value='male'>小明</Option>
            <Option value='female'>小红</Option>
            <Option value='other'>小姚</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  </>
}
