import { setupWorker } from "msw";
import main from "../api/get-main";
import detail from "../api/get-detail";

const initMocks = () => {
  try {
    const mockJSON = [main, detail].map(RestHandler => {
      return RestHandler();
    });
    const worker = setupWorker(...mockJSON);
    worker.start();
    return true;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(`worker error: ${error}`);
    }
    return false;
  }
};

export { initMocks };
