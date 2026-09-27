import { AppError } from "./AppBaseError";

export class ConflictError extends AppError {
  constructor(message: string) {
    super(
      message,
      "CONFLICT",
      409
    );

    this.name = "ConflictError";
  }
}