import React, { ReactNode } from 'react';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import './index.less';
interface RootProps {
  type?: 'small' | 'large';
  children?: ReactNode;
  onClick?: any,
  text?: string,
  btnText?: string,
  className?: string
}
export default function Error({ btnText, text, type, children, onClick, className }: RootProps) {
  const onHandleClick = () => {
    onClick && onClick()
  }
    return (
      <div className='error-box'>
        <div >
          <img
            className='error-img'
            src='https://imagev2.xmcdn.com/storages/f8ba-audiofreehighqps/E9/6D/CKwRIDoE1sOVAAAInQDO8ZT1.png'
          />
        </div>
        {children ? (
          children
        ) : (
          <>
            <div  className='text'>
              {text || '当前您还没有专辑～～'}
            </div>
            <div>
              {/* <div className='button' onClick={onHandleClick}>{btnText || '创建作品'}</div> */}
            </div>
          </>
        )}
      </div>
    );
  }
