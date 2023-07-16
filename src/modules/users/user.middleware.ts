import { RequestHandler } from "express";
import { UserZodSchema } from "./user.schema";

export const validateSignedUpUser: RequestHandler = async (req, _, next): Promise<void> => {
    try {
        await UserZodSchema.parseAsync(req);
        next();
    }
    catch (err) {
        next(err);
    }
}

