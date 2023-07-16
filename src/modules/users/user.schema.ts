import { Schema } from "mongoose";

import { IUser, IUserMethods, IUserStatics } from "./user.interface";

export const UserSchema = new Schema<IUser, IUserStatics, IUserMethods>(
    {
        password: { type: String, required: true },
        role: { type: String, required: true, enum: ["buyer", "seller"] },
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
        phoneNumber: { type: String, required: true },
        address: { type: String, required: true },
        budget: { type: Number, required: true },
        income: { type: Number, required: true },
    },
    {
        timestamps: true, toJSON: {
            virtuals: true
        }
    }
);