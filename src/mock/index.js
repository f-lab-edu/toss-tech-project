import { setupWorker } from "msw";
import main from "../api/get-main";
import detail from "../api/get-detail";

const initMocks = () => {
  try {
    const mockJSON = [main, detail].map((data) => {
      return data();
    });
    const worker = setupWorker(...mockJSON);
    worker.start();
    return true;
  } catch (error) {
    console.error(`worker error: ${error}`);
  }
  return false;
};

export { initMocks };
