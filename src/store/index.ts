import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const env = process.env.NODE_ENV; //获取环境变量
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let enhancer = composeEnhancers(applyMiddleware(thunk, logger));
if (env === 'production')  enhancer=composeEnhancers(applyMiddleware(thunk));
export default createStore(rootReducer, enhancer);
