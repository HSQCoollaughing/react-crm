import api from '../config'
import axios from 'axios'
export default function ask(name, option = {}) {
    //取传进来的用户信息
    let {
        headers,
        data,
        params = {},
        responseType,
        apiCfg = {}
    } = option
    let {
        method,
        url
    } = Object.assign({}, api[name], apiCfg);

    let instance = axios.create({
        // baseURL,
        withCredentials: false
    })
    // 响应中间处理层
    instance.interceptors.response.use(function (response) {
        // 请求成功后 处理在此
        return response.data
    }, function (error) {
        // 请求失败 错误在此
        return Promise.reject(error)
    });

    let promise = instance.request({
        responseType,
        url,
        method,
        headers,
        params,
        data
    })
    return promise
}