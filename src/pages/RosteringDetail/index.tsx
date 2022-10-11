import React, { useEffect } from 'react';
import { Space, Table, Tag, Breadcrumb } from 'antd';
import { data } from '@/constants'
import { getUrlParams } from '@/utils/tools'
import './index.less';
// 加载扩展模块
export default () => {
  const {year,month,day,time } = getUrlParams();
  console.log(3454, );
  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const onClick = () => {
    window.location.hash = '#'
  }
  return <div>
    {/* <Breadcrumb>
      <Breadcrumb.Item>预约管理</Breadcrumb.Item>
      <Breadcrumb.Item className='cursor' onClick={onClick}>排班表</Breadcrumb.Item>
      <Breadcrumb.Item>{`${year}-${month}-${day}:${time}:00`}</Breadcrumb.Item>
    </Breadcrumb> */}
    <Table columns={columns} dataSource={data} />
  </div>
}
