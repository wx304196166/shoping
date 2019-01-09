import request from '../utils/request'

//登录
export function loginPC(username, password, type = 1) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password,
      type
    }
  })
}
//检查用户名是否存在
export function checkName(username, type = 1) {
  return request({
    url: `/user/check/${username}/${type}`,
    method: 'get'
  })
}
//注册
export function registerCustom({username, password, name, phone}) {
  return request({
    url: `/user/createCustomer`,
    method: 'post',
    data: {
      username,
      password,
      name,
      phone
    }
  })
}