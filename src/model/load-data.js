import { instance } from "./axios";

const loadData = async path => {
  try {
    const response = await instance.get(path);
    return response.data;
  } catch (error) {
    console.error(`응답 도중 에러 발생:${error}`);
    return null;
  }
};

export default loadData;
