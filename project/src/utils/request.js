import axios from 'axios'
import { Toast } from 'vant'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,

  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    console.log("我来到了request")
    // do something before request is sent
    return config
    // return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  /**
   * 
   * @param {*} response 
   * @returns
   * 判断response 以2开头，如果以2开头，那么就认为成功，如果不是那么就认为失败
   */
  response => {
    const statusStr = response.status.toString().substr(0, 1)
    const res = response.data

    // 成功，status 以2开头
    if (statusStr !== 0) {
      return res
    } else {

      return res
    }

  },
  error => {
    Toast({
      message: error.message,
      forbidClick: true,
      loadingType: 'spinner',

    })
    return Promise.reject(error)
  }
)

export default service
