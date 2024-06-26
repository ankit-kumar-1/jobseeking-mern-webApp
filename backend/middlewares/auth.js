import { catchAsyncError } from "./catchAsyncError.js";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken"
import ErrorHandler from "./error.js";

export const isAuthorized = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler("user not authorized", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
})