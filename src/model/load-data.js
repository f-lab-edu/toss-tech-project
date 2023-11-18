import instance from "./request";

const loadData = async path => {
  try {
    const result = await instance.get(path);
    return result;
  } catch (error) {
    if (import.meta.env.DEV)
      console.error(
        `${path}에서 데이터를 가져오는동안 loadData 함수에서 에러 발생:${error}`,
      );
    return null;
  }
};

export default loadData;
