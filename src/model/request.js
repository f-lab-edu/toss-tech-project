import axios from "axios";
import { initMocks } from "../mock";
import URL from "./url";

const instance = axios.create({
  baseURL: URL.base,
});

instance.interceptors.request.use(config => {
  if (config.url.startsWith(URL.main) || config.url.startsWith(URL.detail)) {
    initMocks();
    config.baseURL = null;
  }
  return config;
});

instance.interceptors.response.use(async response => {
  try {
    if (response.config.url.startsWith(URL.main)) response.status = 201;
    else if (response.config.url.startsWith(URL.detail)) response.status = 202;
    const result = await response.data;
    return result;
  } catch (error) {
    if (import.meta.env.DEV) {
      if (response.status === 201)
        console.error(
          `${URL.main}요청에 대한 응답을 받는 도중 에러 발생:${error}`,
        );
      else if (response.status === 202)
        console.error(
          `${URL.detail}요청에 대항 응답을 받는 도중 에러 발생:${error}`,
        );
    }
    return Promise.reject(error);
  }
});

export default instance;
