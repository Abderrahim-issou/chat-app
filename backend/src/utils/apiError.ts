class ApiError extends Error {
  statusCode: number;
  data?: object | null;
  success: boolean;
  errors: Error[];

  constructor(
    statusCode: number,
    message = 'Something went wrong',
    errors: Error[] = [],
    stack?: string // This is optional, so it can be undefined
  ) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = errors;

    // Explicitly handle stack being null or undefined
    if (stack !== undefined && stack !== null) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
