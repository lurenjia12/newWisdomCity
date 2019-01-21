import axios from 'axios'
import { Message } from 'element-ui'
import {
  SUCCESS,
  NEED_RELOGIN,
  NEED_LOGIN,
  NO_AUTHORIZATION
} from '@/constants/response-code'

const router = require('@/router')

axios.interceptors.request.use(
  function (config) {
    if(!config.url) {
      console.error('请求出错' + location.href)
    }
    config.url = api + config.url
    if (config.method === 'get') {
      if (!config.params) {
        config.params = {}
      }
      config.params._ = new Date().getTime()
    }

    // 判断是否存在token，如果存在，则为每个header都加上token
    if(window.localStorage.getItem('accessToken')) {
      config.headers.Authorization = window.localStorage.getItem('accessToken')
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }

)

axios.interceptors.response.use(
  response => {
    // 全局错误提示
    // debugger
    // if (response.data.code !== SUCCESS) {
    //   Message.warning(response.data.message)
    // }
    if (response.data.code === NEED_RELOGIN || response.data.code === NEED_LOGIN || response.data.code === NO_AUTHORIZATION) {
      // 302 401 403 需要登录
      // router.default.push('/login')
    }
    return response.data
  },
  error => {
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      Message.error('请求超时')
    }
    if (error && error.response) {
      let str = '出现网络错误,请重试'
      switch (error.response.status) {
        case 400:
          str = '请求错误'
          break
        case 401:
          str = '请登录'
          break
        case 403:
          str = '未授权'
          break
        case 404:
          str = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          str = '请求超时'
          break
        case 500:
          str = '服务器内部错误'
          break
        case 501:
          str = '服务未实现'
          break
        case 502:
          str = '网关错误'
          break
        case 503:
          str = '服务不可用'
          break
        case 504:
          str = '网关超时'
          break
        case 505:
          str = 'HTTP版本不受支持'
          break
        default:
      }
      // if (process.env.NODE_ENV === 'production') {
      //   // 登录页不做跳转处理咯
      //   if (window.location.href.indexOf('login') !== -1) {
      //   } else if(error.response.status === NEED_RELOGIN || error.response.status === NEED_LOGIN || error.response.status === NO_AUTHORIZATION){
      //     router.default.push('/login')
      //   }else{
      //     router.default.push({
      //       name: 'Error',
      //       params: {
      //         statusCode: error.response.status,
      //         message: str
      //       }
      //     })
      //   }
      // }
      Message.error(str)
    } else {
      Message.error('出现网络错误,请重试')
    }
    return Promise.reject(error.response && error.response.data)
  }
)

export const $http = {
  get(url, params, config = {}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params,
        ...config
      }).then((res) => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  },
  post(url, data, config = {}) {
    let isFormData = Object.prototype.toString.call(data) === '[object FormData]'
    return new Promise((resolve, reject) => {
      let httConfig = {
        method: 'post',
        url,
        data,
        ...config
      }
      if(isFormData) {
        httConfig.headers = {
          'Content-Type': 'multipart/form-data'
        }
      }
      axios(httConfig).then((res) => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  },
  put(url, data, config = {}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url,
        data,
        ...config
      }).then((res) => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  },
  delete(url, data, config = {}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url,
        data,
        ...config
      }).then((res) => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }
}

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
      value: $http
    })
  }
}


