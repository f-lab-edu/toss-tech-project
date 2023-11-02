import { initMocks } from "./mock/index";
import { start } from "./router/index";
const hasMocks = initMocks();

if (hasMocks) {
  start();
}
