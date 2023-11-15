import { setupServer } from "msw/node";
import main from "../api/get-main";
import detail from "../api/get-detail";

const mockHandler = [main, detail].map(handler => handler());
export const server = setupServer(...mockHandler);