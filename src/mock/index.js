import { setupWorker } from "msw";
import main from "../api/get-main";
import detail from "../api/get-detail";

const initMocks = () => {
  try {
      const mockHandler = [main, detail].map(handler => handler());
      const worker = setupWorker(...mockHandler);
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
