import { AppError } from "./AppBaseError";

export class NotFoundError extends AppError {
  constructor(
    resource: string,
    id?: string
  ) {
    super(
      id
        ? `${resource} ${id} not found`
        : `${resource} not found`,
      "NOT_FOUND",
      404
    );

    this.name = "NotFoundError";
  }
}