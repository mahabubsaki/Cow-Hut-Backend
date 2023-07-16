import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { signUp } from "./user.service";
import { IUser } from "./user.interface";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

export const signUpController = catchAsync(async (req: Request, res: Response) => {
    const userData: IUser = req.body;
    const result = await signUp(userData);
    sendResponse<IUser>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Users created successfully"
    });
});

export const getAllUsersController = catchAsync(async (req: Request, res: Response) => {

});

export const getSingleUserController = catchAsync(async (req: Request, res: Response) => {

});


export const updateUserController = catchAsync(async (req: Request, res: Response) => {

});

export const deleteUserController = catchAsync(async (req: Request, res: Response) => {

});