import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './loginReducer';

const RootReducer = combineReducers({
  routing: routerReducer,
  login: loginReducer, // 这里的命名，关系到container中取state对应的reducer的名字
});

export default RootReducer;