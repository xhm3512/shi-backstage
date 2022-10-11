import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
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
        <a>薪酬</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: '大陈阿姨',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['大专学历', '菲式保姆'],
  },
  {
    key: '2',
    name: '小陈阿姨',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['驾驶证', '12年经验'],
  },
  
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;