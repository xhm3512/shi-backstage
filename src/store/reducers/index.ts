import { combineReducers } from 'redux';
import getHomeData from './home'
const reducer = combineReducers({
  getHomeData,
  // getWorksData,
  // getWorkOperationData,
  // getCreateData,
  // getMessageData,
});

export default reducer;
