import axios from "axios"
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.post['apiversion'] = '2.0';
axios.defaults.headers.post['refer'] = 'pc';
axios.defaults.headers.post['x-authentication-token'] = '';
const prefix = "http://122.114.254.63:9090/"

export const ajax = (mehthod ="get" ,url,data,header={}) =>{
  // if(headers[apiversion]&&headers[apiversion] == "1.1"){
  if(header&&header["apiversion"] == "1.1"){
    axios.defaults.headers.post['apiversion'] = '1.1';
  }else {
    axios.defaults.headers.post['apiversion'] = '2.0';
  }
  let promise = new Promise((resolve, reject)=>{
    axios({
      method: mehthod,
      url: prefix + url,
      data: JSON.stringify(data)
    }).then((res)=>{
      resolve(res.data)
    })
  })
  return promise
}
