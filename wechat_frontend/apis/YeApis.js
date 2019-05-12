export default class YeApis {
  url = ''
  dataType = 'json'
  header = {}

  constructor(url = '',header = {}){
    this.url = url || 'https://wechat.yexk.cn'
    this.header = header
  }

  getInit(){
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.url+'/api/index/index', //仅为示例，并非真实的接口地址
        success: res => {
          resolve(res)
        },
        fail: error => {
          reject(error)
        }
      })
    })
    
  }

  GET(url,data, header = {}) {
    let _header = Object.assign(this.header, header);

    return new Promise((resolve, reject)=> {
      wx.request({
        url: this.url + url,
        data: data,
        header: _header,
        method: 'GET',
        dataType: this.dataType,
        responseType: 'text',
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  }

  POST(url, data, header = {}) {
    let _header = Object.assign(this.header, header);

    return new Promise((resolve, reject) => {
      wx.request({
        url: this.url + url,
        data: data,
        header: _header,
        method: 'POST',
        dataType: this.dataType,
        responseType: 'text',
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  }

}