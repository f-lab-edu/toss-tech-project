import axios from "axios";
import { initMocks } from "../mock";
import { URL } from "./url";

const { MAIN, DETAIL, BASE } = URL;

const instance = axios.create({
  baseURL: BASE,
});

instance.interceptors.request.use(config => {
  if (config.url.startsWith(MAIN) || config.url.startsWith(DETAIL)) {
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
      return Promise.reject(`인터셉터하여 응답도중 에러 발생: ${error}`);
    }
  }
});

export default instance;
