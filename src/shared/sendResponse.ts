import { Response } from "express";
interface ErrorMessages {
    path: string,
    message: string;
}
export interface IApiResponse<T> {
    statusCode: number,
    success: boolean,
    message: string;
    data?: T | null;
    errorMessages?: ErrorMessages[] | null;
    stack?: string | null;
}



const sendResponse = <T>(res: Response, data: IApiResponse<T>, errorMessages?: ErrorMessages[], stack?: string): void => {
    const responseData: IApiResponse<T> = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message,
        data: null,
        errorMessages: null,
        stack: null
    };

    if (errorMessages && errorMessages.length > 0) {
        responseData.errorMessages = errorMessages;
        responseData.stack = stack;
        delete responseData.data;
    } else {
        responseData.data = data.data || null;
        delete responseData.errorMessages;
        delete responseData.stack;
    }

    res.status(data.statusCode).json(responseData);
};

export default sendResponse;
