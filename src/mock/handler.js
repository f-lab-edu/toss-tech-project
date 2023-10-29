import { rest } from "msw";

export const handler = (method, path, data, callback) => {
  return rest[method](path, (req, res, ctx) => {
    return res(ctx.json(callback(req, data)));
  });
};
