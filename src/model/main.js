import responseData from "./response-data";

const getMainData = async () => {
  try {
    const mainData = await responseData("/main");
    return mainData.articles;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(`can not getMainData:${error}`);
    }
    return null;
  }
};

export default getMainData;
