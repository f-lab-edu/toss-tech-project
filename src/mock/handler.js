import { rest } from "msw";

const handler = (method, path, data, callback) =>
  rest[method](path, (req, res, ctx) => res(ctx.json(callback(req, data))));

export default handler;
