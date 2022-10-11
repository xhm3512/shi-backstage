import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './less/index.less';
import store from './store';
import Layouts from './layouts';
const env = process.env.NODE_ENV || 'development'; //


// console.log(process, env);
if ((module as any).hot) {
  (module as any).hot.accept();
}
ReactDOM.render(
  <Provider store={store}>
    <Layouts />
  </Provider>,
  document.getElementById('root'),
);
