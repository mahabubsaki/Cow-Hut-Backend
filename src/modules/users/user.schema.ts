import { Schema } from "mongoose";
import { z } from 'zod';
import httpStatus from 'http-status';

import { IUser, IUserMethods, IUserStatics } from "./user.interface";
import { ApiError } from "../../shared/ApiError";

export const UserMongooseSchema = new Schema<IUser, IUserStatics, IUserMethods>(
    {
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ["buyer", "seller"]
        },
        name: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            middleName: {
                type: String
            }
        },
        phoneNumber: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        budget: {
            type: Number,
            required: true
        },
        income: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    }
);


UserMongooseSchema.pre('save', async function (next) {
    if (this.role === 'buyer' && this.income > 0) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Buyers won't have any income");
    }
    if (this.role === 'seller' && this.budget > 0) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Sellers won't have any budget");
    }
    next();
});

export const UserZodSchema = z.object({
    password: z.string({
        invalid_type_error: "Password must be string",
        required_error: "Password is required"
    }),
    role: z.enum(["buyer", "seller"], {
        invalid_type_error: "Role must be either buyer or seller",
        required_error: "Role is required"
    }),
    name: z.object({
        firstName: z.string({
            invalid_type_error: "Firstname must be string",
            required_error: "Firstname is required"
        }),
        lastName: z.string({
            invalid_type_error: "Lastname must be string",
            required_error: "Lastname is required"
        }),
        middleName: z.string().optional()
    }, {
        required_error: "Name is required"
    }),
    phoneNumber: z.string({
        invalid_type_error: "Phonenumber must be string",
        required_error: "Phonenumber is required"
    }),
    address: z.string({
        invalid_type_error: "Address must be string",
        required_error: "Address is required"
    }),
    budget: z.number({
        invalid_type_error: "Budget must be number",
        required_error: "Budget is required"
    }),
    income: z.number({
        invalid_type_error: "Income must be number",
        required_error: "Income is required"
    })
});
