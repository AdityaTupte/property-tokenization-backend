import { AppError } from "./AppBaseError";

export class ValidationError extends AppError {
  constructor(
    message = "Invalid request",
    options?: {
      cause?: unknown;
    }
  ) {
    super(
      message,
      "VALIDATION_ERROR",
      400,
      options
    );

    this.name = "ValidationError";
  }
}