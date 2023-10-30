import { setupWorker } from "msw";
import main from "../api/get-main";
import detail from "../api/get-detail";

const initMocks = () => {
  try {
    if (process.env.NODE_ENV === "development") {
      const mockHandler = [main, detail].map(RestHandler => RestHandler());
      const worker = setupWorker(...mockHandler);
      worker.start();
      return true;
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(`worker error: ${error}`);
    }
    return false;
  }
};

export { initMocks };
