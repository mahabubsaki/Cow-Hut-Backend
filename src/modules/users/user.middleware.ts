import { RequestHandler } from "express";
import { UpdatedZodSchema, UserZodSchema } from "./user.schema";
import { ApiError } from "../../shared/ApiError";
import httpStatus from "http-status";
import { Types } from "mongoose";

export const validateSignedUpUser: RequestHandler = async (req, _, next): Promise<void> => {
    try {
        await UserZodSchema.parseAsync(req.body);
        next();
    }
    catch (err) {
        next(err);
    }
};
export const validateUpdatedUser: RequestHandler = async (req, _, next): Promise<void> => {
    try {
        await UpdatedZodSchema.parseAsync(req.body);
        next();
    }
    catch (err) {
        console.log(err);
        next(err);
    }

};

export const validateObjectId: RequestHandler = async (req, _, next): Promise<void> => {
    if (!Types.ObjectId.isValid(req.params.id)) {
        const err = new ApiError(httpStatus.BAD_REQUEST, "Invalid ObjectID Given");
        next(err);
        return;
    }
    next();
};
