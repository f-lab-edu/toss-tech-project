import { instance } from "./axios";

const loadData = async path => {
  try {
    const response = await instance.get(path);
    return response.data;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(`loadData 함수에서 에러 발생:${error}`);
    }
    return null;
  }
};

export default loadData;
