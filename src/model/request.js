import axios from "axios";
import { initMocks } from "../mock";
import { URL } from "./constant";

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
    const result = await response.data;
    return result;
  } catch (error) {
    if (import.meta.env.DEV) {
      if (response.config.url.startsWith(URL.main))
        console.error(
          `${URL.main}요청에 대한 응답을 받는 도중 에러 발생:${error}`,
        );
      else if (response.config.url.startsWith(URL.detail))
        console.error(
          `${URL.detail}요청에 대항 응답을 받는 도중 에러 발생:${error}`,
        );
    }
    return Promise.reject(error);
  }
});

export default instance;
