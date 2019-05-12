import * as config from '../config/config.js'

export default class YeUtils {
  static version = 'v0.0.1'
  static author = config.AUTHOR
  
  constructor(){}

  static formatTime(date = null) {
    date = date || new Date();
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(n => {
        n = n.toString()
        return n[1] ? n : '0' + n
    }).join('/') + ' ' + [hour, minute, second].map(n => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }).join(':')
  }

  static test(){
    return this.author;
  }
}

