/* eslint-disable no-unused-vars */
/*
 * @Description:异步加载通用组件
 * @Author: zf
 * @Date: 2019-12-30 18:38:01
 * @LastEditTime : 2019-12-30 20:28:35
 * @LastEditors  : zf
 */
import React from 'react';
import Loadable from 'react-loadable';
import { Row } from 'antd';
import Loading from '@/components/Loading';
import './index.less'
// 通用的过场组件
const loadingComponent = () => <Row
align='middle'
className='router-loding-box'
>
<Loading />
</Row>;

// 过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader: any, loading = loadingComponent) =>
  Loadable({
    loader,
    loading,
  });
