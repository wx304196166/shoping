import {
  createStore,
  applyMiddleware
} from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducer'; // 所有的reducer

// 创建store
const store = createStore(RootReducer, applyMiddleware(ReduxThunk));
console.log(store);

export default store;