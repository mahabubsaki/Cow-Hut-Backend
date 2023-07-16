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



const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
    const responseData: IApiResponse<T> = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message,
        data: null,
        errorMessages: null,
        stack: null
    };

    if (data.errorMessages && data.errorMessages.length > 0) {
        responseData.errorMessages = data.errorMessages;
        responseData.stack = data.stack;
        delete responseData.data;
    } else {
        responseData.data = data.data;
        delete responseData.errorMessages;
        delete responseData.stack;
    }

    res.status(data.statusCode).json(responseData);
};

export default sendResponse;
