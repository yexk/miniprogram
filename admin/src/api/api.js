import Axios from './axios.js'

const BaseUrl = ''

const Server = {
  // 注册用户
  register: data => Axios.post(BaseUrl + '/register', data),
  // 登录用户
  login: data => Axios.post(BaseUrl + '/login', data),
  // 上传图片
  upload: data => Axios.post(BaseUrl + '/upload', data)
}
export default Server
