import axios from "axios";

const reqeustData = path => {
  try {
    return axios.get(path);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(`can not request data:${error}`);
    }
    return null;
  }
};

export default reqeustData;
