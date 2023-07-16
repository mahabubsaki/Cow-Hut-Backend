import { IUser } from "./user.interface";
import { User } from "./user.model";

export const signUp = async (payload: IUser): Promise<IUser> => {
    const result = await User.create(payload);
    return result;
};