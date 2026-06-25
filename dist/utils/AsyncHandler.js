import { ApiError } from "./ApiError.js";
const asyncHandler = (requestHandler) => async (req, res, next) => {
    try {
        await requestHandler(req, res, next);
    }
    catch (error) {
        if (error instanceof ApiError) {
            res.status(error.statusCode).json({
                success: error.success,
                message: error.message,
                errors: error.errors,
            });
            return;
        }
        res.status(500).json({
            success: false,
            message: "Internal server Error"
        });
    }
};
export default asyncHandler;
//# sourceMappingURL=AsyncHandler.js.map