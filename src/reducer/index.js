import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/* 这里是我们自定义的各种reducer */
import loginReducer from './loginReducer'; // 这个稍后创建

/* 利用官方提供的combineReducers将所有reducer组合成一个 */
const RootReducer = combineReducers({
  // 注意一定要加上routing: routerReducer 这是用于redux和react-router的连接
  routing: routerReducer,
  // 其他的reducers
  login: loginReducer, // 这里的命名，关系到container中取state对应的reducer的名字
});

export default RootReducer;