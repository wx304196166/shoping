import request from '../utils/request'

export function loginPC(username, password) {
  return request({
    url: `/user/login`,
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function checkName(username) {
  return request({
    url: `/user/check/${username}`,
    method: 'get'
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: {
      pv
    }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}