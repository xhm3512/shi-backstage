import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
import { MenuSider } from '@/constants'
import { getUrlParams } from '@/utils/tools'
import RouterApp from '../../router'
import './index.less'
export default withRouter((props) => {
  const { pathname } = props.location;
  const { year, month, day, time } = getUrlParams();
  const tempPathname = pathname === '/' ? '/rostering' : pathname;

  const getBreadcrumb = () => {
    let tempBreadcrumb: any = [];
    if (pathname === '/rosteringDetail') {
      return [
        { label: '预约管理', hash: '#/appointment',key:'appointment' },// 排班表
        { label: '排班表', hash: '#/rostering', link: '#/rostering' },// 
        { label: `${year}-${month}-${day}${time ? `:${time}:00` : ''}` },// 
      ]
    }
    MenuSider.forEach(item => {
      item.children.forEach(sub => {
        if (`/${sub.hash}` === tempPathname) {
          tempBreadcrumb = [
            { label: item.label, hash: item.hash,key:item.key },
            { label: sub.label, hash: sub.hash }
          ]
        }
      })
    })
    return tempBreadcrumb;
  }
  const onClick = (val: any) => {
    window.location.hash = val.key;
  }
  const onLinkClick = (link) => {
    if (link) {
      window.location.hash = link;
    }
  }
  const breadcrumbLists= getBreadcrumb()
  return <Layout >
    {/* <div className='layout-box'>eee</div> */}
    <Header className='header'>
      <div className='logo' />
      <div>管理平台</div>
    </Header>
    <Layout>
      <Sider width={200} className='site-layout-background'>
        <Menu
          mode='inline'
          defaultSelectedKeys={[tempPathname]}
          defaultOpenKeys={[breadcrumbLists[0].key]}
          style={{ height: '100%', borderRight: 0 }}
          items={MenuSider}
          onClick={onClick}
        />
      </Sider>
      <Layout className='wrap-content' >

        <Content
          className='site-layout-background'
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Breadcrumb className='breadcrumb-box'>
            {breadcrumbLists.map(item => <Breadcrumb.Item key={item.label} onClick={() => onLinkClick(item.link)}>{item.label}</Breadcrumb.Item>)}
          </Breadcrumb>
          <div className='router-box'>
            <RouterApp />
          </div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
})
