import React from 'react';
import { Spin, Row } from 'antd';
import classNames from 'classnames'
import './index.less';

export default function IndexPage({className,mask}:{className?:string,mask?:boolean}) {
  return (
    <Row className={classNames('loading-box', className, {
      'loading-mask':mask
    })} align='middle' justify='center'>
      <Spin />
    </Row>
  );
}
