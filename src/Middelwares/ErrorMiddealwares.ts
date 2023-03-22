import { ErrorRequestHandler } from 'express';

const errorMiddlewares: ErrorRequestHandler = (err, _req, res, _next) => {
  const { status, message } = err;

  res.status(status || 500).json({ message });
};

export default errorMiddlewares;