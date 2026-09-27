export class InfrastructureError extends Error {
  public readonly code: string;
  public readonly retryable: boolean;

  constructor(
    message: string,
    code: string,
    options?: {
      cause?: unknown;
      retryable?: boolean;
    }
  ) {
    super(message, {
      cause: options?.cause,
    });

    this.name = "InfrastructureError";
    this.code = code;
    this.retryable = options?.retryable ?? false;

    Error.captureStackTrace(this, this.constructor);
  }
}