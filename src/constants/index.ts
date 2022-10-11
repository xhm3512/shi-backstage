const MenuSider: any['items'] = [{
  title: '预约管理',
  hash: 'appointment',
  children: [
    {
      title: '排班表',
      hash: 'rostering'
    }
  ]
}, {
  title: '客户管理',
  hash: 'customer',
  children: [
    {
      title: '客户列表',
      hash:'customerList'
    }
  ]
}, {
  title: '员工管理',
  hash: 'staff',
  children: [
    {
      title: '出勤管理',
      hash: 'attendance',
    },
    {
      title: '员工列表',
      hash: 'manageList',
    },
    {
      title: '薪酬统计',
      hash: 'salary',
    }
  ]
}].map(
  (item, index) => {
    const key = item.hash;

    return {
      key: `${key}`,
      hash: `${key}`,
      label: ` ${item.title}`,
      children: item?.children.map((subItem, j) => {
        const subKey = subItem.hash;
        return {
          key: `/${subKey}`,
          hash: `${subKey}`,
          label: `${subItem.title}`,
        };
      }),
    };
  },
);
const  workTime= () => {
  return [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
}
const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export { MenuSider,workTime ,data}