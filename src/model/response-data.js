import requestData from "./request-data";

const responseData = path => {
  try {
    return requestData(path).then(response => response.data);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(`can not response data:${error}`);
    }
    return null;
  }
};

export default responseData;
