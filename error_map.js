const GError = require('@grpc/grpc-js').status;

/**
 * map grpc error to http error
 * @param {Integer} code - grpc error code
 * @returns {Integer} http error code
 */
function grpcErrorToHttpError(code) {
  switch (code) {
    case GError.CANCELLED: return 499;
    case GError.UNKNOWN: return 500;
    case GError.INVALID_ARGUMENT: return 400;
    case GError.DEADLINE_EXCEEDED: return 504;
    case GError.NOT_FOUND: return 404;
    case GError.ALREADY_EXISTS: return 409;
    case GError.PERMISSION_DENIED: return 403;
    case GError.RESOURCE_EXHAUSTED: return 429;
    case GError.FAILED_PRECONDITION: return 400;
    case GError.ABORTED: return 409;
    case GError.OUT_OF_RANGE: return 400;
    case GError.NOT_IMPLEMENTED: return 501;
    case GError.INTERNAL: return 500;
    case GError.UNAVAILABLE: return 503;
    case GError.DATA_LOSS: return 500;
    case GError.UNAUTHENTICATED: return 401;
    default: return 500;
  }
}

module.exports = {
  grpcErrorToHttpError,
};
