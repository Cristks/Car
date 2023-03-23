import { Request, Response, NextFunction } from 'express';
import ErrorHttp from '../Utils/ErrorHttp';

const errorMiddlewares = (
  error: Error & Partial<ErrorHttp>,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Internal server Error';
  return res.status(statusCode).json({ message });
};
export default errorMiddlewares;