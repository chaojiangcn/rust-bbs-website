import axios from 'axios';  

  
const instance = axios.create({  
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // 如果有的话，设置你的 API 基础 URL  
  timeout: 5000, // 设置请求超时时间  
  // ... 其他配置  
});  
  
// 添加请求拦截器（如果需要）  
// instance.interceptors.request.use(function (config) {  
//   // 在发送请求之前做些什么  
//   return config;  
// }, function (error) {  
//   // 对请求错误做些什么  
//   return Promise.reject(error);  
// });  
  
// 添加响应拦截器来处理错误  
instance.interceptors.response.use(  
  function (response) {  
    // 对响应数据做点什么  
    return response;  
  },  
  function (error) {  
    // 对响应错误做点什么  
    if (error.response) {  
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内  
      // 处理 HTTP 错误  
      console.error('HTTP Error:', error.response);  
      // 你可以在这里进行全局错误处理，例如：  
      // 通知用户，或者将错误发送到你的错误跟踪服务  
    } else if (error.request) {  
      // 请求已发出，但没有收到响应  
      // 处理网络错误、请求超时等  
      console.error('Network Error:', error.request);
    } else {  
      // 发生了一些其他事情，在设置请求时触发了错误  
      console.error('Error', error.message);  
    }  
    // 返回一个 rejected promise，以便调用者可以捕获这个错误  
    return Promise.reject(error);  
  }  
);  
  
export default instance;