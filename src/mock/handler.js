import { rest } from "msw";

const baseURL = "/blog/v1";
const handler = (method, path, data, callback) =>
  rest[method](baseURL+path, (req, res, ctx) => res(ctx.json(callback(req, data))));

export default handler;
