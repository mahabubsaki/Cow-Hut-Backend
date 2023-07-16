import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";

export const signUpController = catchAsync(async (req: Request, res: Response) => {
    const userData = req.body;
});

export const getAllUsersController = catchAsync(async (req: Request, res: Response) => {

});

export const getSingleUserController = catchAsync(async (req: Request, res: Response) => {

});


export const updateUserController = catchAsync(async (req: Request, res: Response) => {

});

export const deleteUserController = catchAsync(async (req: Request, res: Response) => {

});