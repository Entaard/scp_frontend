import axios from 'axios';
import Promise from 'promise'
import { headerFromLocal } from '../utils/AuthUtils'
import { isDevelopment } from '../configs/EnvConfig'

export function rootUrl() {
  if (isDevelopment()) {
    return "https://localhost:3000/"
  } else {
    return "https://scp-backend.herokuapp.com/"
  }
}

export function configApi() {
  axios.defaults.baseURL = rootUrl();
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Accept'] = 'application/json; version=v1';
  axios.interceptors.request.use(function (config) {
    config.headers = Object.assign(config.headers, headerFromLocal());
    if (isDevelopment()) {
      console.log(config.url)
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  axios.interceptors.response.use(function (response) {
    if (isDevelopment()) {
      console.log(response)
    }
    return response;
  }, function (error) {
    console.log(error.config);
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.data.error.code);
    return Promise.reject(error);
  });
}
