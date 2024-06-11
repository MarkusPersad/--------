import axios from "axios";

/**
 * 创建一个默认的axios实例，用于发起HTTP请求。
 * 这个实例配置了基本的URL前缀、超时时间和请求头。
 * 它还设置了请求拦截器，用于在每个请求中添加认证令牌。
 */
export const defaultAxios = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

/**
 * 请求拦截器的配置。
 * 在每个HTTP请求发送之前，检查本地存储中的认证令牌。
 * 如果存在令牌，则将其添加到请求头的Authorization字段中。
 *
 * @param {Object} config - axios请求配置对象。
 * @returns {Object} - 返回经过修改的请求配置对象。
 */
defaultAxios.interceptors.request.use( (config)=>{
    const token = localStorage.getItem("Park-Manager")
    if (token){
        config.headers.Authorization= `Bearer ${token}`
    }
    return config
},error => {
    return Promise.reject(error)
})
