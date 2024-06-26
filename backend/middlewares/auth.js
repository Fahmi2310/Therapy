import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken";

// Middleware to authenticate dashboard admin users
export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.adminToken;

  if (!token) {
    return next(new ErrorHandler("Dashboard User is not authenticated!", 400));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.id);

    if (!user || user.role !== "Admin") {
      return next(new ErrorHandler("Unauthorized: Admin access required!", 403));
    }

    req.user = user;
    next();
  } catch (err) {
    return next(new ErrorHandler("Unauthorized: Invalid token!", 403));
  }
});

// Middleware to authenticate frontend patient users
export const isPatientAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.patientToken;

  if (!token) {
    return next(new ErrorHandler("User is not authenticated!", 400));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.id);

    if (!user || user.role !== "Patient") {
      return next(new ErrorHandler("Unauthorized: Patient access required!", 403));
    }

    req.user = user;
    next();
  } catch (err) {
    return next(new ErrorHandler("Unauthorized: Invalid token!", 403));
  }
});

// Middleware to authorize access based on roles
export const isAuthorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorHandler("Unauthorized: Role not allowed!", 403));
    }
    next();
  };
};
