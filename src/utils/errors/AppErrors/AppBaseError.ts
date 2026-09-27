export class AppError extends Error {
  public readonly code: string;
  public readonly statusCode: number;

  constructor(
    message: string,
    code: string,
    statusCode: number,
    options?: {
      cause?: unknown;
    }
  ) {
    super(message, {
      cause: options?.cause,
    });

    this.name = "AppError";
    this.code = code;
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}