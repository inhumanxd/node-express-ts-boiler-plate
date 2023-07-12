import { NextFunction, Request, Response } from "express";

type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const wrap = (fn: MiddlewareFunction) => (req: Request, res: Response, next: NextFunction) => Promise.resolve(fn(req, res, next)).catch(next);

const handle = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: err.message });
};

export { wrap, handle };
