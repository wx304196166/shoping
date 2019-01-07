import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://192.168.2.82:7001', // api 的 base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    /* if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    } */
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {    
    return response.data
  },
  error => {
    console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)

export default service